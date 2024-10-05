import { HERO_CONTENT } from "../constants/index.jsx";

const Hero = () => {
    return (
        <section className="max-w-7xl mx-auto border-b-2">
            <div className="flex flex-col items-center my-20">
                <h1 className="text-6xl lg:text-[10rem] p-2 uppercase font-bold">
                    {HERO_CONTENT.title}
                </h1>
                <p className="lg:my-6 text-m mb-4 font-bold tracking-wider">
                    {HERO_CONTENT.subtitle}
                </p>
                <img
                    src={HERO_CONTENT.image}
                    className="w-full h-[65vh] object-cover rounded-2xl p-2"
                    alt="Hero image"
                ></img>
            </div>
        </section>
    );
};

export default Hero;
