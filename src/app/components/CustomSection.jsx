"use client";
import React from "react";
import { motion } from "framer-motion";


const CustomSection = () => {
  return (
    <section className="lg:py-16 back">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 place-self-center text-center sm:text-center justify-self-center"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-3xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Upload Drawings.
            </span>
            <br></br>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Please upload your drawings using button below.
          </p>
          <input type="file" name="File" id="fileInput" className="mb-6"/>
        </motion.div>
      </div>
      <hr></hr>
    </section>
  );
};

export default CustomSection;
