import "./home_categories.scss";
export default function HomeCategories() {
  const categories = [
    "Fiction",
    "Non-fiction",
    "Mystery",
    "Thriller",
    "Romance",
    "Science Fiction",
    "Fantasy",
    "Biography",
    "History",
    "Self-Help",
    "Business",
    "Health",
    "Cooking",
    "Travel",
    "Art",
    "Poetry",
    "Children's",
  ];

  return (
    <div className="home_categories">
      <h1>Browse By Category</h1>
      <div className="categories">
        {categories?.map((category, index) => (
          <p className="single_category" key={index}>
            {category}
          </p>
        ))}
      </div>
    </div>
  );
}
