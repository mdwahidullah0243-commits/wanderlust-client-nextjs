'use client';

import { User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavRightBtn = ({ path, content }) => {
    const pathname = usePathname();

    return (
        <Link href={path}>
            <button className={`btn btn-ghost ${pathname === path && 'bg-[#273c75] text-slate-200'}`}>
                {content === 'Profile' && <User />} {content}
            </button>
        </Link>
    );
};

export default NavRightBtn;