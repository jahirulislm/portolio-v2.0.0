import React from "react";
import { getAllPosts } from "@/lib/blog";
import BlogClient from "./BlogClient";

const Blog = () => {
    const posts = getAllPosts();
    return <BlogClient posts={posts} />;
};

export default Blog;
