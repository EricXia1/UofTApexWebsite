import Image from "next/image";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function Home() {
  return (
    <>
    <div className="navbar">
    <Navbar style={{backgroundColor: "#007bff"}}>
      <NavbarContent className="hidden sm:flex gap-7" justify="center">
      <NavbarItem>
          <Link style={{ color: "white" }} href="#">
          <Image
         src="/uoftapexlogo.png"
         alt="UofT Apex Logo"
         width={40}
         height={40}
         justify="start"
         ></Image>
          </Link>
        </NavbarItem>
      <NavbarItem className="navbar-item">
          <Link style={{ color: "white" }} href="#">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem className="navbar-item">
          <Link style={{ color: "white" }} href="#abouttab">
            About
          </Link>
        </NavbarItem>
        <NavbarItem className="navbar-item">
          <Link style={{ color: "white" }} href="#">
            Events
          </Link>
        </NavbarItem>
        <NavbarItem className="navbar-item">
          <Link style={{ color: "white" }} href="#">
            Discord {/*replace this with an svg or something */}
          </Link>
        </NavbarItem>
        </NavbarContent>
    </Navbar>
    </div>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div style={{ backgroundColor: "#007bff", color: "white", fontSize: "40px", padding: "20px", textAlign: "center", marginTop: "15%" }}>
            Welcome to UofT Apex Legends.
          </div>
        </main>
        <footer className="footer">
        Apex Legends is a registered trademark of Electronic Arts. Trademarks are the property of their respective owners. Game materials copyright Electronic Arts. Electronic Arts has not endorsed and is not responsible for this site or its content.
        </footer>
      </div>
      <div id="abouttab" className="abouttab">
            <h1 style={{ fontSize: "50px", marginBottom: "20px" }}>
              <u>
              About Us
              </u>
              </h1>
              <div style={{color: "white", fontSize: "30px", padding: "20px", textAlign: "center", marginTop: "2%" }}>
              <p>
              We are the student run club for all things Apex Legends at the University of Toronto.</p>
              <p>
              We host events, tournaments, and more for all students who love the game.
              </p>
              </div>
          </div>
          <div style={{ height: "20px" }}></div> {/* Spacer div so that the footer doesn't cover any text. We can remove/change this if we decide to remove the footer and have the disclaimers just on a div */}
      </>
  );
}
