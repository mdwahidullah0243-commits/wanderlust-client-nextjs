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

const RegisterPage = () => {
    const handleSubmitOnRegister = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const userData = Object.fromEntries(formData.entries());

        const { data, error } = await authClient.signUp.email({
            name: userData.name,
            email: userData.email,
            image: userData.imageUrl,
            password: userData.password,
            callbackURL: '/destinations'
        });

        if(data) {
            alert(`Your account is successfully created!`);
        };

        if(error) {
            alert(`Your account is faild - ${error.message}`);
        };
    };

    return (
        <div className="w-2/5 mx-auto my-15 space-y-7">
            <div className="text-center space-y-2">
                <h2 className={`text-2xl font-semibold`}>
                    Create Account
                </h2>
                <p className="text-sm font-medium text-slate-600">
                    Start your adventure with Wanderlust
                </p>
            </div>

            <div className="border border-slate-300 rounded-xl shadow-sm flex items-center justify-center bg-surface p-6">
                <Surface className="w-full min-w-95">
                    <Form onSubmit={handleSubmitOnRegister}>
                        <Fieldset className="w-full">
                            <Fieldset.Group>
                                <TextField isRequired name="name">
                                    <Label>Full Name</Label>
                                    <Input placeholder="Enter your name" variant="secondary" />
                                    <FieldError />
                                </TextField>

                                <TextField isRequired name="email" type="email">
                                    <Label>Email</Label>
                                    <Input placeholder="Enter your email" variant="secondary" />
                                    <FieldError />
                                </TextField>

                                <TextField name="imageUrl" type="url">
                                    <Label>ImageUrl</Label>
                                    <Input placeholder="Give your image address for profile" variant="secondary" />
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
                                    Create Account
                                </Button>
                            </Fieldset.Actions>
                        </Fieldset>
                    </Form>

                    <div className="divider text-slate-500">Or sign up with</div>

                    <SignInWithGoogle content={'Sign Up with Google'} />

                    <div className="mt-5 flex justify-center items-center gap-2 text-base">
                        <p className="font-medium text-slate-600">
                            Already have an account?
                        </p>
                        <Link href={'/login'} className="text-[#0abde3] font-semibold">
                            Sign In
                        </Link>
                    </div>
                </Surface>
            </div>
        </div>
    );
};

export default RegisterPage;