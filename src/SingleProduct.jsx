import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./components/Context/ProductContext";
import PageNavigation from "./components/PageNavigation";
import { RotatingLines } from "react-loader-spinner";
import MyImage from "./components/MyImage";
import FormatPrice from "./components/Helper/FormatPrice";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";
import Star from "./components/Star";
import AddtoCart from "./components/AddtoCart";

const URL = `https://api.pujakaitem.com/api/products`;

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    image,
    description,
    category,
    stock,
    stars,
    reviews,
    price,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${URL}?id=${id}`);
  }, [id]); // Add id as a dependency

  if (isSingleLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <RotatingLines
          strokeColor="#7b2b8c"
          strokeWidth="5"
          animationDuration="0.75"
          width="80"
          visible={true}
        />
      </div>
    );
  }

  return (
    <>
      {/* Page Navigation */}
      <PageNavigation title={name || "Loading..."} />
      <div className="px-0 md:px-20">
        <div className="container mx-auto flex flex-col md:flex-row py-10 px-4 max-w-screen-2xl items-center md:space-x-16 space-y-6 md:space-y-0">
          {/* Product Image */}
          <div className="flex-1">
            <MyImage imgs={image || []} name={name || "Product Image"} />
          </div>

          {/* Product Data */}
          <div className="flex-1 bg-violet-100 p-6 rounded-lg shadow-lg space-y-6 mx-auto">
            {/* Product Title */}
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800">
              {name || "Product Name"}
            </h2>

            {/* Ratings and Reviews */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <Star stars={stars} reviews={reviews} />
            </div>

            {/* Pricing Details */}
            <div className="text-lg">
              <p>
                MRP:{" "}
                <span className="line-through font-semibold text-gray-500">
                  <FormatPrice price={(price || 0) + 250000} />
                </span>
              </p>
              <p className="text-green-600 font-bold">
                Deal of the day: <FormatPrice price={price || 0} />
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-700 leading-relaxed">
              {description || "No description available."}
            </p>

            {/* Features Section */}
            <div className="flex flex-wrap justify-between items-center text-center border-b pb-6 border-black space-y-4 md:space-y-0">
              <div className="flex flex-col items-center w-1/2 sm:w-auto">
                <TbTruckDelivery className="text-4xl text-blue-500" />
                <p className="text-sm text-gray-600">Free Delivery</p>
              </div>
              <div className="flex flex-col items-center w-1/2 sm:w-auto">
                <TbReplace className="text-4xl text-blue-500" />
                <p className="text-sm text-gray-600">30 Days Replacement</p>
              </div>
              <div className="flex flex-col items-center w-1/2 sm:w-auto">
                <MdOutlineSecurity className="text-4xl text-blue-500" />
                <p className="text-sm text-gray-600">2 Years Warranty</p>
              </div>
              <div className="flex flex-col items-center w-1/2 sm:w-auto">
                <RiCustomerServiceFill className="text-4xl text-blue-500" />
                <p className="text-sm text-gray-600">24x7 Service</p>
              </div>
            </div>

            {/* Stock and Additional Details */}
            <div className="text-gray-700 space-y-2  border-b pb-4 border-black ">
              <p className="font-medium">
                Availability:{" "}
                <span className={stock > 0 ? "text-green-600" : "text-red-600"}>
                  {stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                ID:{" "}
                <span className="text-gray-800 font-semibold">
                  {alias || "N/A"}
                </span>
              </p>
              <p>
                Brand:{" "}
                <span className="text-gray-800 font-semibold">
                  {company || "N/A"}
                </span>
              </p>
            </div>
            <div>
              {stock > 0 && <AddtoCart singleProduct={singleProduct} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
