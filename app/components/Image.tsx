import { propOr } from "ramda";
import React from "react";

type ImageWidth = 640 | 750 | 828 | 1080 | 1200;
type Props = {
  src: string;
  alt?: string;
  size?: ImageWidth;
};

type ImageOptimizeOptions = Partial<{
  width: ImageWidth;
  quality: number;
}>;

const getUrl = (src: string, options?: ImageOptimizeOptions) => {
  const params = new URLSearchParams({
    url: src,
    w: propOr(640, "width", options),
    q: propOr(75, "quality", options),
  });

  return `/_vercel/image?${params}`;
};

export const Image: React.FC<Props> = ({ src, alt, size }) => {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <img src={getUrl(src, { width: size })} alt={alt} className="h-64" />
      </div>
    </>
  );
};

Image.defaultProps = {};

export default Image;
