import heroImage from "@/assets/hero-bg.webp";
import shahdagLogo from "@/assets/shahdag-logo.webp";

const Maintenance = () => (
  <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
    <img
      src={heroImage}
      alt=""
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-black/60" />

    <div className="relative z-10 max-w-xl text-center text-white">
      <img
        src={shahdagLogo}
        alt="Shahdag"
        className="mx-auto mb-8 h-20 w-auto object-contain brightness-0 invert"
      />
      <h1 className="mb-4 font-heading text-3xl uppercase sm:text-5xl">
        Under Maintenance
      </h1>
      <p className="font-body text-lg text-white/85 sm:text-xl">
        We're preparing the website for the ISMF World Championships Shahdag
        2027. Please check back soon.
      </p>
    </div>
  </div>
);

export default Maintenance;
