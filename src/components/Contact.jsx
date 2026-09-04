import "../styles/contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-inner">
        <div className="contact-index">
          <span className="section-index">04</span>
          <span>CONTACT</span>
        </div>

        <div className="contact-main">
          <p className="contact-eyebrow">
            HAVE SOMETHING INTERESTING?
          </p>

          <h2>
            Let&apos;s build
            <span> something useful.</span>
          </h2>

          <p className="contact-description">
            I&apos;m currently looking for opportunities
            where I can contribute, learn quickly, and
            work on meaningful engineering problems.
          </p>
        </div>

        <div className="contact-links">
          <a
            href="https://github.com/zhapte"
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span>
            <span aria-hidden="true">↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/lucas-liu-84a6a5334/"
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
            <span aria-hidden="true">↗</span>
          </a>

          <a
            href="/resume/Lucas-Liu-Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <span>Resume</span>
            <span aria-hidden="true">↗</span>
          </a>

          <a href="mailto:lucasqhliu@gmail.com">
            <span>Email</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;