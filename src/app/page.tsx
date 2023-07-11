import Header from "@/components/header/Header";
import LatestReviews from "@/components/Latest_reviews";
import LatestUsers from "@/components/Latest_users";
import HomeCategories from "@/components/BrowseByCategories/HomeCategories";
export default function Home() {
  return (
    <div className="home">
      <Header />
      <HomeCategories />
      <LatestReviews />
      <LatestUsers />
    </div>
  );
}
