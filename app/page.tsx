'use client'

import { HeroSection } from '@/components/hero-section'
import { LoveLogic } from '@/components/love-logic'
import { Gallery } from '@/components/gallery'
import { ArchiveSection } from '@/components/archive-section'
import { ValentineQuestion } from '@/components/valentine-question'
import { MusicPlayer } from '@/components/music-player'

export default function Page() {
  return (
    <main className="bg-gradient-to-b from-stone-50 to-stone-100">
      <HeroSection />
      <LoveLogic />
      <Gallery />
      <ArchiveSection />
      <ValentineQuestion />
      <MusicPlayer />
    </main>
  )
}
