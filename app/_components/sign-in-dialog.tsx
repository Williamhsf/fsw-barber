import { signIn } from "next-auth/react"
import { Button } from "./ui/button"
import { DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"
import Image from "next/image"

const SignInDialog = () => {
  const handleLoginWithGoogleClick = () => signIn("google")

  return (
    <>
      <DialogHeader>
        <DialogTitle>Faça login na plataforma</DialogTitle>
        <DialogDescription>
          Conecte-se usando sua conta do Google
        </DialogDescription>
      </DialogHeader>

      <Button
        onClick={handleLoginWithGoogleClick}
        className="gap-1 font-bold"
        variant="outline"
      >
        <Image
          src="/google.svg"
          width={18}
          height={18}
          alt="Fazer login com o google"
        />
        Google
      </Button>
    </>
  )
}

export default SignInDialog
