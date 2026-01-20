// import Navbar from "./components/Navbar"

// import Hero from "./sections/Hero"
// import About from "./sections/About"
// import Skills from "./sections/Skills"
// import Projects from "./sections/Projects"
// import Contact from "./sections/Contact"

// export default function App() {
//   return (
//     <div className="bg-neutral-950 text-neutral-200 dark:bg-neutral-950 dark:text-neutral-200 bg-white text-neutral-900 transition-colors duration-300">
//       <Navbar />

//       <main>
//         <Hero />
//         <About />
//         <Skills />
//         <Projects />
//         <Contact />
//       </main>
//     </div>
//   )
// }

// import Navbar from "./components/Navbar"

// import Hero from "./sections/Hero"
// import About from "./sections/About"
// import Skills from "./sections/Skills"
// import Projects from "./sections/Projects"
// import Contact from "./sections/Contact"

// export default function App() {
//   return (
//     <div className="min-h-screen transition-colors duration-300
//                     bg-white text-neutral-900
//                     dark:bg-neutral-950 dark:text-neutral-200">
//       <Navbar />

//       <main>
//         <Hero />
//         <About />
//         <Skills />
//         <Projects />
//         <Contact />
//       </main>
//     </div>
//   )
// }


// import Navbar from "./components/Navbar"

// import Hero from "./sections/Hero"
// import About from "./sections/About"
// import Skills from "./sections/Skills"
// import Projects from "./sections/Projects"
// import Contact from "./sections/Contact"
// import Footer from "./sections/Footer";

// export default function App() {
//   return (
//     <div className="min-h-screen transition-colors duration-300
//                     bg-white text-neutral-900
//                     dark:bg-neutral-950 dark:text-neutral-200">
//       <Navbar />

//       <main>
//         <Hero />
//         <About />
//         <Skills />
//         <Projects />
//         <Contact />
//       </main>

//        {/* 👇 ADD THIS */}
//       <Footer />
//     </div>
//   )
// }




// import Navbar from "./components/Navbar";
// import ThemeToggle from "./components/ThemeToggle";
// import Hero from "./sections/Hero";
// import About from "./sections/About";
// import Skills from "./sections/Skills";
// import Projects from "./sections/Projects";
// import Contact from "./sections/Contact";
// import Footer from "./sections/Footer";

// export default function App() {
//   return (
//     <div
//       className="min-h-screen transition-colors duration-500
//                  bg-white text-neutral-900
//                  dark:bg-neutral-950 dark:text-neutral-200"
//     >
//       <Navbar />
//       <main>
//         <Hero />
//         <About />
//         <Skills />
//         <Projects />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }





///================downgrade os form the claude ai   ==========================


import Navbar from "./components/Navbar"
// import Hero from "./sections/Hero"
import Hero3d from "./sections/Hero3d";
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"
// import AutoSections from "./components/AutoSections";
import SectionWrapper from "./components/SectionWrapper";


export default function App() {
  return (
    <div className="min-h-screen transition-colors duration-300
                    bg-white text-gray-900
                    dark:bg-neutral-950 dark:text-neutral-200">
      <Navbar />

      <main>
        {/* Hero does not need line */}
        <SectionWrapper showLine={false}>
          <Hero3d />
        </SectionWrapper>

        {/* About → line appears */}
        <SectionWrapper showLine={true} >
          <About />
        </SectionWrapper>

        {/* Skills → line appears */}
        <SectionWrapper showLine={true} >
          <Skills />
        </SectionWrapper>

        {/* Projects → line appears */}
        <SectionWrapper showLine={true} >
          <Projects />
        </SectionWrapper>

        {/* Contact → line appears */}
        <SectionWrapper showLine={true} >
          <Contact />
        </SectionWrapper>
      </main>

      <Footer />
    </div>
  )
}