import Link from "next/link";
import NavLink from "./NavLink";
import Image from "next/image";
import NavbarRightPart from "./NavbarRightPart";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Navbar = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;

    return (
        <div>
            <div className="navbar bg-white/80 shadow-sm">

                {/* Left Part */}
                <div className="navbar-start">
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm flex-row text-slate-900">
                        <li className="">
                            <NavLink path={'/'} content={'Home'} />
                        </li>
                        <li>
                            <NavLink path={'/destinations'} content={'Destinations'} />
                        </li>
                        <li>
                            <NavLink path={`/my-bookings/user/${user?.id}`} content={'My Bookings'} />
                        </li>
                        <li>
                            <NavLink path={'/admin/add-new-travel-package'} content={'Admin'} />
                        </li>
                    </ul>
                </div>

                {/* Center Part */}
                <div className="navbar-center">
                    <Link href={'/'} className="btn btn-ghost text-xl">
                        <Image
                            src={'/assets/Wanderlast.png'}
                            alt="Logo"
                            width={150}
                            height={80}
                        />
                    </Link>
                </div>

                {/* Right Part */}
                <div className="navbar-end">
                    <NavbarRightPart />
                </div>
            </div>
        </div>
    );
};

export default Navbar;