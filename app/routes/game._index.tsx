import React from "react";
import { Alert } from "react-daisyui";
import Paragraph from "~/components/Paragraph";

type Props = {};

export const GameIndex: React.FC<Props> = ({}) => {
  return (
    <>
      <Alert status="warning">
        <div className="flex flex-col">
          <Paragraph>More informations are coming... Stay tuned!</Paragraph>
          <Paragraph>
            The story is still in development, so it's not ready to be published
            yet.
          </Paragraph>
        </div>
      </Alert>
    </>
  );
};

GameIndex.defaultProps = {};

export default GameIndex;
