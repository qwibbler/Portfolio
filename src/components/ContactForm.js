import FormInput from "../components/FormInput";

const ContactForm = () => (
  <form
    className="cards"
    action="https://formspree.io/f/moqyzrzd"
    method="post"
  >
    <div className="card">
      <FormInput label="Name" id="username">
        <input
          type="text"
          id="username"
          name="user-name"
          placeholder="Full Name"
          maxLength="30"
          required
        />
      </FormInput>
      <FormInput label="Email" id="useremail">
        <input
          type="email"
          id="useremail"
          name="user-email"
          placeholder="Email address"
          required
        />
      </FormInput>
      <FormInput label="Message" id="comment">
        <textarea
          name="msg"
          id="comment"
          maxLength="500"
          placeholder="Message"
          required
        ></textarea>
      </FormInput>
      {/* <input type="text" name="_gotcha" style="display:none" /> */}
    </div>
    <div className="btn">
      <button type="submit">Get In Touch</button>
    </div>
  </form>
);

export default ContactForm;
