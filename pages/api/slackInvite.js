export default function slackInvite(req, res) {
  const email = req.body.email;

  const body = {
    channel_ids: process.env.ROCDEV_SLACK_CHANNEL_IDS,
    email,
    team_id: process.env.ROCDEV_SLACK_TEAM_ID,
    custom_message:
      "Come join the biggest development community in Rochester, NY",
    resend: true,
  };

  return fetch("https://slack.com/api/admin.users.invite", {
    method: "post",
    headers: {
      Authorization: `Bearer ${process.env.ROCDEV_SLACK_INVITE_API_TOKEN}`,
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      // Need to get a token before testing
      console.log(json);
      res.end(200);
    });
}
