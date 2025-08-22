'use client'

import { FaWhatsapp } from "react-icons/fa";
import styled from "styled-components";



export const Sbtn = styled(FaWhatsapp)`
    display: flex;
    width: auto;
    height: auto;
    position: fixed;
    bottom: 15px;
    right: 15px;
    font-size: ${({theme}) => theme.fontSizes.textBig};
    color: ${({theme}) => theme.colors.primary};
    padding: 10px;
    cursor: pointer;
    
    &:hover{
        color: #075e54;
    }
`