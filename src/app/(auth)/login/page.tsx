'use client'
import { StyledLi, StyledUl, StyledMain, StyledLink } from '@/app/styled/Global.styled'
import React from 'react'

const LoginPage = () => {
  return (
    <StyledMain>
      <StyledUl>
        <StyledLi>
          <StyledLink href={'/login'}>
            Login Page
          </StyledLink>   
        </StyledLi>
      </StyledUl>
    </StyledMain>
  )
}

export default LoginPage
