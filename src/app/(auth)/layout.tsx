'use client'
import { StyledHeader, StyledLink, StyledMain, StyledUl } from "@/app/styled/Global.styled";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledMain>
        <StyledHeader>
            Auth Page
        </StyledHeader>
        {children}
        <StyledUl>
            <StyledLink href={'/'}>
                Home Page
            </StyledLink>
        </StyledUl>
    </StyledMain>
  );
}