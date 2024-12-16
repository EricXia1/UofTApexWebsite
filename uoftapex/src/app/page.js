import Image from "next/image";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function Home() {
  return (
    <>
    <div className="navbar">
    <Navbar>
      <NavbarContent className="hidden sm:flex gap-7" justify="center">
      <NavbarItem>
          <Link color="foreground" href="#">
          <Image
         src="/uoftapexlogo.png"
         alt="UofT Apex Logo"
         width={40}
         height={40}
         justify="start"
         ></Image>
          </Link>
        </NavbarItem>
      <NavbarItem>
          <Link color="foreground" href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link aria-current="page" href="#">
            Events
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link aria-current="page" href="#">
            Discord {/*replace this with an svg or something */}
          </Link>
        </NavbarItem>
        </NavbarContent>
    </Navbar>
    </div>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        </main>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
          put some legal disclaimers here or something
        </footer>
      </div></>
  );
}
