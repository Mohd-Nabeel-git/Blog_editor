"use client"
import { Button } from "@/components/ui/button"
import Typed from 'typed.js';
import React, { useRef, useEffect } from 'react';

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Tech Reviews', 'Coding Tutorials', 'AI Insights', 'Web Development', 'Productivity Tips'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main>
      <section className="flex justify-center items-center container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">modern platform</span> to explore <br className="hidden lg:block" /> blogs on <span className="font-semibold underline decoration-primary"><span ref={el} /></span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Dive into insightful articles, tutorials, and thought pieces <br className="hidden lg:block" /> written by tech enthusiasts and industry experts.
          </p>
          <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20">
            <form action="#" className="flex flex-wrap justify-between md:flex-row">

            </form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img src="/blogging.svg" alt="blogging platform" className="w-full h-full max-w-md mx-auto" />
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Subscription Plans</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Support us and unlock exclusive content</p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border border-transparent hover:border-2 hover:border-purple-500">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Reader</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">Free</p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">Access Public Blogs</li>
                  <li className="text-gray-600 dark:text-gray-400">Comment & Like Posts</li>
                  <li className="text-gray-600 dark:text-gray-400">Join Discussions</li>
                </ul>
                <Button className="mx-1" variant="outline">Join Free</Button>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border border-transparent hover:border-2 hover:border-purple-500">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Writer</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">$10/month</p>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-purple-500 rounded-full">Most Popular</span>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">Publish Articles</li>
                  <li className="text-gray-600 dark:text-gray-400">Analytics Dashboard</li>
                  <li className="text-gray-600 dark:text-gray-400">Profile Customization</li>
                  <li className="text-gray-600 dark:text-gray-400">Community Support</li>
                </ul>
                <Button className="mx-1" variant="outline">Start Writing</Button>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center border border-transparent hover:border-2 hover:border-purple-500">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Pro</h3>
                <p className="mt-4 text-gray-500 dark:text-gray-300">$25/month</p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-gray-600 dark:text-gray-400">Monetize Your Blogs</li>
                  <li className="text-gray-600 dark:text-gray-400">SEO Tools</li>
                  <li className="text-gray-600 dark:text-gray-400">Newsletter Subscribers</li>
                  <li className="text-gray-600 dark:text-gray-400">Advanced Analytics</li>
                </ul>
                <Button className="mx-1" variant="outline">Go Pro</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Writers' Testimonials</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">See what content creators say about Bloggle</p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">"Bloggle has given me a platform to share my ideas and grow my audience. Love it!"</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Alex Carter</h3>
                <p className="text-gray-500 dark:text-gray-300">Tech Blogger</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">"A seamless writing and publishing experience. My go-to blogging platform."</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Riya Mehta</h3>
                <p className="text-gray-500 dark:text-gray-300">Lifestyle Writer</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center">
                <p className="text-gray-600 dark:text-gray-400">"Thanks to Bloggle, I’ve built a community of engaged readers around my niche."</p>
                <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-gray-200">Nikhil Rao</h3>
                <p className="text-gray-500 dark:text-gray-300">AI Enthusiast</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">Trending Blogs</h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">Catch up on what everyone is reading</p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoVmrevVxl1VO5OJsgUQUHZ6IKTlcg5rVD5Q&s" className="w-full h-64 object-cover rounded-t-lg" />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Mastering TypeScript: A Guide for JavaScript Devs</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">Learn how TypeScript enhances your JS code with type safety and better tooling.</p>
                  <Button className="m-2" variant="outline" href="/blog-post-1">Read More</Button>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg" alt="Blog 2" className="w-full h-64 object-cover rounded-t-lg" />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Top 10 Productivity Hacks for Developers</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">Discover effective routines and tools to stay focused and get more done.</p>
                  <Button className="m-2" variant="outline" href="/blog-post-2">Read More</Button>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105">
                <img src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg" alt="Blog 3" className="w-full h-64 object-cover rounded-t-lg" />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">How AI is Transforming Modern Web Design</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">Explore the role of artificial intelligence in shaping the future of UX/UI.</p>
                  <Button className="m-2" variant="outline" href="/blog-post-3">Read More</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};