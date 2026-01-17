import Blog from "@/components/Blog";
import BlogCardList from "@/components/BlogCardList";
import { useEffect, useState } from "react";
import { RiArticleLine } from "react-icons/ri";
import { fetchBlogs } from "@/api/blogs";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";


export default function Home() {
  const location = useLocation();
  const [selectedBlogId,setSelectedBlogId] = useState<number | null>(null)
  
  const {
    data: blogs,
    isLoading,
    isError} = useQuery<Blog[]>({
        queryKey: ["blogs"],
        queryFn: fetchBlogs,
    });

    const sortedBlogs = [...(blogs ?? [] )].sort(
    (a,b) => new Date(b.date).getTime() - new Date(a.date).getTime())

    useEffect(() => {
        if (sortedBlogs.length === 0) return;

        if (location.state?.fromCreate) {
            setSelectedBlogId(sortedBlogs[0].id)
            return;
        }

        if (!selectedBlogId && sortedBlogs.length > 0) {
          setSelectedBlogId(sortedBlogs[0].id)
        }
    }, [sortedBlogs, selectedBlogId])

    return (
    <div className="min-h-screen bg-muted/40">
       <div className="max-w-7xl mx-auto px-6 py-4 text-center">
          <h1 className="text-3xl mt-4 font-bold">
              CA Monk Blogs<RiArticleLine className="inline font-bold"/>
          </h1>
          <p className="text-muted-foreground mt-2">
            A collection of blogs focused on learning and continuous growth
          </p>
       </div>

       <main className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="order-2 md:order-1">
            <hr className="md:hidden my-4 border-border" />
            <h2 className="text-lg text-center font-semibold text-gray-700 mb-2 md:">Browse All Blogs</h2>
            <div className="md:col-span-1 h-[calc(100vh-20px)] overflow-y-auto p-1">
             <BlogCardList
               onSelectBlog={setSelectedBlogId}
               selectedBlogId={selectedBlogId}
               blogs={sortedBlogs}
               isLoading={isLoading}
               isError={isError} 
             />
           </div>
        </div>
        
        <div className="md:col-span-2 order-1 md:order-2">
            <Blog blogId={selectedBlogId} />
        </div>

       </main>
    </div>
  )
}
