'use client'
import { StyledMain } from "@/app/styled/Global.styled";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledMain>
        {children}
    </StyledMain>
  );
}

