"use client";

import './header.scss';
import ListWithLinks from "@/components/navs/navs";
import { ILinks } from "@/interfaces/links";
import { Grid2 } from "@mui/material"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/imgs/logo.png';

export default function Header(){
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('lg'));
    const links: Array<ILinks> = [{
        name: "Home",
        link: "/",
        outside: false
    }, 
    {
        name: "Ver todos pokémons",
        link: "/",
        outside: false
    },
    {
        name: 'Acessar projeto no GitHub',
        link: "/",
        outside: true
    }];
    return (
        <Grid2
            className="header"
            container
            spacing={2}
            sx={{
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Grid2 size={{ xs: 2, lg: 2 }}>
                <Link href="/" className='logo' >
                    <Image src={logo} alt="Logo Poké Info" />
                </Link>
            </Grid2>
            <Grid2 size={{ xs: 8, lg: 5 }}>
                <h1>Poké Info</h1>
            </Grid2>
            <Grid2 size={{ xs: 12, lg: 5 }} className={matches ? "containerLinksSmall" : "containerLinksBigger"}>
                <ListWithLinks links={links}/>
            </Grid2>
        </Grid2>
    )
}