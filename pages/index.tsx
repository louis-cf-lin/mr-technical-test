import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Header from "../components/Header/Header";
import { Cart } from "../types/Cart";
import { ProductInfo } from "../types/ProductInfo";

import classes from "../styles/Home.module.scss";
import SizeOptions from "../components/SizeOptions/SizeOptions";

type Props = {
  productInfo: ProductInfo;
};

const Home: NextPage<Props> = ({ productInfo }) => {
  const [cart, setCart] = useState<Cart>([]);

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
            src={productInfo.imageURL}
            height={900}
            width={600}
            alt={productInfo.title}
          />
        </div>
        <div className={classes.productInfo}>
          <h1 className={classes.h1}>{productInfo.title}</h1>
          <div className={classes.divider} />
          <div className={classes.price}>${productInfo.price.toFixed(2)}</div>
          <div className={classes.divider} />
          <p className={classes.description}>{productInfo.description}</p>
          <SizeOptions productInfo={productInfo} setCart={setCart} />
        </div>
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
