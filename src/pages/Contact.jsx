import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="form-section">
      <div className="page-header">
        <p className="section-label">GET IN TOUCH</p>
        <h1>Contact Us</h1>
        <p>
          Have questions about a car? Send us a message.
        </p>
      </div>

      {submitted ? (
        <div className="success">
          ✅ Thank you! Your message has been sent.
        </div>
      ) : (
        <form
          className="car-form"
          onSubmit={handleSubmit}
        >
          <input
            required
            placeholder="Your Name"
          />

          <input
            required
            type="email"
            placeholder="Email Address"
          />

          <input
            required
            placeholder="Phone Number"
          />

          <textarea
            required
            placeholder="Your Message"
          />

          <button
            type="submit"
            className="submit-btn"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}

export default Contact;