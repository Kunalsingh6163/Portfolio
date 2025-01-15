function ContactPage() {
  return (
    <div>
      <h1>Contact Us</h1>
      <div>image with contacts</div>
      <div>
        <form>
          <div>
            Name: <input type="text" name="name" />
          </div>
          <div>
            Email: <input type="email" name="email" />
          </div>
          <div>
            Message: <textarea name="message" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
