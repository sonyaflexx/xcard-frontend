import RegisterForm from "./components/RegisterForm"
import RegisterDesc from "./components/RegisterDesc"

import Link from "next/link"

export default function Register() {
    return (
        <>
            <div className="flex flex-col">
                <RegisterForm />
                <Link href={"/auth/"} className="text-center text-sm text-gray-300 my-2">Уже есть аккаунт?</Link>
            </div>
            <RegisterDesc />
        </>
    )
}