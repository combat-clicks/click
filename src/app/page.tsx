import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Keyboard } from '@/components/keyboard'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoCluster } from '@/components/logo-cluster'
import { LogoTimeline } from '@/components/logo-timeline'
import { Map } from '@/components/map'
import { Navbar } from '@/components/navbar'
import { Screenshot } from '@/components/screenshot'
import { Heading, Subheading } from '@/components/text'
import type { Metadata } from 'next'
import { Logo } from '@/components/logo'
import { GlassBentoItem } from '@/components/glass-bento-item'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-inset ring-black/5" />
      <Container className="relative">
        <Navbar />
        <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-48 md:pt-32 flex items-center justify-between">
          <div>
            <h1 className="font-display text-balance text-6xl/[0.9] font-medium tracking-tight text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
              One Step Closer to Greatness
            </h1>
            <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
              Martial Arts Photography. Building community and powerful memories.
            </p>
            <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
              <Button href="#">Contact Us</Button>
            </div>
          </div>
          
          {/* Placeholder for future animation */}
          <div className="hidden lg:block w-[200px]" />
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          A snapshot of your entire sales pipeline.
        </Heading>
        <Screenshot
          width={1216}
          height={768}
          src="/screenshots/app.png"
          className="mt-16 h-[36rem] sm:h-auto sm:w-[76rem]"
        />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
        <BentoCard
          eyebrow="Insight"
          title="Get perfect clarity"
          description="Radiant uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, social security number, and more."
          graphic={
            <div className="h-80 bg-[url(/screenshots/profile.png)] bg-[size:1000px_560px] bg-[left_-109px_top_-112px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
        />
        <BentoCard
          eyebrow="Analysis"
          title="Undercut your competitors"
          description="With our advanced data mining, you'll know which companies your leads are talking to and exactly how much they're being charged."
          graphic={
            <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
          }
          fade={['bottom']}
          className="lg:col-span-3 lg:rounded-tr-4xl"
        />
        <BentoCard
          eyebrow="Speed"
          title="Built for power users"
          description="It's never been faster to cold email your entire contact list using our streamlined keyboard shortcuts."
          graphic={
            <div className="flex size-full pl-10 pt-10">
              <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
            </div>
          }
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          eyebrow="Source"
          title="Get the furthest reach"
          description="Bypass those inconvenient privacy laws to source leads from the most unexpected places."
          graphic={<LogoCluster />}
          className="lg:col-span-2"
        />
        <BentoCard
          eyebrow="Limitless"
          title="Sell globally"
          description="Radiant helps you sell in locations currently under international embargo."
          graphic={<Map />}
          className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
        />
      </div>
    </Container>
  )
}

function DarkBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark>Outreach</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Responsive Team
        </Heading>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16">
          <BentoCard
            dark
            eyebrow="Reaching us is easy"
            title="Tech Oriented Business"
            description="We've Built tools to help make picture day a breeze."
            graphic={<LinkedAvatars />}
            className="rounded-4xl"
          />
        </div>
      </Container>
    </div>
  )
}

function ImageBentoSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container className="max-w-[90%] mx-auto">
        <Subheading dark>The Elementals</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
          Capturing the essence of martial arts.
        </Heading>

        {/* First Grid - Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-16">
          {/* Keep existing featured layout */}
          <div className="col-span-1 md:col-span-3 grid gap-6">
            <GlassBentoItem
              title="The Elementals - Bend Water"
              image="/bento/9.jpg"
              className="h-[600px] md:h-[800px]"
            />
            <GlassBentoItem
              title="The Elementals - Water Punch"
              image="/bento/10.jpg"
              className="h-[800px]"
            />
          </div>

          <div className="col-span-1 md:col-span-2 grid gap-6">
            <GlassBentoItem
              title="The Elementals - Bend Fire"
              image="/bento/7.jpg"
              className="h-[600px]"
            />
            <GlassBentoItem
              title="The Elementals - Fire Stance"
              image="/bento/8.jpg"
              className="h-[400px]"
            />
            <GlassBentoItem
              title="The Elementals - Earth Stance"
              image="/bento/21.jpg"
              className="h-[600px]"
            />
          </div>
        </div>

        {/* Grid for remaining images */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          {[1,4,6,13,15,16,17,18,19,20,22,23,24,25,26,27,28].map((num) => (
            <GlassBentoItem
              key={num}
              title={`The Elementals ${num}`}
              image={`/bento/${num}.jpg`}
              className="h-[400px]"
            />
          ))}
        </div>
      </Container>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <ImageBentoSection />
        <DarkBentoSection />
      </main>
      <Footer />
    </div>
  )
}

