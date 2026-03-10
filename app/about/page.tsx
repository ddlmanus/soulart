export default function AboutPage() {
  return (
    <section className="section">
      <h1>About This Open Release</h1>
      <p>
        Soulart Open is a sanitized snapshot prepared for public collaboration. It is designed as a minimal starter and
        does not mirror internal production architecture.
      </p>
      <h2>Removed modules</h2>
      <ul>
        <li>Full canvas creation and editing implementation</li>
        <li>Complete chat and agent orchestration flows</li>
        <li>Admin panel, internal APIs, and privileged backend features</li>
        <li>LLM routing and provider integration code</li>
        <li>Database schema/migrations, Redis usage, and cloud vendor integrations</li>
      </ul>
      <p>
        If you need a feature from the private system, implement an independent open-source version rather than copying
        internal business logic.
      </p>
    </section>
  );
}
