import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import Review from "../components/Review";
import { fetchAPI } from "../lib/api";

export default function Home({ reviews }) {
  return (
    <div className="absolute top-28 flex flex-col md:flex-row md:flex-wrap md:w-3/4 md:top-0 md:left-1/4 md:h-full">
      {reviews.map((review) => {
        return <Review review={review} key={review.id} />;
      })}
    </div>
  );
}

export async function getStaticProps() {
  // const postRes = await axios.get("http://localhost:1337/api/articles?populate=*");
  const reviewsRes = await fetchAPI("/articles", { populate: ["image", "place"] });

  return {
    // props: { reviews: postRes.data.data },
    props: { reviews: reviewsRes.data },
  };
}
