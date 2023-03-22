import React from "react";
import Paragraph from "~/components/Paragraph";
import Title from "~/components/Title";

type Props = {};

export const LoreCryptoKaren: React.FC<Props> = ({}) => {
  return (
    <>
      <Title>The Crypto-Karen</Title>
      <Paragraph>
        The Crypto-Karen are a group of Crypto-anti-anarchists. They thinks
        their individuality is more important than others peoples. They think
        they are above everythings and everybody should think like them. A
        summary: They are a bunch of assholes.
      </Paragraph>
    </>
  );
};

LoreCryptoKaren.defaultProps = {};

export default LoreCryptoKaren;
