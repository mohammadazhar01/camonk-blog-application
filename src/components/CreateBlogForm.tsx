import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { createBlog } from "@/api/blogs"
import toast from "react-hot-toast";

export default function CreateBlogForm() {
  const queryClient = useQueryClient();
  const Navigate = useNavigate()

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    coverImage: "",
    content: "",
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] })

      toast.success("New blog created")
      setFormData({
        title: "",
        description: "",
        category: "",
        coverImage: "",
        content: "",
      })

      Navigate("/")
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    mutate({
      title: formData.title,
      description: formData.description,
      category: formData.category.split(",").map((c) => c.trim()),
      coverImage: formData.coverImage,
      content: formData.content,
      date: new Date().toISOString(),
    });
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Create Blog</CardTitle>
        <CardDescription>
          Add a title, categories, and content for your blog
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <Input
            placeholder="Blog title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />

          <Input
            placeholder="Categories (e.g. TECH, FINANCE)"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            required
          />

          <Input
            placeholder="Cover image URL (e.g. https://exampleimage.com)"
            value={formData.coverImage}
            onChange={(e) =>
              setFormData({ ...formData, coverImage: e.target.value })
            }
            required 
          />

          <Textarea
            placeholder="Short description"
            rows={3}
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          />

          <Textarea
            placeholder="Full blog content"
            rows={12}
            value={formData.content}
            onChange={(e) =>
              setFormData({ ...formData, content: e.target.value })
            }
            required
          />

          <Button
            type="submit"
            className="w-full cursor-pointer"
            disabled={isPending} 
          >
            {isPending ? "Publishing..." : "Publish Blog"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
