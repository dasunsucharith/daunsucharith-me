import HeroSection from '../components/sections/HeroSection'
import AboutSection from '../components/sections/AboutSection'
import PodcastSection from '../components/sections/PodcastSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import ContactSection from '../components/sections/ContactSection'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <PodcastSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </>
  )
}
