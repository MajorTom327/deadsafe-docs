import React from "react";
import { Title } from "~/components/Title";
import { Paragraph } from "~/components/Paragraph";
import { Alert } from "react-daisyui";
import { GiBiohazard } from "react-icons/gi";

type Props = {};

export const LoreUniverse: React.FC<Props> = ({}) => {
  return (
    <>
      <Title>The Universe</Title>
      <Paragraph>
        The metaverse of The DeadSafe is a universe where peoples are living
        through in total freedom. The government of the metaverse is called
        "DogeGov" and is runned by a famous anonym person: Satoshi.
      </Paragraph>
      <Title h2>The DogeGov</Title>
      <Paragraph>
        Satoshi build a anarchic society centered on the personnal freedom. The
        metaverse is a place where you can be who you want to be and how you
        want. The world is managed and ruled by the peoples for the peoples
        using Ethereum Smart Contract by voting on the propositions of the
        government and the peoples.
      </Paragraph>
      <Title h2>Freedom and Anarchy</Title>
      <Paragraph>
        The most important thing in the metaverse is the freedom. The peoples
        are free to do what they want. The only thing that is forbidden is to
        harm other peoples. The metaverse is a place where you can be who you
        want to be and how you want.
      </Paragraph>
      <Title h2>Civilians of the metaverse</Title>
      <Paragraph>
        In the DeadSafe Metaverse, there is many kind of peoples. Because you
        can live how you want. You can find many great peoples. But you can also
        find some bad peoples. The metaverse is a place where you can be who you
        want to be and how you want. So do not be surprised to find some Karen
        around the corner !
      </Paragraph>
      <Title h2>MetaCity</Title>
      <Paragraph>
        Meta City is a city in the DeadSafe universe. It is the home of the
        DeadSafe Project, and the location of the DeadSafe HQ. In the universe
        of The DeadSafe, MetaCity is the most important city of the universe.
        You can find many great location as "[The Dead's
        Hand](../../04.the-safe/docs.md)" one of the most big Casino in the
        DeadSafe universe.
      </Paragraph>
      <Paragraph>
        If you plan to visit the metaverse, you should visit MetaCity. You can
        take time to visit the casino and take a walk through the great streets
        of the city. Explore the history with some{" "}
        <a href="https://knightssaynah.com" target="_blank">
          knights who say nah
        </a>
        at your side. Or just take a walk in the park and enjoy the view of the
        city.
      </Paragraph>
      <Alert
        status="error"
        icon={
          <div className="w-32">
            <GiBiohazard className="text-4xl" />
          </div>
        }
      >
        <div className="flex flex-col ">
          <Title h3>Bright Future</Title>
          <Paragraph>
            But at all cost, stay away from{" "}
            <span className="text-semibold">Bright Future</span>. It is a place
            where you can find some bad peoples. And you don't want to be in
            trouble with them. Especially if you don't want to be contaminated
            by some curious substances...
          </Paragraph>
        </div>
      </Alert>
    </>
  );
};

LoreUniverse.defaultProps = {};

export default LoreUniverse;
