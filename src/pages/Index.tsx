import React from "react";
import { ReviewComponent } from "@/components/reviews/ReviewComponent";

export default function Index() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Customer Reviews</h1>
      <ReviewComponent />
    </main>
  );
}
