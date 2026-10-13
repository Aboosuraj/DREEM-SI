export const SUPPORTED_CHAINS = {
  solana: {
    name: "Solana",
    type: "solana",
    status: "pending",
  },
  arc: {
    name: "Arc",
    type: "evm",
    chainId: 5042,
    status: "pending",
  },
  robinhood: {
    name: "Robinhood Chain",
    type: "evm",
    chainId: 4663,
    status: "pending",
  },
  ethereum: {
    name: "Ethereum",
    type: "evm",
    chainId: 1,
    status: "pending",
  },
  bsc: {
    name: "BNB Smart Chain",
    type: "evm",
    chainId: 56,
    status: "pending",
  },
  base: {
    name: "Base",
    type: "evm",
    chainId: 8453,
    status: "pending",
  },
  arbitrum: {
    name: "Arbitrum",
    type: "evm",
    chainId: 42161,
    status: "pending",
  },
  polygon: {
    name: "Polygon",
    type: "evm",
    chainId: 137,
    status: "pending",
  },
  optimism: {
    name: "Optimism",
    type: "evm",
    chainId: 10,
    status: "pending",
  },
} as const;

export type ChainKey = keyof typeof SUPPORTED_CHAINS;
