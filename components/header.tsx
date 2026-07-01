"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Menu, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Menu definitions
interface NavItem {
  label: string;
  href?: string;
  dropdownItems?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    dropdownItems: [
      { label: "Our Purpose", href: "/#our-story" },
      { label: "Leadership", href: "/#leadership" },
      { label: "Our Mission", href: "/#our-story" },
    ],
  },
  { label: "Why Khan", href: "/#why-us" },
  { label: "Our Services", href: "/#services" },
  {
    label: "Projects",
    dropdownItems: [
      { label: "All Properties", href: "/properties" },
      { label: "Residential Homes", href: "/properties?type=residential" },
      { label: "Commercial Spaces", href: "/properties?type=commercial" },
    ],
  },
  { label: "Contact", href: "/#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const [activeDropdown, setActiveDropdown] = React.useState<number | null>(
    null,
  );
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isHomePage = pathname === "/";

  // Handle scroll detection
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  React.useEffect(() => {
    const handleOutsideClick = () => {
      setActiveDropdown(null);
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  // Determine if header should be transparent
  // We want it transparent only at the top of the homepage
  const isTransparent = isHomePage && !isScrolled;

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.split("#")[1];

      if (!isHomePage) {
        // Redirect to homepage first, then scroll
        router.push(href);
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          const headerOffset = 90;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
      setMobileOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out py-2",
        isTransparent
          ? "bg-transparent border-b border-white/5 py-2"
          : "glassmorphism-light shadow-md shadow-gold border-b border-border/80 py-1.5",
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus:outline-none"
        >
          <Image
            src="/logo_white.png"
            alt="Khan Builders Logo"
            width={48}
            height={48}
            loading="eager"
            className="object-contain group-hover:scale-110 transition-transform"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item, index) => {
            const hasDropdown = !!item.dropdownItems;
            const isDropdownActive = activeDropdown === index;

            return (
              <div
                key={item.label}
                className="relative"
                onClick={(e) => {
                  if (hasDropdown) {
                    e.stopPropagation();
                    setActiveDropdown(isDropdownActive ? null : index);
                  }
                }}
                onMouseEnter={() => {
                  setHoveredIndex(index);
                  if (hasDropdown) setActiveDropdown(index);
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null);
                  if (hasDropdown) setActiveDropdown(null);
                }}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href!)}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-full relative transition-colors focus:outline-none flex items-center gap-1",
                      isTransparent
                        ? "text-white/80 hover:text-white"
                        : "text-foreground/80 hover:text-foreground",
                    )}
                  >
                    {item.label}
                    {hoveredIndex === index && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                ) : (
                  <button
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-full relative transition-colors focus:outline-none flex items-center gap-1 cursor-pointer",
                      isTransparent
                        ? "text-white/80 hover:text-white"
                        : "text-foreground/80 hover:text-foreground",
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform duration-300",
                        isDropdownActive && "rotate-180",
                      )}
                    />
                    {hoveredIndex === index && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                )}

                {/* Animated Dropdown Menu */}
                <AnimatePresence>
                  {hasDropdown && isDropdownActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className={cn(
                        "absolute top-full left-0 mt-2 w-56 rounded-2xl p-2 shadow-xl border focus:outline-none glassmorphism-light",
                        isTransparent
                          ? "border-white/10 bg-slate-900/90 text-white"
                          : "border-border bg-background text-foreground",
                      )}
                    >
                      <div className="flex flex-col gap-0.5">
                        {item.dropdownItems!.map((subItem) => (
                          <Link
                            key={subItem.label}
                            href={subItem.href}
                            onClick={(e) => handleNavClick(e, subItem.href)}
                            className={cn(
                              "px-4 py-2 text-xs font-medium rounded-xl transition-all duration-200 flex items-center justify-between group/item",
                              isTransparent
                                ? "hover:bg-white/10 hover:text-accent"
                                : "hover:bg-muted hover:text-accent",
                            )}
                          >
                            <span>{subItem.label}</span>
                            <span className="opacity-0 group-hover/item:opacity-100 transition-opacity text-[10px] text-accent font-bold">
                              &rarr;
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Button
            asChild
            className={cn(
              "hidden md:inline-flex items-center gap-2 rounded-full font-semibold shadow-md transition-all hover:scale-[1.02]",
              isTransparent
                ? "bg-white text-slate-950 hover:bg-accent hover:text-white"
                : "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground",
            )}
          >
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact")}
            >
              <PhoneCall className="w-4 h-4" />
              <span>Inquire Now</span>
            </Link>
          </Button>

          {/* Mobile Drawer Trigger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  "lg:hidden w-9 h-9 rounded-full border border-border/10",
                  isTransparent
                    ? "text-white hover:bg-white/10"
                    : "text-foreground hover:bg-muted",
                )}
              >
                <Menu className="w-5 h-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[350px] p-0 border-l border-border/40 bg-background/95 backdrop-blur-xl"
            >
              <SheetHeader className="p-6 border-b border-border/10 flex flex-row items-center justify-between">
                <SheetTitle className="text-left font-black tracking-wider uppercase text-foreground">
                  Khan{" "}
                  <span className="text-accent text-xs block tracking-widest font-bold">
                    Builders
                  </span>
                </SheetTitle>
              </SheetHeader>

              <div className="px-6 py-8 flex flex-col gap-6 h-[calc(100vh-100px)] justify-between overflow-y-auto">
                <nav className="flex flex-col gap-4">
                  {navItems.map((item) => {
                    const hasDropdown = !!item.dropdownItems;

                    return (
                      <div key={item.label} className="flex flex-col gap-2">
                        {item.href ? (
                          <Link
                            href={item.href}
                            onClick={(e) => handleNavClick(e, item.href!)}
                            className="text-lg font-semibold hover:text-accent transition-colors py-1 flex items-center justify-between"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <span className="text-lg font-semibold text-foreground/50 py-1 uppercase tracking-wider text-[10px]">
                            {item.label}
                          </span>
                        )}

                        {hasDropdown && (
                          <div className="pl-4 border-l border-border/60 flex flex-col gap-3 mt-1 mb-2">
                            {item.dropdownItems!.map((subItem) => (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                onClick={(e) => handleNavClick(e, subItem.href)}
                                className="text-sm font-medium text-foreground/75 hover:text-accent transition-colors"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </nav>

                <div className="flex flex-col gap-4">
                  <Button
                    asChild
                    className="w-full rounded-full font-bold bg-primary text-primary-foreground hover:bg-accent"
                  >
                    <Link
                      href="/#contact"
                      onClick={(e) => handleNavClick(e, "/#contact")}
                    >
                      <PhoneCall className="w-4 h-4 mr-2" />
                      Inquire Now
                    </Link>
                  </Button>
                  <p className="text-[10px] text-center text-muted-foreground">
                    &copy; {new Date().getFullYear()} Khan Builders. All rights
                    reserved.
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
