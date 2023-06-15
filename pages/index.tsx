import React from "react";
import type { NextPage } from "next";

import NoSSR from "../components/NoSSR";
import Layout from "../components/Layout";
import Ticker from "../components/Ticker";

const Home: NextPage = () => {
  return (
    <NoSSR>
      <Layout>
        <div className="py-24 sm:py-16 lg:py-1o">
          <div className="mx-auto max-w-7xl px-2 lg:px-4">
             <div className="sm:text-center">
              <h2 className="text-lg font-semibold leading-8 text-indigo-800 ">
                Cryptomonnaies
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl">
               Un Argent digital pour Un Monde Digital.
              </p>
              <p className="mx-auto mt-6 max-w-2xl text-lg  text-gray-600">
              Les Cryptomonnaies sont des monnaies digitales qui utilisent la cryptographie pour la sécurité. 
              Ce qui veut dire qu'elles ne sont pas contrôlées par les banques et les états.
              </p>
             </div>
            {/* Main content - crypto cards */}
            <Ticker />

            {/* TODO: footer code */}
            <div className="mt-20 py-4 text-center">
              <p>
                 Produit par 
              </p>
              <a href="https://www.binance.com" className="undelined text-indigo-500" target="_blank">
                Binance
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </NoSSR>
  );
};

export default Home;
