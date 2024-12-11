import Image from "next/image";
import Link from "next/link";
import { MdPersonOutline } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Header() {
  return (
    <header className="w-full h-20 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center h-full px-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            width={60}
            height={80}
            alt="Furniro Logo"
            className="object-contain"
          />
          <span className="text-2xl font-bold text-gray-800 ml-2">Furniro</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-8 text-gray-700 text-lg font-medium">
          <Link href="/" className="hover:text-[#B88E2F] transition">Home</Link>
          <Link href="/shop" className="hover:text-[#B88E2F] transition">Shop</Link>
          <Link href="/blog"  className="hover:text-[#B88E2F] transition">Blog</Link>
          <Link href="/contact" className="hover:text-[#B88E2F] transition">Contact</Link>
        </nav>

        {/* Icons Section */}
        <div className="flex items-center space-x-6 text-gray-700 text-2xl">
          <MdPersonOutline className="hover:text-[#B88E2F] cursor-pointer" />
          <CiSearch className="hover:text-[#B88E2F] cursor-pointer" />
          <GoHeart className="hover:text-[#B88E2F] cursor-pointer" />
          <AiOutlineShoppingCart className="hover:text-[#B88E2F] cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden text-2xl cursor-pointer">
          {/* Add a menu icon (hamburger menu) for mobile */}
          <CiSearch />
        </div>
      </div>
    </header>
  );
}
