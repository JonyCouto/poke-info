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
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { useState } from 'react';
import React from 'react';

export default function Header(){
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('lg'));
    const links: Array<ILinks> = [{
        name: "Home",
        link: "/",
        outside: false
    }, 
    {
        name: "Ver todos pokémons",
        link: "/todos",
        outside: false
    },
    {
        name: 'Acessar projeto no GitHub',
        link: "https://github.com/JonyCouto/poke-info",
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
                <div style={{display: matches ? "block": "none"}}>
                    <Button
                        className='navs'
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        variant='contained'
                    >
                        Menu
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {
                            links.map((link, index) => 
                                <MenuItem key={index} onClick={handleClose}>
                                    <Link href={link.link}>
                                        {link.name}
                                    </Link>
                                </MenuItem>)
                        }
                    </Menu>
                </div>
                <div style={{display: matches ? "none": "block"}}>
                    <ListWithLinks links={links}/>
                </div>
            </Grid2>
        </Grid2>
    )
}