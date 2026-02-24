import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Clients from "@/components/Clients";
import Projects from "@/components/Projects";
import Testimonial from "@/components/Testimonial";
import AiStack from "@/components/AiStack";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main>
            <Hero />
            <Marquee />
            <About />
            <Services />
            <Process />
            <Clients />
            <Projects />
            <Testimonial />
            <AiStack />
            <Contact />
        </main>
    );
}
