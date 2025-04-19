import React from "react";

interface ReviewContentProps {
  title: string;
  content: string;
}

export const ReviewContent: React.FC<ReviewContentProps> = ({
  title,
  content,
}) => {
  return (
    <div className="w-full mt-4 max-md:max-w-full">
      <h3 className="text-[#1A011E] text-base tracking-[-0.32px] max-md:max-w-full">
        {title}
      </h3>
      <p className="text-[#808080] text-sm leading-[18px] tracking-[-0.28px] mt-2 max-md:max-w-full">
        {content}
      </p>
    </div>
  );
};
