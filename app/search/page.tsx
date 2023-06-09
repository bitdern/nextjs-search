"use client";

import { Post, User } from "@prisma/client";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

const fetchPosts = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

const SearchPage = () => {
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");

  const { data, isLoading } = useSWR<{ posts: Array<Post & { author: User }> }>(
    `/api/search?q=${encodedSearchQuery}`,
    fetchPosts
  );

  if (!data?.posts) {
    return null;
  }

  console.log("SEARCH PARAMS", data);

  return;
  <div>
    {data.posts.map((post) => (
      <div>{post.body}</div>
    ))}
  </div>;
};

export default SearchPage;
