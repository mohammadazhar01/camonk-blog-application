import type { Blog } from "@/types/blog";
import BlogCard from "./BlogCard";
import BlogCardSkeleton from "./skeletons/BlogCardSkeleton";

interface BlogListProps {
  onSelectBlog: (id: number) => void;
  selectedBlogId: number | null,
  blogs: Blog[];
  isLoading: boolean;
  isError: boolean;
}

export default function BlogList({ onSelectBlog, selectedBlogId, blogs, isLoading, isError, }: BlogListProps) {

  if (isLoading) {
    return(
        <div className="space-y-4">
            {[1,2,3].map((i)=> (<BlogCardSkeleton key={i}/>))}
        </div>
    )
  }

  if (isError) {
    return <p className="p-6 text-red-500">Error loading blogs</p>;
  }
  

  return (  
    <div className="space-y-4">
      {blogs?.map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          onSelect={onSelectBlog}
          isSelected= {blog.id === selectedBlogId}
        />
      ))}
    </div>
  )
}
