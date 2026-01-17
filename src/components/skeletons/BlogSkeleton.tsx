import { Card, CardContent } from "../ui/card";


export default function BlogSkeleton() {
    return(
        <Card className="overflow-hidden animate-pulse">
            <div className="h-64 bg-muted" />
            <CardContent className="p-6 space-y-4">
               <div className="h-6 w-3/4 bg-muted rounded" />
               <div className="h-4 w-1/2 bg-muted rounded" />
               <div className="h-4 w-full bg-muted rounded" />
               <div className="h-4 w-full bg-muted rounded" />
               <div className="h-4 w-5/6 bg-muted rounded" />
            </CardContent>
        </Card>
    )
}