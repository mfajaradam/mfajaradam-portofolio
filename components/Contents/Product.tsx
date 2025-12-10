import React from "react";
import { motion } from "framer-motion";
import { cardVariants, containerVariants } from "@/constants/motion";
import Badge, { BadgeProps } from "../Badge";
import clsx from "clsx";

export type ProductItem = {
  type: string;
  image: string;
  title: string;
  description: string;
  badgeTop?: BadgeProps[];
  badgeBottom?: BadgeProps[];
  href?: string;
};

type Products = {
  products: ProductItem[];
};

const Product: React.FC<Products> = ({ products }) => {
  return (
    <motion.div id="product" className="w-full max-w-5xl mx-auto flex flex-col gap-20" initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} variants={containerVariants}>
      {/* Title */}
      <motion.div className="max-w-xl mx-auto space-y-4 text-white text-center" variants={cardVariants}>
        <h2 className="text-4xl font-bold uppercase">Product</h2>
        <p className="text-md sm:text-lg">Kumpulan produk digital yang saya kembangkan untuk memberikan solusi nyata dan pengalaman terbaik bagi pengguna.</p>
      </motion.div>

      {/* Cards */}
      <motion.div
        id="service"
        className="grid gap-6 
              grid-cols-1 
              lg:grid-cols-2
              w-full"
        variants={containerVariants}
      >
        {Array.isArray(products) &&
          products.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: idx * 0.15, // efek stagger manual
              }}
              // whileHover={{
              //   scale: 1.05,
              //   y: -6,
              //   boxShadow: "0 8px 28px rgba(255,255,255,0.15)",
              //   transition: {
              //     duration: 0.25,
              //     ease: "easeOut",
              //   },
              // }}
              // whileTap={{ scale: 0.98 }}
              className="bg-gray-800 p-6 rounded-4xl flex flex-col gap-5 text-white w-full min-h-52 transition-all duration-300 cursor-pointer hover:bg-gray-700"
              onClick={() => {
                if (item.href) {
                  window.open(item.href, "_blank");
                }
              }}
            >
              <div className={clsx("font-semibold text-sm uppercase px-5 py-2 bg-gray-900 rounded-full w-max", item.type === "Public Project" ? "text-green-400" : "text-red-400 ")}>{item.type}</div>
              {item.image}
              {/* Badge Top */}
              <div className="flex flex-wrap gap-2">{Array.isArray(item.badgeTop) && item.badgeTop.map((badge, i) => <Badge key={`${item.title}-top-${i}`} text={badge.text} variant={badge.variant} size={badge.size} />)}</div>

              <div className="w-full h-full space-y-4 mb-4">
                <h3 className="font-semibold text-2xl">{item.title}</h3>
                <p className="w-full text-lg sm:text-justify">{item.description}</p>
              </div>

              {/* Badge Bottom */}
              <div className="flex flex-wrap gap-2">
                {Array.isArray(item.badgeBottom) && item.badgeBottom.map((badge, i) => <Badge key={`${item.title}-bottom-${i}`} text={badge.text} border={badge.border} sizeContainer={badge.sizeContainer} size={badge.size} />)}
              </div>
            </motion.div>
          ))}
      </motion.div>
    </motion.div>
  );
};

export default Product;
