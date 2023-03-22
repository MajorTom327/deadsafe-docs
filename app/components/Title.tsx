import React from "react";
import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
};

export const Title: React.FC<Props> = ({
  children,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
}) => {
  const classes = classNames({
    "mt-3 text-4xl": h1,
    "mt-3 text-2xl": h2,
    "text-xl": h3,
    "text-lg": h4,
    "text-base": h5,
    "text-sm": h6,
  });

  if (h1) return <h1 className={classes}>{children}</h1>;
  if (h2) return <h2 className={classes}>{children}</h2>;
  if (h3) return <h3 className={classes}>{children}</h3>;
  if (h4) return <h4 className={classes}>{children}</h4>;
  if (h5) return <h5 className={classes}>{children}</h5>;
  if (h6) return <h6 className={classes}>{children}</h6>;
  return null;
};

Title.defaultProps = {
  h1: true,
};

export default Title;
