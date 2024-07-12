"use client";
import React from "react";
import { motion } from "framer-motion";

const ShopSection = () => {
  return (
    <section className="lg:py-16" id="shop">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 place-self-center text-center sm:text-center justify-self-center"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Thermolock Online Shop
            </span>
            <br></br>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Buy our products online. In our online shop we offer standard products to unbeatable prices - delivered within days.
          </p>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            We don’t have any products to show here right now. Call back later.
          </p>
        </motion.div>
      </div>
      <hr></hr>
    </section>
  );
};

export default ShopSection;
