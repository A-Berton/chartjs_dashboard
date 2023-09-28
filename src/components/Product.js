import Image from "next/image";
import { Table } from "flowbite-react";

const Product = ({ product }) => {
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell>
        <Image src={product.image} width={20} height={20} />
      </Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {product.title}
      </Table.Cell>
      <Table.Cell>{product.category}</Table.Cell>
      <Table.Cell>{product.price}</Table.Cell>
      <Table.Cell>
        <a
          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
          href="/tables"
        >
          <p>Edit</p>
        </a>
      </Table.Cell>
    </Table.Row>
  );
};

export default Product;
