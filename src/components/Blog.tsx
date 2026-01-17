import { Card, CardContent } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { getBlogById } from "@/api/blogs";
import BlogSkeleton from "./skeletons/BlogSkeleton";
import coverPlaceHolder from '../assets/cover_placeholder.jpg'

interface BlogProps {
    blogId: number | null
}

export default function Blog({blogId} : BlogProps) {

    const {data: blog, isLoading, isError} = useQuery({
        queryKey: ["blog", blogId],
        queryFn: ()=> getBlogById(blogId as number),
        enabled: !!blogId,
    })
    
    if (isLoading) {
        return <BlogSkeleton />
    }

    if (isError) {
        return <p className="p-6 text-center text-red-500">Blog Not Found!</p>;
    }


    if (!blogId) {
    return (<Card>
        <CardContent className="p-10 text-center text-muted-foreground">
          Select a blog to read
        </CardContent>
      </Card>);
    }

    return(  
        <Card className="overflow-hidden">

          <img src={blog.coverImage}
            onError={(e) => {e.currentTarget.src = coverPlaceHolder}}
            alt={blog.title} 
            className="h-64 w-full object-cover"
          />
        
          <CardContent className="p-6 space-y-2">
            <h2 className="text-3xl font-semibold">
              {blog.title}
            </h2>
        
            <div className="text-sm mb-4 text-muted-foreground">
              <span className="text-primary font-medium">{blog.category[0]}</span>
              <span className="text-black"> | </span> 
              {new Date(blog.date).toDateString()}
            </div>

            <h3 className="text-xl">
                {blog.description}  
            </h3>
        
            <p className="leading-relaxed ml-1 text-sm">
              {blog.content}
            </p>

            <p>Tags: <span className="text-gray-600">{blog.category.join(' | ')} </span></p>
          </CardContent>
        </Card>
    )
}