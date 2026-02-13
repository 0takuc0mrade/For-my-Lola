'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Shuffle } from 'lucide-react'

const LOVE_NOTES = [
  "You make every day better just by being in it. Even the mundane moments turn magical.",
  "Your laugh is my favorite sound in the world. I could listen to it forever.",
  "The way you look at things with wonder reminds me to slow down and appreciate beauty.",
  "You're my favorite person to do absolutely nothing with.",
  "I love how you light up when you talk about the things you love.",
  "With you, I feel like I can be completely myself. No masks, no pretenses.",
  "Every moment with you feels like exactly where I'm supposed to be.",
  "You make my heart smile in ways I didn't know were possible.",
  "I love the way you think, the way you dream, the way you love.",
  "You're not just my love, you're my best friend.",
  "The future looks so bright because I get to share it with you.",
  "You're the reason I believe in forever.",
  "I fall for you more and more every single day.",
  "Your presence is my greatest comfort and my wildest adventure.",
  "You are my home, no matter where we are.",
]

export function ArchiveSection() {
  const [currentNote, setCurrentNote] = useState(0)
  const [key, setKey] = useState(0)

  const handleShuffle = () => {
    const newIndex = Math.floor(Math.random() * LOVE_NOTES.length)
    setCurrentNote(newIndex)
    setKey((prev) => prev + 1)
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            From the past 10 Months...
          </h2>

          <p className="text-primary/70 text-lg">
            Archive of Us
          </p>

          {/* Note Card */}
          <div className="mt-12 min-h-48 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={key}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="p-8 bg-white rounded-3xl shadow-xl border-2 border-secondary text-center space-y-4"
              >
                <p className="text-primary text-xl leading-relaxed italic">
                  "{LOVE_NOTES[currentNote]}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Shuffle Button */}
          <Button
            onClick={handleShuffle}
            variant="outline"
            size="lg"
            className="rounded-full border-2 border-secondary text-primary hover:bg-secondary/20 bg-transparent"
          >
            <Shuffle className="w-5 h-5 mr-2" />
            Shuffle
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
