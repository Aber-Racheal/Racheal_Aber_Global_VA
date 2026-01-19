"use client";

import { PlanType } from "@/app/types/plan";
import { getDataPath, getImgPath } from "@/app/utils/paths";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import PricingSkeleton from "../../Skeleton/Pricing";
import Link from "next/link";

const Pricing = () => {
  const [plan, setPlan] = useState<PlanType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setPlan(data.PlanData);
      } catch (error) {
        console.error("Error fetching service", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  //
  const [selectedCategory, setSelectedCategory] = useState<
    "monthly" | "yearly"
  >("monthly");

  const handleCategoryChange = (
    category: SetStateAction<"monthly" | "yearly">
  ) => {
    setSelectedCategory(category);
  };

  return (
    <section id="pricing" className="scroll-mt-12">
      <div className="container">
        <div className="text-center">
          <h2>Choose Your Virtual Assistant Plan</h2>
          <p className="text-lg font-normal max-w-lg mx-auto my-6">
            Select a package that fits your business needs and budget. Get professional support to streamline your operations.
          </p>
        </div>
        {/* toggle button */}
        {/* Yearly/Monthly Toggle Buttons */}
        <div className="mb-8">
          <div className="flex justify-center">
            <div className="bg-secondary dark:bg-darklight flex p-2 rounded-lg">
              <button
                className={`text-xl font-medium cursor-pointer py-2 px-8 sm:py-4 sm:px-16 ${
                  selectedCategory === "monthly"
                    ? "text-primary bg-white dark:bg-darkmode rounded-lg shadow dark:shadow-neutral-50/20"
                    : "text-black dark:text-white"
                }`}
                onClick={() => handleCategoryChange("monthly")}
              >
                Monthly
              </button>
              <button
                className={`text-xl font-medium cursor-pointer py-2 px-8 sm:py-4 sm:px-16 ${
                  selectedCategory === "yearly"
                    ? "text-primary bg-white dark:bg-darkmode dark rounded-lg shadow dark:shadow-neutral-50/20"
                    : "text-black dark:text-white"
                }`}
                onClick={() => handleCategoryChange("yearly")}
              >
                Yearly
              </button>
            </div>
          </div>
        </div>
        {/* grid layout */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {/* plans card */}
          {loading
            ? Array.from({ length: 2 }).map((_, i) => (
                <PricingSkeleton key={i} />
              ))
            : plan.map((item, i) => (
                <div key={i}>
                  <div className="bg-white dark:bg-darkmode rounded-lg shadow-lg dark:shadow-neutral-50/10 border border-black/10 dark:border-white/10 px-7 py-10 h-full">
                    <div className="flex flex-col gap-6 border-b border-black/10 dark:border-white/10 pb-6">
                      <p className="text-2xl font-bold">{item.type}</p>
                      <p className="text-5xl font-bold text-lightdarkblue dark:text-white">
                        $
                        {selectedCategory === "monthly"
                          ? item.price.monthly
                          : item.price.yearly}
                        <span className="text-base font-normal text-lightgrey lowercase">
                          /{selectedCategory === "monthly" ? "month" : "year"}
                        </span>{" "}
                      </p>
                      <p className="text-base font-normal">{item.desc}</p>
                    </div>
                    {/* options */}
                    <div>
                      <ul className="flex flex-col gap-6 my-6">
                        {item.option.map((feat, i) => (
                          <li key={i}>
                            <div className="flex items-center gap-3">
                              <div className="p-1 rounded-full bg-primary/10 text-primary">
                                <Icon
                                  icon={"material-symbols:check-rounded"}
                                  width={19}
                                  height={19}
                                />
                              </div>
                              <p className="text-base font-normal">{feat}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href="/#contact">
                      <button className="bg-primary border border-primary py-3 w-full rounded-lg text-white hover:bg-transparent hover:text-primary hover:cursor-pointer duration-300">
                        Request a Quote
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
        </div>

        {/* ADDED: One-time project section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Need One-Time Project Help?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              For one-time projects like website building, graphic design for events, or social media setup, 
              feel free to reach out directly via email, WhatsApp, or Instagram DM for a custom quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a 
                href="mailto:rachealaberr@gmail.com" 
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
              >
                Email Me
              </a>
              <a 
                href="https://wa.me/256787635823" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300"
              >
                WhatsApp
              </a>
              <a 
                href="https://instagram.com/rachealaberglobalva" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-300"
              >
                Instagram DM
              </a>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
              Response within 24 hours | Custom quotes based on project scope
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;