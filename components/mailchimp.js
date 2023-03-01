import React from "react";
import { useFormFields, useMailChimpForm } from "use-mailchimp-form";

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
    <div className="mt-2">
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
          className="mr-4 p-2 text-sm rounded border-2 border-solid border-gray-200"
          placeholder="Email address"
        />
        <button
          className="p-2 text-white bg-red-600 hover:bg-red-800 rounded"
          disabled={loading}
        >
          {(!loading && "Sign Up") || "Wait..."}
        </button>
      </form>
      <div className="pl-1 text-sm text-left italic">
        {loading && "Submitting..."}
        {error && message}
        {success && message}
      </div>
    </div>
  );
};
export default Mailchimp;
