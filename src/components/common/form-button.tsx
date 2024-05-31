import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";

interface Props {
  children: React.ReactNode;
}

export default function FormButton({ children }: Props) {
  const { pending } = useFormStatus();

  return (
    <Button isLoading={pending} type="submit">
      {children}
    </Button>
  );
}
