import { useState } from "react";
const INVITE_API = "/api/slackInvite";

const SlackInvite = () => {
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    fetch(INVITE_API, {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
      body: `email=${encodeURIComponent(email)}`,
    });
  };

  return (
    <form onSubmit={submit} method="post" action={INVITE_API}>
      <input
        type="email"
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SlackInvite;
