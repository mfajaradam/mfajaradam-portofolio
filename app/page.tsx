"use client";

// import Image from "next/image";
import Headers from "@/components/Headers";
import Heros from "@/components/Heros";
import Tecnology from "@/components/Contents/Tecnology";
import { logos } from '@/datas/tecnology'
import { services } from '@/datas/services';
import Service from '@/components/Contents/Service';
import ExperienceSkill from "@/components/ExperienceSkill";
import Product from '@/components/Contents/Product'
import { product } from "@/datas/product";

export default function Home() {
  return (
    <div className="relative h-full bg-gray-900 pb-52 flex flex-col gap-44 sm:gap-52 md:gap-56">
      {/* Header */}
      <Headers />

      {/* Hero Section */}
      <Heros />

      {/* Content Section */}
      <div className="w-full flex flex-col justify-center gap-40 px-10 sm:px-20 lg:px-16">
        {/* Teknologi */}
        <Tecnology logos={logos}/>

        {/* Skill & Experience */}
        <ExperienceSkill />

        {/* Service */}
        <Service services={services} />

        {/* Product */}
        <Product products={product} />
      </div>
    </div>
  );
}
