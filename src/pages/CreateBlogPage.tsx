import CreateBlogForm from "@/components/CreateBlogForm";

export default function CreateBlogPage() {
  return (
    <div className="min-h-screen bg-muted/40">
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold">Create New Blog</h1>
          <p className="text-muted-foreground mt-2">
            Fill in the details below to publish a new blog post
          </p>
        </div>
        
        <CreateBlogForm />
      </div>
    </div>
  );
}
