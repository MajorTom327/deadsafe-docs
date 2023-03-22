import React from "react";
import Paragraph from "~/components/Paragraph";
import Title from "~/components/Title";
import { Alert } from "react-daisyui";

type Props = {};

export const TheSafeKeys: React.FC<Props> = ({}) => {
  return (
    <>
      <Title>Keys</Title>
      <Paragraph>
        The keys are the foundation of the game. They are hidden in the city and
        the holding of all the keys is the only way to open the vault.
      </Paragraph>

      <Title h2>Keys as NFT</Title>
      <Paragraph>
        The keys should be ERC-1155 Tokens and may be found in the city by somes
        game conditions as ownership of city's block or refugees number.
      </Paragraph>

      <Alert status="info">
        More informations are on the way... Stay tuned!
      </Alert>
    </>
  );
};

TheSafeKeys.defaultProps = {};

export default TheSafeKeys;
