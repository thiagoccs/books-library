import React from "react";
import Logo from '../Logo/Logo';
import OpcoesHeader from '../OpcoesHeader/OpcoesHeader';
import { styled } from 'styled-components';

const HeaderContainer = styled.header`
    min-height: 100px;
    background-color: #FFF;
    display: flex;
    justify-content: space-between;
`

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OpcoesHeader />
    </HeaderContainer>
  )
}