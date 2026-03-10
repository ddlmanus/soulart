import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <section className="hero">
        <span className="tag">Open Source Edition</span>
        <h1>Public baseline for a design product</h1>
        <p>
          This repository intentionally includes only basic frontend structure and static pages. Core commercial
          capabilities are not part of this public release.
        </p>
        <div className="grid">
          <article className="card">
            <h3>Included</h3>
            <p>App Router baseline, global styles, legal pages, and simple landing content.</p>
          </article>
          <article className="card">
            <h3>Excluded</h3>
            <p>Canvas engine, chat module, admin backend, model routing, DB/Redis, and cloud integrations.</p>
          </article>
          <article className="card">
            <h3>Reason</h3>
            <p>Protect production logic, private infrastructure, and provider credentials.</p>
          </article>
        </div>
        <Link className="cta" href="/about">
          View scope details
        </Link>
      </section>

      <div className="footer">
        Last updated: 2026-03-10. This public edition is safe for open-source sharing.
      </div>
    </div>
  );
}
