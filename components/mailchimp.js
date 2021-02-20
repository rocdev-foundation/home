import React from "react";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";
import styles from "./mailchimp.module.css";

const Mailchimp = (props) => {
  const { loading, error, success, message, handleSubmit } = useMailChimpForm(
    props.postActionUrl
  );
  const { fields, handleFieldChange } = useFormFields({
    EMAIL: "",
  });
  return !props.postActionUrl ? (
    <p>You must provide a postActionUrl param to this component.</p>
  ) : (
    <div className={styles.formwrapper}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(fields);
        }}
      >
        <input
          id="EMAIL"
          autoFocus
          type="email"
          value={fields.EMAIL}
          onChange={handleFieldChange}
          className={styles.input}
          placeholder="Email address"
        />
        <button className={styles.submit} disabled={loading}>
          {!loading && "Sign Up" || "Wait..."}
        </button>
      </form>
      <div className={styles.messages}>
        {loading && "Submitting..."}
        {error && message}
        {success && message}
      </div>
    </div>
  );
};
export default Mailchimp;
