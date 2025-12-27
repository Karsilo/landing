"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ArrowRight } from "lucide-react";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";


const courses = [
    {
        title: "Mathematics",
        href: "https://mathematics.karsilo.com",
    },
    {
        title: "Physics",
        href: "https://physics.karsilo.com",
    },
    {
        title: "Astronomy",
        href: "https://astronomy.karsilo.com",
    },
];

const tools = [
    {
        title: "Bibliography Creator",
        href: "/tools/bibliography",
    },
    {
        title: "File Compressor",
        href: "/tools/compressor",
    },
];

const resources = [
    {
        title: "Question Bank",
        href: "/questions",
    },
    {
        title: "Practice Problems",
        href: "/questions",
    },
    {
        title: "Study Materials",
        href: "/questions",
    },
];

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <div className="flex flex-row gap-16 items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src="/logos/favicon-orange.svg"
                            alt="Karsilo"
                            width={32}
                            height={32}
                            className="h-8 w-8"
                        />
                        <span className="font-bold text-xl">Karsilo</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <NavigationMenu className="hidden lg:flex">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="flex w-[600px]">
                                        {/* Left Section - Dark Background */}
                                        <div className="w-[280px] bg-gray-900 dark:bg-gray-800 text-white p-6 rounded-l-lg">
                                            <h3 className="text-lg font-semibold mb-2">Courses</h3>
                                            <p className="text-sm text-gray-300 dark:text-gray-400 mb-6">
                                                Interactive learning materials for university students
                                            </p>
                                            <Button
                                                className="w-full bg-white text-gray-900 hover:bg-gray-100"
                                                asChild
                                            >
                                                <a href="https://app.karsilo.com/sign-up">Get started</a>
                                            </Button>
                                        </div>
                                        {/* Right Section - Links */}
                                        <div className="flex-1 p-6">
                                            <div className="space-y-1">
                                                {courses.map((course) => (
                                                    <a
                                                        key={course.title}
                                                        href={course.href}
                                                        className="flex items-center justify-between p-3 rounded-md hover:bg-muted transition-colors group"
                                                    >
                                                        <span className="text-sm font-medium">{course.title}</span>
                                                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="flex w-[600px]">
                                        {/* Left Section - Dark Background */}
                                        <div className="w-[280px] bg-gray-900 dark:bg-gray-800 text-white p-6 rounded-l-lg">
                                            <h3 className="text-lg font-semibold mb-2">Resources</h3>
                                            <p className="text-sm text-gray-300 dark:text-gray-400 mb-6">
                                                Practice questions and study materials for exam preparation
                                            </p>
                                            <Button
                                                className="w-full bg-white text-gray-900 hover:bg-gray-100"
                                                asChild
                                            >
                                                <a href="/questions">Browse questions</a>
                                            </Button>
                                        </div>
                                        {/* Right Section - Links */}
                                        <div className="flex-1 p-6">
                                            <div className="space-y-1">
                                                {resources.map((item) => (
                                                    <Link
                                                        key={item.title}
                                                        href={item.href}
                                                        className="flex items-center justify-between p-3 rounded-md hover:bg-muted transition-colors group"
                                                    >
                                                        <span className="text-sm font-medium">{item.title}</span>
                                                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="flex w-[600px]">
                                        {/* Left Section - Dark Background */}
                                        <div className="w-[280px] bg-gray-900 dark:bg-gray-800 text-white p-6 rounded-l-lg">
                                            <h3 className="text-lg font-semibold mb-2">Tools</h3>
                                            <p className="text-sm text-gray-300 dark:text-gray-400 mb-6">
                                                Free utilities to help with your studies and assignments
                                            </p>
                                            <Button
                                                className="w-full bg-white text-gray-900 hover:bg-gray-100"
                                                asChild
                                            >
                                                <a href="/tools">View all tools</a>
                                            </Button>
                                        </div>
                                        {/* Right Section - Links */}
                                        <div className="flex-1 p-6">
                                            <div className="space-y-1">
                                                {tools.map((tool) => (
                                                    <Link
                                                        key={tool.title}
                                                        href={tool.href}
                                                        className="flex items-center justify-between p-3 rounded-md hover:bg-muted transition-colors group"
                                                    >
                                                        <span className="text-sm font-medium">{tool.title}</span>
                                                        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                {/* Auth Buttons & Theme Toggle */}
                <div className="flex items-center space-x-2">
                    <ThemeToggle />
                    <div className="h-6 w-px bg-border mx-2" />
                    <Button variant="ghost" asChild className="hidden md:inline-flex">
                        <a href="https://app.karsilo.com/login">Login</a>
                    </Button>
                    <Button asChild>
                        <a href="https://app.karsilo.com/sign-up">Get Started</a>
                    </Button>


                    {/* Mobile Menu */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="lg:hidden">
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-full sm:max-w-md flex flex-col p-0">
                            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                            <nav className="flex-1 overflow-y-auto px-6 py-8">
                                <div className="space-y-8">
                                    <div>
                                        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                            Courses
                                        </h4>
                                        <div className="space-y-2">
                                            {courses.map((course) => (
                                                <a
                                                    key={course.title}
                                                    href={course.href}
                                                    className="block py-2 text-base hover:text-primary transition-colors"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {course.title}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                            Resources
                                        </h4>
                                        <div className="space-y-2">
                                            {resources.map((item) => (
                                                <Link
                                                    key={item.title}
                                                    href={item.href}
                                                    className="block py-2 text-base hover:text-primary transition-colors"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {item.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                                            Tools
                                        </h4>
                                        <div className="space-y-2">
                                            {tools.map((tool) => (
                                                <Link
                                                    key={tool.title}
                                                    href={tool.href}
                                                    className="block py-2 text-base hover:text-primary transition-colors"
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {tool.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            <div className="border-t px-6 py-4">
                                <div className="flex gap-3">
                                    <Button variant="outline" className="flex-1" asChild>
                                        <a href="https://app.karsilo.com/login">Login</a>
                                    </Button>
                                    <Button className="flex-1" asChild>
                                        <a href="https://app.karsilo.com/sign-up">Get Started</a>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}

