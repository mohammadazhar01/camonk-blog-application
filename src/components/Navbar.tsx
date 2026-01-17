import { Button } from "@/components/ui/button"
import { Link, useLocation } from "react-router-dom"
import { PiGraduationCapDuotone } from "react-icons/pi";

export default function Navbar() {
    const location = useLocation()
    const isCreateBlog = location.pathname === "/createblog" ? true : false
    
    return (
        <header className=" sticky top-0 z-50  border-b border-border bg-background shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link to="/">
              <h1 className="text-xl font-bold text-primary flex items-center gap-1">
                <PiGraduationCapDuotone className="text-2xl" />
                <span>CA MONK</span>
              </h1>
            </Link>
    
            {isCreateBlog ? (<Link to="/">
              <Button className="cursor-pointer" variant="default">
                Home
              </Button>
            </Link>): (<Link to="/createblog">
              <Button className="cursor-pointer" variant="default">
                Add Blog
              </Button>
            </  Link>)}

          </div>
        </header>
    )
}
