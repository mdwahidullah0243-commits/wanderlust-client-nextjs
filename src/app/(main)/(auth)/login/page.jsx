'use client';

import SignInWithGoogle from "@/components/auth/SignInWithGoogle";
import { authClient } from "@/lib/auth-client";
import {
    Button,
    FieldError,
    Fieldset,
    Form,
    Input,
    Label,
    Surface,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
    const handleSubmitOnLogin = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const {data, error} = await authClient.signIn.email({
            email: userData.email,
            password: userData.password,
            callbackURL: '/'
        });

        if(data) {
            alert('You are successfully Logged In. Now, you can enter our platform');
        };

        if(error) {
            alert(`You account is failed - ${error.message}`);
        };
    };

    return (
        <div className="w-2/5 mx-auto my-15 space-y-7">
            <div className="text-center space-y-2">
                <h2 className={`text-2xl font-semibold`}>
                    Welcome Back
                </h2>
                <p className="text-sm font-medium text-slate-600">
                    Resume your adventure with Wanderlust
                </p>
            </div>

            <div className="border border-slate-300 rounded-xl shadow-sm flex items-center justify-center bg-surface p-6">
                <Surface className="w-full min-w-95">
                    <Form onSubmit={handleSubmitOnLogin}>
                        <Fieldset className="w-full">
                            <Fieldset.Group>
                                <TextField isRequired name="email" type="email">
                                    <Label>Email</Label>
                                    <Input placeholder="Enter your email" variant="secondary" />
                                    <FieldError />
                                </TextField>

                                <TextField isRequired name="password" type="password">
                                    <Label>Password</Label>
                                    <Input placeholder="Enter your password" variant="secondary" />
                                    <FieldError />
                                </TextField>
                            </Fieldset.Group>

                            <Fieldset.Actions>
                                <Button
                                    type="submit"
                                    variant="outline"
                                    className="text-lg font-medium py-2 h-auto rounded-full w-full bg-cyan-500 text-white"
                                >
                                    Sign In
                                </Button>
                            </Fieldset.Actions>
                        </Fieldset>
                    </Form>

                    <div className="divider text-slate-500">Or continue with</div>

                    <SignInWithGoogle content={'Sign In with Google'} />

                    <div className="mt-5 flex justify-center items-center gap-2 text-base">
                        <p className="font-medium text-slate-600">
                            Don't have an account?
                        </p>
                        <Link href={'/register'} className="text-[#0abde3] font-semibold">
                            Sign Up
                        </Link>
                    </div>
                </Surface>
            </div>
        </div>
    );
};

export default LoginPage;