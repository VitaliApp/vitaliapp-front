import Image from "next/image";

function Footer() {
  return (
    <footer className="footer footer-center min-w-80 mt-auto p-3 bg-[#4D11AF]">
      <div className="container mx-auto">
        <button className="btn rounded-full">
          <Image
            src="/logo-lg.svg"
            alt="logo"
            width="100"
            height="100"
            viewBox="0 0 24 24"
          />
        </button>
        <p className="font-lato-regular text-[#FFFFFF]">
          Copyright © 2024 - All right reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
