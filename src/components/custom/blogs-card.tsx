import Image from "next/image";
import React from "react";
interface Blog {
  title: string;
  description: string;
  thumbnail: string;
  date: string;
  tags: string[];
}

const BlogsCard = ({ blog }: { blog: Blog }) => {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[200px] rounded-md relative">
        <Image
          className="w-full h-full rounded-t-md"
          src={blog.thumbnail}
          alt={blog.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-1">
        <h1 className="font-bold text-lg text-blue-500 mb-2">{blog.title}</h1>
        <p className="text-sm font-thin text-slate-600">
          Last Updated: {blog.date}
        </p>
      </div>
    </div>
  );
};

export default BlogsCard;
