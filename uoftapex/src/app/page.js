import Image from "next/image";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function Home() {


  return (
    <>
    <div className="navbar">
    <Navbar style={{backgroundColor: "#007bff"}}>
    <NavbarBrand style={{marginRight: "60px"}}> {/* change this so that the logos are fixed to the left and right of the navbar */}
          <Link style={{ color: "white" }} href="#">
          <Image
         src="/uoftapexlogo.png"
         alt="UofT Apex Logo"
         width={40}
         height={40}
         justify="start"
         ></Image>
          </Link>
        </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-7" justify="center">
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
          <Link style={{ color: "white" }} href="#eventstab">
            Events
          </Link>
        </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" style={{justifyContent: "end", marginLeft: "60px"}}>
        <NavbarItem className="navbar-item">
          <Link style={{ color: "white" }} href="https://discord.gg/e6cZtf29YG" target="_blank">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="40"
              height="40"
              fill="white"
            >
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
            </svg>
          </Link>
        </NavbarItem>
        </NavbarContent>
    </Navbar>
    </div>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div style={{ backgroundColor: "#007bff", color: "white", fontSize: "40px", padding: "20px", textAlign: "center", marginTop: "15%" }} id="greeting-text">
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
              <div style={{color: "white", fontSize: "20px", padding: "20px", textAlign: "center", marginTop: "2%" }}>
              <p>
              We are the student run club for all things Apex Legends at the University of Toronto.</p>
              <p>
              We host weekly in-house games, tournaments, and more!
              </p>
              <p>
              Join our Discord server to stay up to date with all of our events and to connect with other players.
              </p>
              </div>
          </div>
          <div id="eventstab" className="eventstab" style={{marginTop: "20px"}}>
          <h1 style={{ fontSize: "50px", marginBottom: "20px" }}><u>Events</u></h1>
          <div style={{fontSize: "20px", padding: "20px", textAlign: "center", marginTop: "2%" }}>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <iframe src="https://calendar.google.com/calendar/embed?src=uoftapex%40gmail.com&ctz=America%2FToronto" style={{border: "0", width: "800px", height: "600px", frameborder: "0", scrolling: "no"}}></iframe>
          </div>
          </div>
          </div>
          <div style={{ height: "20vh" }}></div> {/* Spacer div so that the footer doesn't cover any text. We can remove/change this if we decide to remove the footer and have the disclaimers just on a div */}
      </>
  );
}
