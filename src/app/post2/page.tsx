import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { LightBulbIcon } from "@heroicons/react/24/solid";
// import "../post/meta-post-styles.css"
import "../post1/post-styles.css";
import Image from "next/image";
// import "./style.css"

const markdownContent = `
# Houston Lead Generation Company for Explosive Growth!

Hey there, Houston business owners! Want more customers knocking on your door? You’re in the right place. At Socializo.co, we’re your friendly neighborhood experts at finding perfect customers for your business. Think of us like a treasure map—we show you where the gold (aka customers) is hiding!


## Why Lead Generation Matters in Houston:

* Houston is BIG—and so is the competition! Whether you’re selling tacos, tech, or tools, you need a smart way to find people who actually want what you offer. That’s where lead generation companies in Houston (like us!) come in. We help you find those “yes, please!” customers without the guesswork.

## Why Choose Socializo? Your Houston Lead Generation Company

* We’re not just any agency—we’re your Houston buddies who get this city. From the Energy Corridor to the Heights, we know what makes Houston businesses tick. Here’s how we help:


### 1. B2B Lead Generation Company in Houston
 
1. Got a business that sells to other businesses? We’ll find the right decision-makers (think CEOs, managers, or IT teams) and turn them into loyal clients. No more cold calls—just warm leads ready to chat!


### 2. Facebook Lead Generation Agency in Houston

2. Did you know most Houstonians spend hours scrolling Facebook daily? We turn those “scrollers” into customers with catchy ads that make them stop and say, “Wow, I need this!” Our Facebook ad management agency skills turn likes into leads.


### 3. Houston Internet Marketing and Branding

3. Want to be the “go-to” name in Houston? We’ll make your brand shine online! From websites that wow to social media that sizzles, we’ll put your business on the map (literally and figuratively).


## How We Stand Out

1. Other lead generation agencies in Houston might promise the moon. We deliver it—with a Texas-sized smile! Here’s why.
2. We Speak Houston: We know local trends, slang, and what makes your neighbors click.
3. No Confusing Jargon: We explain everything like we’re talking to a 5-year-old (because simple works!).
4. Results You Can See: More leads = more sales. Easy peasy!. 





## Let’s Chat!

**📞 Call us today at +1 832-304-5611or visit Socializo.co. Let’s make your Houston business the talk of the town!**

`;

const BlogPost = () => {
  return (
    <section className="main-container">
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
      <div className="content-box w-full mx-auto max-w-[1050px] mb-[30px]">
        <div className="p-[20px]">
          {/* Post Header */}
          <div className="post-header mb-8">
            <p className="text-3xl font-bold text-[lightblue] underline text-red-500 my-[10px]">
              <span className="cursor-pointer rounded-lg bg-neutral-600 px-3 py-[0.19rem] text-sm font-semibold">
                <LightBulbIcon className="h-[16px] w-[16px] text-[yellow] me-[10px]" />
                Articles
              </span>
              By socializo / March 13, 2025
            </p>

            <Image
              src="/assets/postImage2.png"
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
                  <h2 className="mt-[40px] mb-[15px] font-bold text-2xl ">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-[17px] font-semibold  mt-6 mb-3">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="my-[15px] text-gray-200 leading-relaxed">
                    {children}
                  </p>
                ),
                strong: ({ children }) => (
                  <strong className="font-bold ">{children}</strong>
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
      </div>
    </section>
  );
};

export default BlogPost;
