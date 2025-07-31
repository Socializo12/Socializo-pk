"use client";
import React from "react";
// import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
// import TabContent2 from "./TabContent2";
 
import "@/app/globals.css";
import "@/component/style.css";
import Link from "next/link";
// import Post1 from '@/app/blog/Post1'

const Blog = () => {
  return (
    <section className="section4-container4 ">
      {/* Enhanced Background Effects */}
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <div className="morphing-shapes">
        <div className="morph"></div>
        <div className="morph"></div>
      </div>

      <div className="sparkle-container">
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
        <div className="sparkle"></div>
      </div>
      <div className="container-Blog">
        <div className="sec1-h4 mb-[50px] mx-auto w-[min-content]">
          <h4>Blog</h4>
        </div>
        {/* Content 1 */}
        <div className="content-blog1 ">
          <div className="sec1-box1 my-[20px]">
            <div className="sec1s-box1s ">
              <div className="text-side content-blog1-text">
                <h2 className="text-left md:text-center">
                  Hyper-personalized Outbound
                </h2>
                <p className="text-left  md:text-center">
                  We Source your prospects from multiple channels and then
                  utilize AI to create an Outbound system that addresses actual
                  pain points of your prospects based on 50+ data points, We
                  then use tried and tested copy, & campaign configuration to
                  yield qualified appointments that book up your entire
                  calendar.
                </p>
                <div className="w-max">
                  <button className="mobile-cta-button w-[100px] mt-[20px] ">
                    Read More
                  </button>
                </div>
              </div>
              <div className="content-blog1-imgBg"></div>
            </div>
          </div>
        </div>
        {/* Content 2 */}
      </div>
      {/* Content 3 */}
      <div className="main-container-grid  gap-[20px] p-8 md:p-12">
        {/* one */}
        <Link href="/post" className="no-underline text-[white]">
        <div className="blog-card sec1s-box1s ">
          <div className="mb-[20px]">
            <Image
              src="/assets/blog.png"
              alt=""
              width={200}
              height={150}
              className="rounded-[10px] shadow-lg "
            />
          </div>
          <div className="blog-card-text">
            
              <h3 className="text-[24px] font-bold">
                Meta Ads in Houston: How to Actually Get Sales (Without Losing Your Mind)
              </h3>
            
          </div>
          <div className="flex  justify-between items-center mt-[30px] w-full">
            <div className="blog-iconImg flex justify-between items-center gap-[10px]">
              <div className="">
               
                  <Image src="/assets/i1.png" alt="" width={45} height={45}/>
                
              </div>
              <div className="">
               
                  <h4>Spencer Sharp </h4>
                
              </div>
            </div>
            <div className="flex justify-end items-center ">
              <div className="">
                
                  20-04-2025
                
              </div>
            </div>
          </div>
        </div>
          </Link>
        {/* Two */}
        <Link href="/post1" className="no-underline text-[white]">
        <div className="blog-card sec1s-box1s ">
          <div className="mb-[20px]">
            <Image
              src="/assets/blog1.png"
              alt=""
              width={200}
              height={150}
              className="w-full rounded-[10px] shadow-lg "
            />
          </div>
          {/* 1 */}
          <div className="blog-card-text">
            
              <h3 className=" text-2xl text-[24px] font-bold">
                From Montrose to Midtown: Why Houston Can’t Stop Clicking Facebook &amp; Instagram Ads
              </h3>
            
          </div>
          {/* 2 */}
          <div className="flex  justify-between items-center mt-[30px] w-full">
            <div className="blog-iconImg flex justify-between items-center gap-[10px]">
              <div className="">
                
                  <Image
                    src="/assets/i1.png"
                    width={200}
                    height={150}
                    alt=""
                    className=""
                  />
                
              </div>
              <div className="">
                
                  <h4 className="text-[white] no-underline hover:[underline] [cursor-pointer]">
                    Spencer Sharp  
                  </h4>
                
              </div>
            </div>
            <div className="flex justify-end items-center ">
              <div className="">
               
                  20-04-2026
                
              </div>
            </div>
          </div>
        </div>
        </Link>

        {/* three */}
        <Link href="/post2" className="no-underline text-[white]">
        <div className="blog-card sec1s-box1s ">
          <div className="mb-[20px]">
            <Image
              src="/assets/blog2.png"
              width={200}
              height={150}
              alt=""
              className="w-full rounded-[10px] shadow-lg "
            />
          </div>
          {/* 1 */}
          <div className="blog-card-text">
            
              <h3 className="text-[24px] font-bold">
               Houston Lead Generation Company for Explosive Growth! 
              </h3>
            
          </div>
          {/* 2 */}
          <div className="flex  justify-between items-center mt-[30px] w-full">
            <div className="blog-iconImg flex justify-between items-center gap-[10px]">
              <div className="">
               
                  <Image
                    src="/assets/i1.png"
                    alt=""
                    width={200}
                    height={150}
                    className=""
                  />
                
              </div>
              <div className="">
               
                  <h4>Spencer Sharp</h4>
                
              </div>
            </div>
            <div className="flex justify-end items-center ">
              <div className="">
                
                  20-04-2025
                
              </div>
            </div>
          </div>
        </div>
        </Link>
        {/* for */}
        <Link href="/post" className="no-underline text-[white]">
        <div className="blog-card sec1s-box1s ">
          <div className="mb-[20px]">
            <Image
              src="/assets/blog.png"
              width={200}
              height={150}
              alt=""
              className="w-full rounded-[10px] shadow-lg "
            />
          </div>
          {/* 1 */}
          <div className="blog-card-text">
            
              <h3 className="text-[24px] font-bold">
                Optimizing RAG With Advanced Chunking Techniques 
              </h3>
            
          </div>
          {/* 2 */}
          <div className="flex flex-wrap justify-between items-center  gap-[15px] mt-[30px] w-full">
            <div className="blog-iconImg flex justify-between items-center gap-[10px]">
              
                <Image
                  src="/assets/i1.png"
                  alt=""
                  width={200}
                  height={150}
                  className=""
                />
              
             
                <h4>Spencer Sharp </h4>
              
            </div>
            <div className="flex md:justify-end justify-center items-center ">
              20-04-2025
              
            </div>
          </div>
        </div>
        </Link>
      </div>
    </section>
  );
};

export default Blog;
