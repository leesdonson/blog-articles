import React from "react";
import { blogs } from "@/lib/blogs";
import BlogsCard from "./blogs-card";
import Link from "next/link";
const Blogs = () => {
  return (
    <div className="grid grid-auto-fill gap-3">
      {blogs.map((blog) => (
        <Link
          className="border border-slate-300 rounded-md shadow-md transition-all duration-300 ease-in-out hover:shadow-blue-400"
          key={blog.title}
          href={`/blog/${blog.slug}`}
        >
          <BlogsCard blog={blog} />
        </Link>
      ))}
    </div>
  );
};

export default Blogs;
