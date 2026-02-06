import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"
const NavBar = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("home")
  useEffect(() => {
    const sections = ["home", "about", "skills","projects","contact","experience","certificate"]
    const onScroll = () => {
      const scrollPos = window.scrollY + 200
      for (let sec of sections) {
        const el = document.getElementById(sec)
        if (el && el.offsetTop <= scrollPos) setActive(sec)
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav className="fixed w-full z-50 bg-dark-100/90 backdrop-blur-lg py-4 px-6 shadow-md border-b border-gray-800 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <a href="#home" className="text-3xl md:text-4xl font-bold text-white flex items-center gap-2 hover:text-purple transition-all">
          Siva <span className="text-amber-500">Bharathi</span>
          <span className="w-2 h-2 bg-purple rounded-full animate-pulse" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 font-medium text-lg">
          {["Home", "About", "Skills","Projects","Contact","Experience","Certificate"].map((item) => {
            const id = item.toLowerCase()
            const isActive = active === id
            return (
              <a
                key={item}
                href={`#${id}`}
                className={`relative px-1 py-2 text-white/80 hover:text-purple transition-all ${
                  isActive ? "text-black font-semibold" : ""
                }`}
              >
                <span>{item}</span>
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-purple transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            )
          })}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                {open ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="bg-dark-300 px-6 py-10">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-6 text-center mt-6">
                {["Home", "About", "Skills","Projects","Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="text-white/80 text-lg font-medium hover:text-purple transition-all"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
export default NavBar;
