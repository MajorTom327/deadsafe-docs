import React from "react";

type Props = {
  src: string;
  alt?: string;
};

const getUrl = (src: string) => {
  const params = new URLSearchParams({
    url: src,
  });

  return `/_vercel/image?${params}`;
};

export const Image: React.FC<Props> = ({ src, alt }) => {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <img src={getUrl(src)} alt={alt} className="h-64" />
      </div>
    </>
  );
};

Image.defaultProps = {};

export default Image;
