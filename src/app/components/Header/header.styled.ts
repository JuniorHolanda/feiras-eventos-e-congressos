'use client'
import Link from "next/link";
import styled from "styled-components";

export const Swrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 20%;
    padding: ${({theme}) => theme.spacing.sm};
    gap: ${({theme}) => theme.spacing.xs};
    background-color: ${({theme}) => theme.colors.primary};

    @media (max-width: ${({theme}) => theme.breakpoints.desktop}) {
        width: 90%;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile  }) {
        width: 100%;
    }

    img{
        width: 6vw;

        @media (max-width: ${({theme}) => theme.breakpoints.desktop  }) {
            width: 12vw;
        }

        @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
            width: 18vw;
        }

        @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
            width: 50vw;
        }
    }


    h1{
        font-size: ${({theme}) => theme.fontSizes.titleMedium};
        color: ${({theme}) => theme.colors.textLight};
        text-align: center;

        @media (max-width: ${({theme}) => theme.breakpoints.desktop  }) {
            font-size: ${({theme}) => theme.fontSizes.textBig};
        }

        @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
            font-size: ${({theme}) => theme.fontSizes.textBig};
        }
    }

    p{
        font-size: ${({theme}) => theme.fontSizes.text};
        text-align: center;
        width: 50%;
        color: ${({theme}) => theme.colors.primaryLight};

        @media (max-width: ${({theme}) => theme.breakpoints.desktop  }) {
            font-size: ${({theme}) => theme.fontSizes.titleLarge};
            width: 100%;
        }
    }

    `
    export const Slink = styled(Link)`
        font-size: ${({theme}) => theme.fontSizes.text};
        color: ${({theme}) => theme.colors.textLight};
        font-weight: 800;

        @media (max-width: ${({theme}) => theme.breakpoints.desktop  }) {
            font-size: ${({theme}) => theme.fontSizes.textBig};
        }

        @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
            font-size: ${({theme}) => theme.fontSizes.textBig};
        }
    `