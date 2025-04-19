import React from "react";

interface ReviewHeaderProps {
  userImage: string;
  username: string;
  ratingImage: string;
}

export const ReviewHeader: React.FC<ReviewHeaderProps> = ({
  userImage,
  username,
  ratingImage,
}) => {
  return (
    <div className="flex items-center gap-2 text-base text-[#1A011E] tracking-[-0.32px] justify-center">
      <img
        src={userImage}
        alt={`${username}'s profile`}
        className="aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto rounded-[100px]"
      />
      <div className="self-stretch w-[122px] my-auto">
        <div>{username}</div>
        <img
          src={ratingImage}
          alt="Rating"
          className="aspect-[5] object-contain w-20"
        />
      </div>
    </div>
  );
};
