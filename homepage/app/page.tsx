import Header            from '../components/Header'
import Hero              from '../components/Hero'
import PhilosophySection from '../components/PhilosophySection'
import WorksSection      from '../components/WorksSection'
import PersonalSection   from '../components/PersonalSection'
import SNSSection        from '../components/SNSSection'
import ContactSection    from '../components/ContactSection'
import Footer            from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <PhilosophySection />
      <WorksSection />
      <PersonalSection />
      <SNSSection />
      <ContactSection />
      <Footer />
    </>
  )
}
