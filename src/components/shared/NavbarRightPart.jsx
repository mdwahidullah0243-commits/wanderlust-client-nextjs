'use client';

import { authClient } from "@/lib/auth-client";
import NavRightBtn from "./NavRightBtn";
import SignOutBtn from "./SignOutBtn";
import { DNA } from "react-loader-spinner";

const NavbarRightPart = () => {
    const { data, isPending } = authClient.useSession();
    const user = data?.user;

    if (isPending) {
        return <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
        />
    };

    return (
        <>
            {
                user
                    ?
                    <div className="flex items-center gap-3">
                        <NavRightBtn path={'/profile'} content={'Profile'} />
                        <SignOutBtn />
                    </div>
                    :
                    <>
                        <NavRightBtn path={'/login'} content={'Login'} />
                        <NavRightBtn path={'/register'} content={'Register'} />
                    </>
            }
        </>
    );
};

export default NavbarRightPart;