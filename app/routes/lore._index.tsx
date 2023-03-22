import React from "react";
import Paragraph from "~/components/Paragraph";
import Title from "~/components/Title";

type Props = {};

export const LoreIndex: React.FC<Props> = ({}) => {
  return (
    <>
      <Title>The DeadSafe universe in a nutshell</Title>
      <Paragraph>
        Here you can quickly find the most important informations about the
        universe of The DeadSafe.
      </Paragraph>
    </>
  );
};

LoreIndex.defaultProps = {};

export default LoreIndex;
