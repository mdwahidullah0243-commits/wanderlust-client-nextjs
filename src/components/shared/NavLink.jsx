'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ path, content }) => {
    const pathname = usePathname();

    return (
        <Link
            href={path}
            className={`text-base font-medium ${pathname === path && 'text-[#34ace0] underline decoration-[#34ace0]'}`}
        >
            {content}
        </Link>
    );
};

export default NavLink;