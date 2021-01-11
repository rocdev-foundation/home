import Image from "next/image";
import Link from "next/link";
import { Anchor, Heading, Text } from "../components";

export default function Home() {
  return (
    <>
      <Heading.H1 className={"text-center"}>
        <Image src="/rocdev.svg" alt="RocDev logo" width={500} height={250} />
      </Heading.H1>
      <Text>
        As the Greater Rochester Area's largest community of tech professionals,
        we aim to share our experiences and knowledge with one another in an
        effort to support and grow as a whole. In disciplines related to
        Software & Development such as Software Engineering, Product Management,
        and Quality Assurance; our hope is to promote the quality and profile of
        the Rochester Tech scene. Our members are made up of Contributors,
        Managers, Entrepreneurs, Students, and Teachers; all with a passion for
        a more skilled and equitable software development ecosystem.
      </Text>

      <Text>
        Read the{" "}
        <Link href="/code-of-conduct">
          <Anchor>Code of Conduct</Anchor>
        </Link>
      </Text>

      <Heading.H3>Slack</Heading.H3>
      <Heading.H3>Meetup</Heading.H3>
    </>
  );
}
