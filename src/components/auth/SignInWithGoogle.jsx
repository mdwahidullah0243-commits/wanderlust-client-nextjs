import { authClient } from "@/lib/auth-client";
import { FcGoogle } from "react-icons/fc";

const SignInWithGoogle = ({ content }) => {
    const handleSignInWithGoogle = async () => {
        const data = await authClient.signIn.social({
            provider: 'google'
        });
    };

    return (
        <button onClick={handleSignInWithGoogle} className="btn gap-2 w-full text-base font-medium shadow-none py-2 h-auto">
            <FcGoogle size={25} /> {content}
        </button>
    );
};

export default SignInWithGoogle;