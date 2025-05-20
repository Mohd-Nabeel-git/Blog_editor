// app/blogpost/[slug]/page.js

import fs from "fs";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import OnThisPage from "@/components/on-this-page";

export default async function Page({ params }) {
  const filepath = `content/${params.slug}.md`;

  if (!fs.existsSync(filepath)) {
    notFound();
    return;
  }

  const fileContent = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(fileContent);

  const htmlContent = (
    await unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings)
      .use(rehypeStringify)
      .process(content)
  ).toString();

  return (
    <div className="max-w-6xl mx-auto p-4 flex flex-col lg:flex-row gap-8">
      {/* Main blog content */}
      <div className="flex-1 min-w-0">
        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
        {data.description && (
          <p className="text-base mb-2 border-l-4 border-gray-500 pl-4 italic">
            &quot;{data.description}&quot;
          </p>
        )}
        <div className="flex gap-2 text-sm text-gray-500 italic mb-4">
          <p>By {data.author}</p>
          <p>
            {data.date
              ? new Date(data.date).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })
              : ""}
          </p>
        </div>
        <article
          className="prose prose-lg dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
      {/* On This Page sidebar */}
      <div className="hidden lg:block w-64 flex-shrink-0">
        <div className="sticky top-24">
          <OnThisPage htmlContent={htmlContent} />
        </div>
      </div>
    </div>
  );
}
