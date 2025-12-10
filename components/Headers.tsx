"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation } from "@/constants/navigation";

export const Cnavigations = (props: { addStyle: string }) => {
  const { addStyle } = props;
  return (
    <div className={addStyle}>
      {navigation.map((item) => (
        <a key={item.name} href={item.href} className="text-lg font-normal text-white hover:text-cyan-300 transition-all ease-in">
          {item.name}
        </a>
      ))}
    </div>
  );
};

const Headers = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}>
        <nav aria-label="Global" className={clsx(isScrolled ? "bg-white/10 backdrop-blur-lg" : "bg-transparent", "w-full fixed top-0 z-50 transition-all duration-300 flex justify-between lg:justify-around py-6 px-7 sm:px-12 lg:px-8")}>
          {/* w-full fixed top-0 bg-white opacity-10 flex justify-around p-6 lg:px-8 */}
          <div className="flex items-center gap-2">
            <img src="https://skillicons.dev/icons?i=htmx" className="w-10" />
            <h3 className="text-white text-xl">Portofolio</h3>
          </div>
          <div className="flex lg:hidden">
            <button type="button" onClick={() => setMobileMenuOpen(true)} className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200">
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <Cnavigations addStyle="hidden lg:flex lg:gap-x-12" />
        </nav>
      </motion.section>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
          <div className="flex items-center justify-between">
              <img src="https://skillicons.dev/icons?i=htmx" className="w-10" />
            <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-200">
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Headers;
