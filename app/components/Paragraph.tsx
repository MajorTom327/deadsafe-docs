import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Paragraph: React.FC<Props> = ({ children }) => {
  return (
    <>
      <p className="text-lg my-2 text-justify">{children}</p>
    </>
  );
};

Paragraph.defaultProps = {};

export default Paragraph;
