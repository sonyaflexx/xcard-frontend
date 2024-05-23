import ForgotDesc from "./components/ForgotDesc"
import ForgotForm from "./components/ForgotForm"
import Link from "next/link"

export default function ForgotPassword() {
    return (
        <>
            <div className="flex flex-col">
                <ForgotForm />
                <div className="my-2 flex flex-col">
                    <Link href="/auth" className="text-center text-sm text-gray-300">Вспомнили пароль?</Link>
                </div>
            </div>
            <ForgotDesc />
        </>
    )
}