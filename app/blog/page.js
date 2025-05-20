// import React from 'react';  
// import { buttonVariants } from '@/components/ui/button';
// import Link from 'next/link';
// import fs from "fs";
// import matter from 'gray-matter';


// const dirContent = fs.readdirSync("content", "utf-8")

// const blogs = dirContent.map(file=>{
//     const fileContent = fs.readFileSync(`content/${file}`, "utf-8")
//     const {data} = matter(fileContent)
//     return data
// })


// const blogs = [
//   {
//     title: 'First Blog',
//     description: 'This is the first blog description.',
//     slug: 'first-blog',
//     date: '2023-10-01',
//     author: 'John Doe',
//     image: '/typescript.webp'
//   },
//   {
//     title: 'Second Blog',
//     description: 'This is the second blog description.',
//     slug: 'second-blog',
//     date: '2023-10-02',
//     author: 'Jane Doe',
//     image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
//   },
//   {
//     title: 'Second Blog',
//     description: 'This is the second blog description.',
//     slug: 'second-blog',
//     date: '2023-10-02',
//     author: 'Jane Doe',
//     image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg'
//   },
//   // Add more blog objects here
// ];

/**
 * Blog component that renders a list of blog posts.
 * Each blog post includes an image, title, description, author, date, and a link to the full post.
 * 
 * @returns {JSX.Element} The rendered blog component.
 */
// const Blog = () => {
//   return (
//     <div className="container mx-auto p-4">
//       {/* Main heading for the blog section */}
//       <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      
//       {/* Grid layout for blog posts */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {blogs.map((blog, index) => (
//           <div key={index} className="rounded-lg shadow-md overflow-hidden  dark:border-2">
//             {/* Blog post image */}
//             <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
            
//             {/* Blog post content */}
//             <div className="p-4">
//               {/* Blog post title */}
//               <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              
//               {/* Blog post description */}
//               <p className=" mb-4">{blog.description}</p>
              
//               {/* Blog post author and date */}
//               <div className="text-sm  mb-4">
//                 <span>By {blog.author}</span> | <span>{new Date(blog.date).toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}</span>
//               </div>
              
//               {/* Link to the full blog post */}
//               <Link href={`/blogpost/${blog.slug}`} className={buttonVariants({ variant: "outline" })}>Click here</Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// export default Blog;

"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const DRAFT_KEY = "blog_editor_draft";

export default function BlogEditor() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("draft");
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  // Load draft from localStorage on mount
  useEffect(() => {
    const draft = localStorage.getItem(DRAFT_KEY);
    if (draft) {
      const { title, content, author } = JSON.parse(draft);
      setTitle(title || "");
      setContent(content || "");
      setAuthor(author || "");
    }
  }, []);

  // Auto-save draft to localStorage every 2 seconds after changes
  useEffect(() => {
    if (!title && !content && !author) {
      setSaving(false);
      localStorage.removeItem(DRAFT_KEY);
      return;
    }
    setSaving(true);
    const timeout = setTimeout(() => {
      localStorage.setItem(
        DRAFT_KEY,
        JSON.stringify({ title, content, author })
      );
      setSaving(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [title, content, author]);

  const handlePublish = async () => {
    setSaving(true);
    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        content,
        author: author || "Anonymous",
        description: content.slice(0, 120),
      }),
    });
    const data = await res.json();
    setSaving(false);
    setStatus("published");
    localStorage.removeItem(DRAFT_KEY);
    if (data.slug) {
      router.push(`/blogpost/${data.slug}`);
    }
  };

  // Clear draft and reset all fields
  const handleClearDraft = () => {
    setTitle("");
    setContent("");
    setAuthor("");
    setStatus("draft");
    setSaving(false);
    localStorage.removeItem(DRAFT_KEY);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <input
        className="w-full p-2 mb-4 border rounded"
        placeholder="Author Name"
        value={author}
        onChange={e => setAuthor(e.target.value)}
      />
      <input
        className="w-full p-2 mb-4 border rounded"
        placeholder="Blog Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <p className="text-sm text-gray-500 mb-2">
        You can use <a href="https://www.markdownguide.org/cheat-sheet/" target="_blank" className="underline">Markdown</a> for formatting (headings, lists, bold, etc).
      </p>
      <textarea
        className="w-full p-2 h-64 border rounded"
        placeholder="Write your blog in Markdown..."
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <div className="flex gap-2 mt-4 items-center">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded cursor-pointer"
          onClick={handlePublish}
          disabled={status === "published" || !title || !content}
        >
          Publish
        </button>
        <button
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded border border-gray-400 cursor-pointer"
          onClick={handleClearDraft}
          type="button"
        >
          Clear Draft
        </button>
        {saving && <span className="text-gray-500">Saving draft...</span>}
        {status === "published" && <span className="text-green-600">Published!</span>}
      </div>
    </div>
  );
}