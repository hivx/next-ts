'use client'
import { StyledLi, StyledUl, StyledMain, StyledLink } from '@/app/styled/Global.styled'
import React from 'react'

const RegisterPage = () => {
  return (
    <StyledMain>
      <StyledUl>
        <StyledLi>
          <StyledLink href={'/register'}>
            Register Page
          </StyledLink>        
        </StyledLi>
      </StyledUl>
    </StyledMain> 
  )
}

export default RegisterPage
