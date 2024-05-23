import NewPasswordDesc from "./components/NewPasswordDesc"
import NewPasswordForm from "./components/NewPasswordForm"

export default function NewPassword() {
    return (
        <>
            <div className="flex flex-col">
                <NewPasswordForm />
            </div>
            <NewPasswordDesc />
        </>
    )
}