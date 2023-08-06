export type ReviewProps = {
  id: number;
  img: any;
  title: string;
  author: string;
  rating: number;
  reviewer: string;
  desc: string;
};
export type SingleReviewProps = {
  params: {
    id: number;
  };
};
