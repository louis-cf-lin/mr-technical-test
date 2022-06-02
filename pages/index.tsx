import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Header from "../components/Header/Header";
import { CartItem } from "../types/CartItem";
import { ProductInfo } from "../types/ProductInfo";

import classes from "../styles/Home.module.scss";
import SizeOptions from "../components/SizeOptions/SizeOptions";

type Props = {
  productInfo: ProductInfo;
};

const Home: NextPage<Props> = ({ productInfo }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  console.log(productInfo);

  return (
    <div className={classes.container}>
      <Head>
        <title>{productInfo.title} | Moustache Republic</title>
        <meta
          name="description"
          content={`Buy ${productInfo.title} at Moustache Republic. ${productInfo.description}`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header cart={cart} />
      <main className={classes.main}>
        <div className={classes.imgContainer}>
          <Image
            src="/classic-tee.jpg"
            height={900}
            width={600}
            alt={productInfo.title}
          />
        </div>
        <h1 className={classes.h1}>{productInfo.title}</h1>
        <div className={classes.price}>${productInfo.price.toFixed(2)}</div>
        <p className={classes.description}>{productInfo.description}</p>
        <SizeOptions sizeOptions={productInfo.sizeOptions} />
        <button className={classes.addBtn}>ADD TO CART</button>
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch(
    "https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product"
  );
  const productInfo = await res.json();

  return {
    props: {
      productInfo,
    },
  };
}
