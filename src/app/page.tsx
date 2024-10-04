'use client'
import ButtonRedirect from '@/app/components/ButtonRedirect';
import { StyledLi, StyledUl, StyledMain, StyledLink, StyledHeader } from '@/app/styled/Global.styled'

export default function Home() {

  return (
    <StyledMain>
      <StyledHeader>
        Main Page
      </StyledHeader>
      <StyledUl>
        <StyledLi>
          <StyledLink href={'/login'}>Enter Login</StyledLink>
        </StyledLi>
        <StyledLi>
          <StyledLink href={'/register'}>Enter Register</StyledLink>
        </StyledLi>
      </StyledUl>
      <ButtonRedirect redirectTo={'login'} />
      <ButtonRedirect redirectTo={'register'} />
    </StyledMain>
  )
}