import Header              from '../components/Header'
import Hero                from '../components/Hero'
import PhilosophySection   from '../components/PhilosophySection'
import CreationsSection    from '../components/CreationsSection'
import PersonalSection     from '../components/PersonalSection'
import ServicesSection     from '../components/ServicesSection'
import ClientWorksSection  from '../components/ClientWorksSection'
import ContactSection      from '../components/ContactSection'
import Footer              from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PhilosophySection />
      <CreationsSection />
      <PersonalSection />
      <ServicesSection />
      <ClientWorksSection />
      <ContactSection />
      <Footer />
    </>
  )
}
