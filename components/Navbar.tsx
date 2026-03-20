import Link from "next/link";
import Image from "next/image";
import GlassSurface from "@/components/GlassSurface";

const Navbar = () => {
    return (
      <header>
        <div className="px-24 pt-7">
          <GlassSurface
            width="100%"
            height="auto"
            borderRadius={999}
            borderWidth={0.05}
            brightness={70}
            opacity={0.65}
            blur={9}
            saturation={1.25}
            distortionScale={-140}
            displace={0.35}
          >
            <nav>
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
