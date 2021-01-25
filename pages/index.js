import Image from "next/image";
import Link from "next/link";
import { Anchor, Heading, Text } from "../components";

export default function Home() {
  return (
    <div className="text-justify">
      <section>
        <Heading.H1 className={"text-center hidden sm:block"}>
          <Image src="/rocdev.svg" alt="RocDev logo" width={500} height={250} />
        </Heading.H1>
        <Text>
          As the Greater Rochester Area's largest community of tech
          professionals, we aim to share our experiences and knowledge with one
          another in an effort to support and grow as a whole. In disciplines
          related to Software & Development such as Software Engineering,
          Product Management, and Quality Assurance; our hope is to promote the
          quality and profile of the Rochester Tech scene. Our members are made
          up of Contributors, Managers, Entrepreneurs, Students, and Teachers;
          all with a passion for a more skilled and equitable software
          development ecosystem.
        </Text>
      </section>

      <hr className="mt-8" />

      <section>
        <Heading.H3>Code of Conduct</Heading.H3>
        <Text>
          The health and wealthfare of our members are paramount. Therefore, we
          ask that you come in with a positive and inquisitive attitude and
          treat people with respect.
        </Text>
        <Text>
          Please read the{" "}
          <Link href="/code-of-conduct">
            <Anchor>Code of Conduct</Anchor>
          </Link>
          .
        </Text>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
        <section>
          <Heading.H3>Slack</Heading.H3>
          <Text>
            Everyday we chat on Slack helping each other with a baffling stack
            trace, talking about the latest tech news, and sharing career
            advice. We have channels for popular languages like JavaScript and
            Python as well as popular topics like cryptocurrencies and working
            remotely.
          </Text>
          <Text>
            {/* generated from https://rocdev.slack.com/admin/shared_invites */}
            <Anchor href="https://join.slack.com/t/rocdev/shared_invite/zt-hcnnt9ya-qlcLd8C0cF9Z0wksTS9G3g">
              Join our Slack workspace.
            </Anchor>
          </Text>
        </section>
        <section>
          <Heading.H3>Meetup</Heading.H3>
          <Text>
            We gather at least once per month to learn something from fellow
            members, hack on projects, or just hang out. Use the links below to
            see what else is happening and get notified when another event is
            scheduled.
          </Text>
          <Text>
            <Anchor href="https://www.meetup.com/RocDev">
              Join our Meetup group.
            </Anchor>
          </Text>
        </section>
      </div>
    </div>
  );
}
