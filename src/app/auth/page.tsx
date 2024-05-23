import LoginForm from "./components/LoginForm"
import LoginDesc from "./components/LoginDesc"
import Link from "next/link"

export default function Login() {
    return (
        <>
            <div className="flex flex-col">
                <LoginForm />
                <div className="my-2 flex flex-col">
                    <Link href="/auth/forgot-password" className="text-center text-sm text-gray-300">Забыли пароль?</Link>
                    <Link href="/auth/register" className="text-center text-sm text-gray-300">Ещё нет аккаунта?</Link>
                </div>
            </div>
            <LoginDesc />
        </>
    )
}