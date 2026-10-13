import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Fingerprint,
  Globe2,
  ScanSearch,
  Shield,
  ShieldAlert,
  Zap,
} from "lucide-react";

const chains = [
  { id: "solana", name: "Solana", symbol: "SOL" },
  { id: "arc", name: "Arc", symbol: "ARC" },
  { id: "robinhood", name: "Robinhood Chain", symbol: "HOOD" },
  { id: "ethereum", name: "Ethereum", symbol: "ETH" },
  { id: "bsc", name: "BNB Smart Chain", symbol: "BNB" },
  { id: "base", name: "Base", symbol: "BASE" },
  { id: "arbitrum", name: "Arbitrum", symbol: "ARB" },
  { id: "optimism", name: "Optimism", symbol: "OP" },
];

const features = [
  {
    icon: ShieldAlert,
    title: "Contract Security",
    description:
      "Investigate dangerous permissions, suspicious functions, and potential contract vulnerabilities.",
  },
  {
    icon: Fingerprint,
    title: "Token Analysis",
    description:
      "Examine ownership, supply concentration, and other important token risk indicators.",
  },
  {
    icon: Zap,
    title: "Honeypot Detection",
    description:
      "Investigate potential trading restrictions and suspicious buying or selling behavior.",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a href="/" className="brand" aria-label="DREEM SI home">
          <span className="brand-mark">
            <Shield size={23} strokeWidth={2.4} />
          </span>

          <span>
            DREEM <span className="brand-accent">SI</span>
            <small>SECURITY INTELLIGENCE</small>
          </span>
        </a>

        <nav className="desktop-nav">
          <a href="#features">Features</a>
          <a href="#networks">Networks</a>
          <a href="#how-it-works">How it works</a>
          <a href="#scanner" className="nav-cta">
            Open scanner <ArrowUpRight size={15} />
          </a>
        </nav>

        <a href="#scanner" className="mobile-cta">
          Scan token
        </a>
      </header>

      <section className="hero">
        <div className="hero-glow" />

        <div className="announcement">
          <span className="live-dot" />
          YOUR FIRST LINE OF DEFENSE IN WEB3
          <ArrowRight size={14} />
        </div>

        <h1>
          Don&apos;t trust.
          <br />
          <span>Verify first.</span>
        </h1>

        <p className="hero-description">
          Investigate token security in seconds. Uncover suspicious contract
          permissions, trading risks, and potential red flags before you make
          your next move.
        </p>

        <div className="hero-actions">
          <a href="#scanner" className="primary-button">
            <ScanSearch size={19} />
            Scan a token
            <ArrowRight size={17} />
          </a>

          <a href="#features" className="secondary-button">
            Explore features
          </a>
        </div>

        <div className="trust-row">
          <span>
            <CheckCircle2 size={15} />
            Evidence-based findings
          </span>
          <span>
            <Globe2 size={15} />
            Multichain vision
          </span>
        </div>
      </section>

      <section id="networks" className="networks-section">
        <div className="section-heading">
          <span className="eyebrow">MULTICHAIN COVERAGE</span>
          <h2>One scanner. Nine networks.</h2>
          <p>
            Choose from the blockchains DREEM SI is designed to support.
            Actual security-check availability depends on provider integration.
          </p>
        </div>

        <div className="network-grid">
          {chains.map((chain) => (
            <a
              key={chain.id}
              href="#scanner"
              className="network-card"
              aria-label={`Scan a token on ${chain.name}`}
            >
              <span className={`network-symbol network-${chain.id}`}>
                {chain.symbol.slice(0, 1)}
              </span>
              <span className="network-name">{chain.name}</span>
              <ArrowUpRight size={15} className="network-arrow" />
            </a>
          ))}
        </div>
      </section>

      <section id="scanner" className="scanner-section">
        <div className="section-heading">
          <span className="eyebrow">TOKEN INVESTIGATION</span>
          <h2>Know what you&apos;re buying.</h2>
          <p>Start with a token address and its blockchain.</p>
        </div>

        <div className="scanner-card">
          <div className="scanner-card-top">
            <div className="scanner-icon">
              <ScanSearch size={23} />
            </div>

            <div>
              <h3>Token security scanner</h3>
              <p>Enter a token address to begin your investigation.</p>
            </div>

            <span className="beta-badge">BETA</span>
          </div>

          <form action="/api/scan" method="GET" className="scan-form">
            <label htmlFor="chain">Blockchain network</label>

            <select id="chain" name="chain" defaultValue="solana">
              <option value="solana">Solana</option>
              <option value="arc">Arc</option>
              <option value="robinhood">Robinhood Chain</option>
              <option value="ethereum">Ethereum</option>
              <option value="bsc">BNB Smart Chain</option>
              <option value="base">Base</option>
              <option value="arbitrum">Arbitrum</option>
              <option value="optimism">Optimism</option>
            </select>

            <label htmlFor="address">Token contract / mint address</label>

            <input
              id="address"
              name="address"
              type="text"
              placeholder="Paste token contract or mint address"
              autoComplete="off"
              spellCheck={false}
              minLength={20}
              maxLength={100}
              required
            />

            <button type="submit" className="primary-button scan-button">
              <ScanSearch size={18} />
              Analyze token
              <ArrowRight size={17} />
            </button>
          </form>

          <div className="scanner-note">
            <ShieldAlert size={15} />
            Always verify the evidence. No scanner can guarantee a token is
            safe.
          </div>
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="section-heading">
          <span className="eyebrow">SECURITY INTELLIGENCE</span>
          <h2>See beyond the surface.</h2>
          <p>
            Understand the risks behind a token, not just its price or
            popularity.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article className="feature-card" key={feature.title}>
                <div className="feature-icon">
                  <Icon size={23} />
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>

                <span className="feature-link">
                  Security intelligence <ArrowRight size={15} />
                </span>
              </article>
            );
          })}
        </div>
      </section>

      <section id="how-it-works" className="how-section">
        <span className="eyebrow">SIMPLE BY DESIGN</span>
        <h2>Three steps. Better awareness.</h2>

        <div className="steps-grid">
          <div>
            <span className="step-number">01</span>
            <h3>Select a network</h3>
            <p>Choose the blockchain where the token exists.</p>
          </div>

          <div>
            <span className="step-number">02</span>
            <h3>Enter the address</h3>
            <p>Provide the token address you want to investigate.</p>
          </div>

          <div>
            <span className="step-number">03</span>
            <h3>Review the evidence</h3>
            <p>Understand detected risks and the checks performed.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <a href="/" className="footer-brand">
          DREEM <span>SI</span>
        </a>

        <p>Scan smart. Trade safer.</p>

        <span className="footer-disclaimer">
          Security analysis is informational and cannot guarantee safety.
        </span>

        <span className="copyright">
          © {new Date().getFullYear()} DREEM SI
        </span>
      </footer>
    </main>
  );
}