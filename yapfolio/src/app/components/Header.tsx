import Image from "next/image";
import Link from "next/link";
import TypingText from "./TypingText";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="header-right">
          <Image
            src="/images/Vijet.AVIF"
            width={500}
            height={500}
            alt="Vijet Naik" priority
          />
        </div>
        <div className="header-left">
          <TypingText text="Hi, I'm Vijet Naik" />
          <p className="text-paragraph">
            I'm a web developer. I'm passionate about creating beautiful and
            functional websites. I'm always looking for new challenges and
            opportunities to learn new things.
          </p>
          <Link href="/resume/VijetResume.pdf" className="btn btn-primary">
            <p>Resume</p>
          </Link>
        </div>
      </div>
    </header>
  );
}
