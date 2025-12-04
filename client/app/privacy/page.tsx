import { FC } from 'react';

interface Props {};

const Page: FC<Props> = () => {
  return (
    <>
      <header>
        <h1>Privacy Policy</h1>
        <p><strong>Effective Date:</strong> 4 december 2025</p>
        <p><strong>Last Updated:</strong> 4 december 2025</p>
      </header>

      <section>
        <h2>1. Introduction</h2>
        <p>
          Thank you for using <strong>[Your Extension Name]</strong>.
          Your privacy is important to us. This Privacy Policy explains how our Chrome extension
          handles your information.
        </p>
      </section>

      <section>
        <h2>2. Information We Do Not Collect</h2>
        <p>
          We do not collect, store, process, transmit, or share any personal data or usage data.
        </p>
      </section>

      <section>
        <h2>3. How the Extension Works</h2>
        <p>
          All features and functionality of this extension operate
          <strong>locally on your device</strong>. No data is sent to external servers or third parties.
        </p>
        <p>
          The extension does not implement any tracking tools, analytics, or remote logging.
        </p>
      </section>

      <section>
        <h2>4. Third-Party Services</h2>
        <p>
          This extension does <strong>not</strong> use or integrate with any third-party services,
          APIs, analytics tools, or advertising networks.
        </p>
      </section>

      <section>
        <h2>5. Data Security</h2>
        <p>
          Since we do not collect any user data, we do not store any personal or usage information.
          Therefore, there is no risk of your data being leaked, misused, or compromised through this extension.
        </p>
      </section>

      <section>
        <h2>6. Changes to This Policy</h2>
        <p>
          Although this extension does not collect data, we may update this Privacy Policy occasionally
          to reflect changes in functionality or legal requirements.
        </p>
        <p>
          Any updates will be posted at:
          <a href="http://npm-package-check.jung.gent/privacy" target="_blank" rel="noopener noreferrer">
            npm-package-check.jung.gent/privacy
          </a>.
        </p>
      </section>

      <section>
        <h2>7. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy or the extension's data practices,
          you can contact us at:
        </p>
        <p>
          <strong>Email:</strong>
          <a href="mailto:hi@jung.gent">[your-email@example.com]</a>
        </p>
      </section>
    </>
  )
}

export default Page;