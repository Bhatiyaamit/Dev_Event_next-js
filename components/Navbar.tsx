import Link from "next/link";
import Image from "next/image";
import GlassSurface from "./GlassSurface";

const Navbar = () => {
    return (
      <header>
        <div className="px-22 py-7">
          <GlassSurface
            width="100%"
            height={80}
            displace={1}
            distortionScale={-180}
            redOffset={0}
            greenOffset={0}
            blueOffset={0}
            brightness={50}
            opacity={0.93}
            mixBlendMode="screen"
          >
            <nav className="w-full">
              <Link href="/" className="logo">
                <Image
                  src="/icons/logo.png"
                  alt="logo"
                  width={24}
                  height={24}
                />

                <p>DevEvent</p>
              </Link>

              <ul>
                <Link href="/">Home</Link>
                <Link href="/">Events</Link>
                <Link href="/">Create Event</Link>
              </ul>
            </nav>
          </GlassSurface>
        </div>
      </header>
    );
}

export default Navbar
