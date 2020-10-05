import { useState, useReducer } from "react";
const INVITE_API = "/api/slackInvite";

const SlackInvite = () => {
  const [email, setEmail] = useState("");
  const [state, dispatch] = useReducer((state, action) => {
    if (action === "submitted") {
      return "SUBMITTED";
    } else if (action === 200) {
      return "SUCCESS";
    } else if (action === 400 || action === 500) {
      return "FAILURE";
    }
  }, "NOT_SUBMITTED");

  const submit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    dispatch("submitted");
    fetch(INVITE_API, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      body: `email=${encodeURIComponent(email)}`,
    }).then((response) => {
      dispatch(response.status);
    });
  };

  const errorMessage = <div>Hmm....something went wrong.</div>;

  if (state === "NOT_SUBMITTED" || state === "FAILURE") {
    return (
      <form onSubmit={submit} method="post" action={INVITE_API}>
        {state === "FAILURE" ? errorMessage : null}
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button type="submit">Submit</button>
      </form>
    );
  } else if (state === "SUBMITTED") {
    return <div>Loading...</div>;
  } else if (state === "SUCCESS") {
    return <div>Success! Check your email for your invite.</div>;
  } else {
    return errorMessage;
  }
};

export default SlackInvite;
