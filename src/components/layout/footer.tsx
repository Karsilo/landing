import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-gray-900 dark:bg-gray-100 text-gray-300 dark:text-gray-700 border-t border-gray-800 dark:border-gray-200">
            <div className="container py-12 md:py-16">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image
                                src="/logos/favicon-orange.svg"
                                alt="Karsilo"
                                width={32}
                                height={32}
                                className="h-8 w-8"
                            />
                            <span className="font-bold text-xl text-white dark:text-gray-900">Karsilo</span>
                        </Link>
                        <p className="text-sm leading-relaxed">
                            For a curious mind
                        </p>
                        <p className="text-sm leading-relaxed">
                            Your comprehensive question bank for university studies.
                        </p>
                    </div>

                    {/* Product Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-white dark:text-gray-900">Product</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    href="/questions"
                                    className="hover:text-white dark:hover:text-gray-900 transition-colors"
                                >
                                    Question Bank
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/courses"
                                    className="hover:text-white dark:hover:text-gray-900 transition-colors"
                                >
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="https://app.karsilo.com"
                                    className="hover:text-white dark:hover:text-gray-900 transition-colors"
                                >
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://app.karsilo.com/login"
                                    className="hover:text-white dark:hover:text-gray-900 transition-colors"
                                >
                                    Login
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-white dark:text-gray-900">Resources</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <a
                                    href="https://mathematics.karsilo.com"
                                    className="hover:text-white dark:hover:text-gray-900 transition-colors"
                                >
                                    Mathematics
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://physics.karsilo.com"
                                    className="hover:text-white dark:hover:text-gray-900 transition-colors"
                                >
                                    Physics
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://astronomy.karsilo.com"
                                    className="hover:text-white dark:hover:text-gray-900 transition-colors"
                                >
                                    Astronomy
                                </a>
                            </li>
                            <li>
                                <Link
                                    href="/tools"
                                    className="hover:text-white dark:hover:text-gray-900 transition-colors"
                                >
                                    Tools
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-white dark:text-gray-900">Company</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link
                                    href="/privacy"
                                    className="hover:text-white dark:hover:text-gray-900 transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="hover:text-white dark:hover:text-gray-900 transition-colors"
                                >
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/cookies"
                                    className="hover:text-white dark:hover:text-gray-900 transition-colors"
                                >
                                    Cookies
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 dark:border-gray-300 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                        <p>© {new Date().getFullYear()} Karsilo. All rights reserved.</p>
                        <div className="flex gap-6">
                            <Link
                                href="/terms"
                                className="hover:text-white dark:hover:text-gray-900 transition-colors"
                            >
                                Terms
                            </Link>
                            <Link
                                href="/privacy"
                                className="hover:text-white dark:hover:text-gray-900 transition-colors"
                            >
                                Privacy
                            </Link>
                            <Link
                                href="/cookies"
                                className="hover:text-white dark:hover:text-gray-900 transition-colors"
                            >
                                Cookies
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
