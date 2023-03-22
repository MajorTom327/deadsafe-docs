import React from "react";

type Props = {
  src: string;
  alt?: string;
};

export const Image: React.FC<Props> = ({ src, alt }) => {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <img src={src} alt={alt} className="h-64" />
      </div>
    </>
  );
};

Image.defaultProps = {};

export default Image;
