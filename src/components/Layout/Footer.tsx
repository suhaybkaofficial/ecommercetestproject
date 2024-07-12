import { MountainIcon } from "lucide-react";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="bg-muted py-8 md:py-12">
    <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
      <Link to="/" className="flex items-center gap-2 text-primary">
        <MountainIcon className="h-6 w-6" />
        <span className="font-semibold text-lg">Suhaybka Store</span>
      </Link>
      <nav className="flex flex-wrap items-center gap-4 md:gap-6">
        <Link to="/" className="text-sm font-medium hover:underline underline-offset-4" >
          Home
        </Link>
        <Link to="/" className="text-sm font-medium hover:underline underline-offset-4" >
          Shop
        </Link>
        <Link to="/" className="text-sm font-medium hover:underline underline-offset-4" >
          About
        </Link>
        <Link to="/" className="text-sm font-medium hover:underline underline-offset-4" >
          Contact
        </Link>
      </nav>
      <div className="text-xs text-muted-foreground">&copy; 2024 Suhaybka Store. All rights reserved.</div>
    </div>
  </footer>
  )
}
