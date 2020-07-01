import React from "react";
import "./base.css";

class Form extends React.Component {
  render() {
    return (
      <form
        name="contact-test-form"
        method="POST"
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact-test-form" />
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        {/* <p>
          <label>
            Your Role:{" "}
            <select name="role[]" multiple>
              <option value="leader">Leader</option>
              <option value="follower">Follower</option>
            </select>
          </label>
        </p> */}
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    );
  }
}

export default Form;
