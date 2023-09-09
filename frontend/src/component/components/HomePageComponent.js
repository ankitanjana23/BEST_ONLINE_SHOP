import React, { useEffect, useState } from "react";
import { Row, Container } from "react-bootstrap";
import ProductCarouselComponent from "../../component2/ProductCarouselComponent";
import CategoryCardComponent from "../../component2/CategoryCardComponent";
import MetaComponent from "../../component2/MetaComponent";
// import AdminChatsPage from "./admin/AdminChatsPage";

const HomePageComponent = ({ categories, getBestsellers }) => {
  const [mainCategories, setMainCategories] = useState([]);
  const [bestSellers, setBestsellers] = useState([]);

  useEffect(() => {
    getBestsellers()
      .then((data) => {
        setBestsellers(data);
      })
      .catch((er) =>
        console.log(
          er.response.data.message ? er.response.data.message : er.response.data
        )
      );
    setMainCategories((cat) =>
      categories.filter((item) => !item.name.includes("/"))
    );
  }, [categories]);

   return (
    <>
    <MetaComponent/>
      <ProductCarouselComponent bestSellers={bestSellers}/>
      <Container>
        <Row xs={1} md={2} className="g-4 mt-5">
          {mainCategories.map((category, idx) => (
            <CategoryCardComponent key={idx} category={category} idx={idx} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomePageComponent;
