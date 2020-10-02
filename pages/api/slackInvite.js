// # Slack API config
// SLACK_INVITE_API_BASE = os.getenv(
//     'ROCDEV_SLACK_INVITE_API_BASE',
//     default=)
// SLACK_INVITE_API_TOKEN = os.getenv(
//     'ROCDEV_SLACK_INVITE_API_TOKEN', default='not_a_real_token')

export default function slackInvite(req, res) {
  console.log(req.body);
  // return fetch('https://slack.com/api/users.admin.invite', {

  // })
}
