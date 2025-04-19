import React from "react";
import { ReviewHeader } from "./ReviewHeader";
import { ReviewContent } from "./ReviewContent";
import { ReviewFooter } from "./ReviewFooter";

interface ReviewCardProps {
  userImage: string;
  username: string;
  ratingImage: string;
  title: string;
  content: string;
  productName: string;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({
  userImage,
  username,
  ratingImage,
  title,
  content,
  productName,
}) => {
  return (
    <article className="justify-center items-stretch border-b-[color:var(--Grey-2,#E6E6E6)] flex w-full flex-col pt-2 pb-6 border-b border-solid max-md:max-w-full">
      <div className="flex w-full flex-col items-stretch max-md:max-w-full">
        <ReviewHeader
          userImage={userImage}
          username={username}
          ratingImage={ratingImage}
        />
        <ReviewContent title={title} content={content} />
      </div>
      <ReviewFooter productName={productName} />
    </article>
  );
};
