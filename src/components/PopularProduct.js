import { useState, useEffect } from "react";
import { Table } from "flowbite-react";
import {customTableTheme} from "../utils/customTableTheme";
import Product from "./Product";

const PopularProduct = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // get the data from the api
      const response = await fetch("https://fakestoreapi.com/products?limit=3");
      // convert the data to json
      const data = await response.json();
      // set state with the result
      setProducts(data);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  if (!products) return <p>No products </p>;

  return (
    <>
      <div>
        <h2 className="m-5">Popular Products</h2>
        <Table theme={{ theme: customTableTheme }} className="table-auto" hoverable>
          <Table.Head>
            <Table.HeadCell>Product</Table.HeadCell>
            <Table.HeadCell>Product title</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {Array.isArray(products) &&
              products.length > 0 &&
              products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
};

export default PopularProduct;
