import { authClient } from "@/lib/auth-client";

const SignOutBtn = () => {
    return (
        <button onClick={async () => await authClient.signOut()} className={`btn btn-ghost bg-[#3c6382] text-slate-200`}>
            Sign Out
        </button>
    );
};

export default SignOutBtn;