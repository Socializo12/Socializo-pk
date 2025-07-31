import ReactMarkdown from "react-markdown";
import { LightBulbIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import "./meta-post-styles.css";
import "../post1/post-styles.css";
import Image from "next/image";

const markdownContent = `
# Meta Ads in Houston: How to Actually Get Sales (Without Losing Your Mind)

Hey Houston business owners! 👋 Let's be real: Facebook and Instagram ads can feel like trying to parallel park a monster truck on Westheimer. You're either wasting cash on ads nobody clicks… or worse, crickets.

But here's the good news: *Socializo.co* (your Houston neighbors!) fixes this. We're the un-boring Meta ads agency that makes ads even your grumpy uncle would click. (And yes, we'll explain it like you're five.)

**Serious about sales? Call us: ☎️ +1 832-304-5611**



## Why Houston's Obsessed with Meta Ads

### 1. Your Customers Live on FB/IG (No Joke)

- **1.5 million Houstonians scroll daily.** Your future buyer? Probably staring at BBQ reels right now.
- **Fun Fact:** 70% of locals say they've bought stuff because of Instagram ads. (Yep, even that guy who "hates ads.")

### 2. Ads That Don't Suck = Sales That Don't Stop

* Imagine ads that feel like a chat with your barista—not a robot. We sneak in H-EB runs, Astros wins, or even Houston humidity jokes. (Because relatable = $$$.)

## How We Do It (No PhD Required)

### 1. We Babysit Your Ads So You Don't Have To 👶

- **"Ecommerce Meta Ads Agency":** Fancy term for "we make your online store blow up".
- **"Facebook Ad Management Services":** We fix ads that flop. Fast.
- **Budget?** We're the **affordable Facebook ad agency**—no Lambo prices here.

### 2. Instagram? We Got You, Houston 🌮

- **"Instagram Ads Ecommerce Agency":** Turn Reels into a 24/7 salesperson. (Taco pics optional but encouraged.)
- **Secret Sauce:** We stalk Houston trends. What's hot? Crawfish boils, rodeo season, and anything with queso.

### 3. No More "Why Is This Not Working?!" 😤

- Ads tanking? We'll rewrite, redesign, and reboot them by lunch.
- **Houston Google Ads Agency** (Wait, wrong section! 😅)



## “But Wait—What’s This Cost?” 💸

- We’re not fancy sushi. Prices start lower than your AC bill in July.
- **Call ☎️ +1 +1 832-304-5611for a no-pressure chat!**.


## Why Pick Us? (We’re Not Just “Another Agency”)!"

-  **We’re Houstonians: Born here, work here**, get here.
- **No Jargon Zone** “ROAS”  “money you make back” Easy.
- Free Fix for Terrible Ads**: Send us your worst—we’ll roast it (nicely) and fix it FREE..


## Real Talk from Real Clients

- Y all made ads that even my mom shared. Sales up 200%. HOW?!
- Sarah, Houston Boutique Owner.
- **P.S. Want results like Sarah? Call ☎️ +1 832-304-5611 today!**



## Ready to Stop Wasting Money?

- Your competitors are already doing this. Don't let them steal your customers!

👉 **Call ☎️ +1 832-304-5611, text, or slide into our DMs.** Let's make ads that even your cat would like. 😼
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
          {/* Author Info */}
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
              src="/assets/postImage.png"
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
      </div>
    </section>
  );
};

export default BlogPost;
