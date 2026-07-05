function ContactForm() {
  return (
    <form action="https://formspree.io/f/mwpgzrgr" method="POST" aria-label="Contact form">
      <div className="form-group">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your Name"
          autoComplete="name"
          required
          aria-required="true"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your Email"
          autoComplete="email"
          required
          aria-required="true"
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your Message"
          rows="6"
          required
          aria-required="true"
        ></textarea>
      </div>
      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;
