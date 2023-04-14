import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useLocation } from "react-router-dom";
import { db } from "../firebase/firebase.config";
import Banner from "../components/Banner";

const ProductDetails = () => {
  const bannerInfo = {
    title: "Product",
    currentPage: "product ",
  };

  const location = useLocation();
  const [productData, setProductData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const productID = location.pathname.split("/")[2];

    async function getProductData() {
      const docRef = doc(db, "Products", productID);
      const docSnap = await getDoc(docRef);

      setProductData(docSnap.data());
      setLoading(false);
    }

    getProductData();
  }, []);

  const {
    img,
    price,
    cetagory,
    description,
    finalPrice,
    quantity,
    subCetagory,
    title,
    discount,
  } = productData;

  return (
    <>
      <Banner bannerInfo={bannerInfo} />
      <main></main>
    </>
  );
};

export default ProductDetails;
