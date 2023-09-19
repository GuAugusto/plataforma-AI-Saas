import { Button } from "@/components/ui/button"
import Link from "next/link"

const LandingPage = () => {
    return (
        <div>
            Landing Page (Unprotected)
            <div>
                <Link href="/sing-in">
                    <Button>
                        Login
                    </Button>
                </Link>
                <Link href="/sing-up">
                    <Button>
                        Register
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage