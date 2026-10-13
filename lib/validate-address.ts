import { isAddress } from "viem";
import type { ChainKey } from "./chains";

const BASE58_ALPHABET =
  "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

function isSolanaAddress(address: string): boolean {
  if (address.length < 32 || address.length > 44) {
    return false;
  }

  for (const character of address) {
    if (!BASE58_ALPHABET.includes(character)) {
      return false;
    }
  }

  return true;
}

export function validateTokenAddress(
  chain: ChainKey,
  address: string,
): boolean {
  const value = address.trim();

  if (chain === "solana") {
    return isSolanaAddress(value);
  }

  return isAddress(value);
}
