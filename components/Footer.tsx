import React from "react";
import { footer } from "@/datas/footer";

const Footer = () => {
  return (
    <div className="w-full min-h-20 bg-gray-800 flex items-center flex-wrap sm:px-20 lg:px-44 py-8">
      <div className="flex flex-col w-full gap-7">
        {Array.isArray(footer) &&
          footer.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center gap-10 md:flex-row md:justify-between md:items-center md:gap-0">
              <h3 className="text-gray-300 sm:text-xl font-semibold">{item.title}</h3>
              {item.list instanceof Array ? (
                <div className="flex gap-3">
                  {item.list.map((itm, i) => (
                    <div key={i} className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 text-gray-300 text-2xl hover:text-cyan-300 hover:border-cyan-300 hover:scale-110 transition-all duration-300 rounded-full">
                      <a href={itm.title}>{itm.icon}</a>
                    </div>
                  ))}
                </div>
              ) : (
                item.list
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Footer;
