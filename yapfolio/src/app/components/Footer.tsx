import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="contact" id="contact">
      <div className="container contact_container">
        <div className="footer_content">
          <div className="footer_1">
            <h2>Get in touch</h2>
            <p>Feel free to contact me</p>
            <Link
              href="mailto:your-email@example.com"
              className="btn btn-primary"
              id="mailid"
            >
              MAIL
            </Link>
            <div className="social_links">
              <a
                href="https://instagram.com/vijeeeet"
                target="_blank"
                rel="noopener noreferrer"
                className="social_icon"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com/vijeeeet"
                target="_blank"
                rel="noopener noreferrer"
                className="social_icon"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="mailto:your-email@example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social_icon"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a
                href="https://github.com/avogadronuggies"
                target="_blank"
                rel="noopener noreferrer"
                className="social_icon"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/vijet-naik-55245b287/"
                target="_blank"
                rel="noopener noreferrer"
                className="social_icon"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="footer_image">
            <Image
              src="/images/footer.jpeg"
              width={200}
              height={200}
              alt="Footer Image"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
