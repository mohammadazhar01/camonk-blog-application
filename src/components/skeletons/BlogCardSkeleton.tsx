import { Card, CardContent } from "../ui/card";

export default function BlogCardSkeleton() {
    return(
        <Card className="overflow-hidden animate-pulse">
            <CardContent className="p-4 space-y-3">
                <div className="h-3 w-24 bg-muted rounded" />
                <div className="h-4 w-full bg-muted rounded" />
                <div className="h-4 w-5/6 bg-muted rounded" />
                <div className="h-3 w-full bg-muted rounded" />
            </CardContent>
        </Card>
    )
}