import Categories from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "JACKETS",
      imageUrl:
        "https://images.unsplash.com/photo-1673547509465-76f2f76a342c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: 2,
      title: "HATS",
      imageUrl:
        "https://images.unsplash.com/photo-1620281297946-ffbbcebad8f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    },
    {
      id: 3,
      title: "SNEAKERS",
      imageUrl:
        "https://images.unsplash.com/photo-1614860957837-d8cf8798cb25?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 4,
      title: "WOMENS",
      imageUrl:
        "https://images.unsplash.com/photo-1640364596762-e5b1d0966a5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1508&q=80",
    },
    {
      id: 5,
      title: "MENS",
      imageUrl:
        "https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  return <Categories categories={categories} />;
};

export default Home;
