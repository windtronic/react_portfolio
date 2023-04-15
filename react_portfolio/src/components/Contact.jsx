

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <button onClick={() => window.open('mailto:windtronic89@gmail.com', '_blank')}>EMAIL ME</button>
      </div>
      <div className="contact-card">
        <button onClick={() => window.open('https://www.linkedin.com/in/toni-hall/', '_blank')}>FIND ME ON LINKEDIN</button>
      </div>
      <div className="contact-card">
        <button onClick={() => window.open('https://github.com/windtronic/', '_blank')}>FIND ME ON GITHUB</button>
      </div>
    </div>
  );
}

