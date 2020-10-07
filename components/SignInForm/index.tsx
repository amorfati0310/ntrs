import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { login } from '../../pages/api/user';



interface SignInFormProps {

}

const SignInFormBlock = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default function SignInForm(): JSX.Element {
    const [isLoading, setLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleOnChnage = () => { };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        const router = useRouter();
        e.preventDefault();
        setLoading(true);

        try {
            const { data, status } = await login({ email, password });

            router.push('/');
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <SignInFormBlock onSubmit={handleSubmit}>

            <input
                type="email"
                placeholder="email"
                value={email}
                onChange={handleOnChnage}
            />
            <input
                type="text"
                placeholder="password"
                value={password}
                onChange={handleOnChnage}
            />
            <div>
                <button type="submit">
                    Sign In
                </button>
            </div>
        </SignInFormBlock>
    );
};
