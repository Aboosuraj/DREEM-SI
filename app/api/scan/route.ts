import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { SUPPORTED_CHAINS } from "../../../lib/chains";
import { validateTokenAddress } from "../../../lib/validate-address";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const requestSchema = z.object({
  chain: z.enum([
    "solana",
    "arc",
    "robinhood",
    "ethereum",
    "bsc",
    "base",
    "arbitrum",
      "optimism",
  ]),
  address: z.string().trim().min(1).max(100),
});

export async function GET(request: NextRequest) {
  const parsed = requestSchema.safeParse({
    chain: request.nextUrl.searchParams.get("chain"),
    address: request.nextUrl.searchParams.get("address"),
  });

  if (!parsed.success) {
    return NextResponse.json(
      {
        success: false,
        error: "Select a supported blockchain and enter a token address.",
      },
      { status: 400 },
    );
  }

  const { chain, address } = parsed.data;
  const network = SUPPORTED_CHAINS[chain];

  if (!validateTokenAddress(chain, address)) {
    return NextResponse.json(
      {
        success: false,
        error:
          chain === "solana"
            ? "Invalid Solana address format. Check the token mint address."
            : "Invalid EVM address format. Enter a valid 0x address.",
      },
      { status: 400 },
    );
  }

  return NextResponse.json({
    success: true,
    project: "DREEM SI",
    reportStatus: "provider_not_connected",
    network: {
      id: chain,
      name: network.name,
      type: network.type,
      chainId: "chainId" in network ? network.chainId : null,
    },
    token: {
      address: address.trim(),
    },
    risk: {
      score: null,
      level: "unavailable",
      message:
        "Security analysis is not yet available because a security provider has not been connected.",
    },
    checks: [],
    coverage: {
      status: "not_integrated",
      message:
        "Address format validation passed. No on-chain security analysis has been performed.",
    },
    disclaimer:
      "Address format validation does not prove that a token is legitimate or safe.",
    generatedAt: new Date().toISOString(),
  });
}
