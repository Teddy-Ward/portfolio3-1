import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Header from "../components/Header";
import TierPrices from "../components/TierPrices";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { useTheme } from "next-themes";
import Head from "next/head";
// Data
import { name, showPrices } from "../data/portfolio.json";
import { prices } from "../data/portfolio.json";
import data from "../data/portfolio.json";

const Prices = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    if (!showPrices) {
      router.push("/");
    }
  }, []);
  return (
    <>
      <Head>
        <title>{data.name} - Prices</title>
      </Head>
      {process.env.NODE_ENV === "development" && (
        <div className="fixed bottom-6 right-6">
          <Button onClick={() => router.push("/edit")} type={"primary"}>
            Edit Prices
          </Button>
        </div>
      )}
      {data.showCursor && <Cursor />}
      <div
        className={`container mx-auto mb-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        <Header isBlog />
        {mount && (
          <div className="mt-10 w-full flex flex-col items-center">
            <h1 className="mx-auto mob:p-2 text-bold text-6xl laptop:text-8xl w-full">
              Prices.
            </h1>
            <div className="mt-5 w-full flex flex-col items-center">
              <div className="grid grid-cols-1 tablet:grid-cols-2 gap-5 mt-5 desktop:max-w-[75%] mob:max-w-[100%] cursor-default">
                {prices.map(({ id, title, bullets, description, price }) => (
                  <TierPrices
                    key={id}
                    title={title}
                    bullets={bullets}
                    description={description}
                    price={price}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Prices;
