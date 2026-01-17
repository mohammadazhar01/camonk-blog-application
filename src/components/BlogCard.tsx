import { Card, CardContent } from "@/components/ui/card"
import { Blog } from "@/types/blog"

interface BlogCardProps {
  blog: Blog;
  onSelect: (id: number) => void;
  isSelected: boolean;
}

export default function BlogCard({ blog, onSelect, isSelected }: BlogCardProps) {
  return (
    <Card
      onClick={() => {
        onSelect(blog.id);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
       }}
      className={`cursor-pointer overflow-hidden transition-all hover:shadow-lg ${isSelected ? "ring-1 ring-primary shadow-lg": "hover:ring-1 hover:ring-muted"}`}
    >
      <CardContent className="p-4 space-y-2">
        <div className="flex justify-between">
            <div className="text-xs text-muted-foreground">
                <span className="text-primary font-semibold">{blog.category.join(" • ")}</span>
            </div>
            <div className="text-xs text-muted-foreground">
                {blog.date.slice(0,10)}
            </div>
        </div>

        <h3 className="font-semibold leading-tight line-clamp-2">
          {blog.title}
        </h3>

        <p className="text-sm text-muted-foreground line-clamp-3">
          {blog.description}
        </p>
      </CardContent>
    </Card>
  );
}
