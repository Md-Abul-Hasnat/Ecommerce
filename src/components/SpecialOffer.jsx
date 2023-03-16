import React, { useState } from "react";

const SpecialOffer = () => {
  const [cetagory, setCetagory] = useState("");

  function selectedCetagory(e) {
    setCetagory(e.target.innerText);
  }
  console.log(cetagory);

  return (
    <section className="w-screen mt-32">
      <h3 className="sub-heading">SPECIAL OFFER</h3>
      <h1 className="main-heading">TOP COLLECTION 2023</h1>
      <ul className="bg-gray-100 w-[80%] mx-auto mt-7 grid grid-cols-3 gap-3 text-center py-4 px-3 rounded-full text-gray-clr">
        <li onClick={selectedCetagory} className="cetagory-btn">
          ALL
        </li>
        <li className="cetagory-btn" onClick={selectedCetagory}>
          LIVING ROOM
        </li>
        <li className="cetagory-btn" onClick={selectedCetagory}>
          BATH ROOM
        </li>
        <li className="cetagory-btn" onClick={selectedCetagory}>
          {" "}
          BED ROOM
        </li>
        <li className="cetagory-btn" onClick={selectedCetagory}>
          KITCHEN
        </li>
        <li className="cetagory-btn" onClick={selectedCetagory}>
          ACCESSORIES
        </li>
      </ul>
    </section>
  );
};

export default SpecialOffer;
