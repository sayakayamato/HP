import Header              from '../components/Header'
import Hero                from '../components/Hero'
import PhilosophySection   from '../components/PhilosophySection'
import ServicesSection     from '../components/ServicesSection'
import ClientWorksSection  from '../components/ClientWorksSection'
import WorksSection        from '../components/WorksSection'
import PersonalSection     from '../components/PersonalSection'
import ContactSection      from '../components/ContactSection'
import Footer              from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PhilosophySection />
      <ServicesSection />
      <ClientWorksSection />
      <WorksSection />
      <PersonalSection />
      {/* <ContactSection /> */}
      <Footer />
    </>
  )
}
