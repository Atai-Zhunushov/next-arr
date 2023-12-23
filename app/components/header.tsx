"use client"
import Link from "next/link";
import style from './header.module.css'
import {usePathname, useRouter} from "next/navigation";
import {AppBar, Toolbar} from "@mui/material";




const Header = () => {

    const pathname = usePathname();
    if (!pathname) {
        return <div>Loading...</div>;
    }

    console.log(pathname)
    return (
        <AppBar className={`${style.header} mb-5`} position='static'>
            <Toolbar>
                <Link className={` m-0 mx-2 ${pathname === '/' ? 'text-green-300' : 'text-white'}`} href='/'>Home</Link>
                <Link className={`${pathname === '/about' ? 'text-green-300' : 'text-white'}`} href='/about'>About</Link>
                <Link className={` ${pathname.startsWith('/users') ? 'text-green-300' : 'text-white'}`} href='/users'>Users</Link>
                <Link className={` ${pathname.startsWith('/pokemons') ? 'text-green-300' : 'text-white'}`} href='/pokemons'>Pokemons</Link>
            </Toolbar>


        </AppBar>
    );
};

export default Header;