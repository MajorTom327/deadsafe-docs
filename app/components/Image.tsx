import React from "react";
import type { ImageWidth } from "~/lib/getImageUrl";
import getImageUrl from "~/lib/getImageUrl";

type Props = {
  src: string;
  alt?: string;
  size?: ImageWidth;
};

export const Image: React.FC<Props> = ({ src, alt, size }) => {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <img
          src={getImageUrl(src, { width: size })}
          alt={alt}
          className="h-64"
        />
      </div>
    </>
  );
};

Image.defaultProps = {};

export default Image;
