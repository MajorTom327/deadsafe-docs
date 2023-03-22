import React from "react";
import Paragraph from "~/components/Paragraph";
import Title from "~/components/Title";

type Props = {};

export const TheSafeIndex: React.FC<Props> = ({}) => {
  return (
    <>
      <Title>The Safe</Title>
      <Paragraph>
        The safe is a specific smart contract that hold most value of the game.
        When a user buy a game's item, that send most of the value to the safe
        and make it available to win.
      </Paragraph>
      <Paragraph>
        The safe is located in "The Dead's hand" Casino and is build to hold
        most of the value of the MetaCity infrastructure. It was built to handle
        the Casino's property at the begining but was so strong that it was used
        to hold all the value of the city as a bank should do.
      </Paragraph>
    </>
  );
};

TheSafeIndex.defaultProps = {};

export default TheSafeIndex;
