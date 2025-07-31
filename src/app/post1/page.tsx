import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import { ArrowLeftIcon, LightBulbIcon } from "@heroicons/react/24/solid";
import "./post-styles.css";

const markdownContent = `
# From Montrose to Midtown: Why Houston Can't Stop Clicking Facebook & Instagram Ads

Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque nostrum autem sed voluptatibus nesciunt labore dolores, neque numquam odit pariatur nemo rerum adipisci similique, quod doloremque iure odio, fugit ducimus.

## Houstonians Are Scrolling… Right Now!

1. 1.2 million Houston locals use Facebook daily.
2. 800,000+ browse Instagram every week.
3. Your customers are already there—you just need to say "Hi!"

**Ads That Feel Like a Friendly Chat**

Forget boring sales pitches. Great ads are like talking to a neighbor. We're Facebook ads experts who make ads so fun, folks don't even realize they're clicking "Buy!"

## What Socializo.co Does Best

1. We're Your Facebook Ads Company in Houston
2. Set It & Forget It" Ads: We handle everything ideas, photos, writing, and tracking.
3. Ecommerce Facebook Ad Agency: Got an online store? We'll turn scrollers into shoppers.
4. Affordable Facebook Ad Agency: Big results, small budgets. No scary prices!

## Instagram Ads Agency in Houston

1. Instagram Ads Ecommerce Agency: Show off your products in stories, reels, or posts.
2. Instagram Ads Expert Touch: We know what makes Houston double tap.

## Facebook Ad Management Services Fix broken ads.

1. Track every click.
2. Make your ads better every week.

## But How Much Does This Cost

We get it—budgets matter! Here's the good news:

* Socializo is a Flexible Facebook Ad Agency Pricing: Pay for what you NEED (no fancy extras)

Free Consultation first: Tell us your goals, and we'll plan a budget that fits.


## Why Pick a Houston Facebook Ads Agency?

1. We Speak Houston: Ads that mention H-EB, Astros, or humidity? We’ve got you.
2. Fast Fixes: Ads not working? We’ll tweak them TODAY.
3. Real Results: Like the Houston bakery that 10x’ed orders with our Instagram ads. 🧁


## FAQ (Simple Answers!)

1. How do I start?.
2. Call us! We’ll ask about your business, your dream customers, and your budget. Easy!. 🧁
1. What’s a “Facebook ads marketing agency”?.
2. Fancy words for “people who make ads that SELL.” 😉
1. Do you help small businesses?
2. YES! We’re Houston’s affordable Facebook ad agency—perfect for startups.


### Ready to Grow? Let’s Talk!

Houston businesses don’t wait for luck—they make it. Whether you need a Facebook ad management agency to fix slow ads or an Instagram ad company to boost your posts, Socializo is here.



** Call ☎️ +1 832-304-5611 today!**
`;

const BlogPost = () => {
  return (
    <section className="">
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

      {/* Main Container */}
      <div className="content-box w-full mx-auto max-w-[1050px] p-[20px] mb-[30px]">
        <div className="p-[20px]">
          {/* Post Header */}
          <div className="post-header mb-8">
            <p className="text-3xl font-bold text-[lightblue] underline text-red-500 my-[10px]">
              <span className="cursor-pointer rounded-lg bg-neutral-600 px-3 py-[0.19rem] text-sm font-semibold">
                <LightBulbIcon className="h-[16px] w-[16px] text-[yellow] me-[10px]" />
                Articles
              </span>
              By socializo / March 7, 2025
            </p>

            <Image
              src="/assets/postImage1.png"
              width={700}
              height={450}
              alt="Houston Facebook Instagram Ads"
              className="mt-[30px] mb-[5px] rounded-[10px] object-fit transform hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* Markdown Content */}
          <div className="markdown-content">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="text-[32px] mb-[10px] text-red-300 font-bold leading-tight">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="mt-[40px] mb-[15px] font-bold text-2xl text-white">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-[17px] font-semibold text-white mt-6 mb-3">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="my-[15px] text-gray-200 leading-relaxed">
                    {children}
                  </p>
                ),
                strong: ({ children }) => (
                  <strong className="font-bold text-white">{children}</strong>
                ),
                ol: ({ children }) => (
                  <ol className="px-[12px] pb-[10px] list-decimal list-inside space-y-2">
                    {children}
                  </ol>
                ),
                ul: ({ children }) => (
                  <ul className="px-[12px] pb-[10px] list-disc list-inside space-y-2">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="py-[5px] text-gray-200">{children}</li>
                ),
                hr: () => (
                  <div className="border border-gray-500 w-[50px] my-[30px]"></div>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-blue-500 pl-4 my-4 italic text-gray-300">
                    {children}
                  </blockquote>
                ),
                code: ({ children }) => (
                  <code className="bg-gray-800 px-2 py-1 rounded text-sm text-green-400">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto my-4">
                    {children}
                  </pre>
                ),
                a: ({ href, children }) => (
                  <Link
                    href={href || "#"}
                    className="text-blue-400 hover:text-blue-300 underline transition-colors"
                  >
                    {children}
                  </Link>
                ),
              }}
            >
              {markdownContent}
            </ReactMarkdown>
          </div>
        </div>

        {/* Navigation */}
      </div>
    </section>
  );
};

export default BlogPost;
