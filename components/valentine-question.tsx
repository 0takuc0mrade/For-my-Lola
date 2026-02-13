'use client'

import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import JSConfetti from 'js-confetti'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

export function ValentineQuestion() {
  const [showConfetti, setShowConfetti] = useState(false)
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 })
  const noButtonRef = useRef<HTMLButtonElement>(null)
  const confettiRef = useRef<JSConfetti | null>(null)

  useEffect(() => {
    confettiRef.current = new JSConfetti()
  }, [])

  const handleYes = async () => {
    setShowConfetti(true)
    if (confettiRef.current) {
      await confettiRef.current.addConfetti({
        emojis: ['❤️', '💕', '💖', '✨', '🎉'],
        confettiRadius: 6,
        confettiNumber: 100,
      })
    }
  }

  const handleNoHover = () => {
    if (noButtonRef.current) {
      const x = Math.random() * 300 - 150
      const y = Math.random() * 300 - 150
      setNoButtonPos({ x, y })
    }
  }

  return (
    <>
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8 max-w-xl"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-primary">
            Will you be my Valentine?
          </h2>

          <p className="text-primary/70 text-lg">
            No pressure, but the algorithm guarantees you'll say yes...
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button
              onClick={handleYes}
              size="lg"
              className="rounded-full text-white font-bold text-lg px-12 py-6 bg-primary hover:bg-primary/90 shadow-lg animate-pulse hover:animate-none"
            >
              YES 💕
            </Button>

            <motion.div
              animate={{
                x: noButtonPos.x,
                y: noButtonPos.y,
              }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              <Button
                ref={noButtonRef}
                onMouseEnter={handleNoHover}
                onTouchStart={handleNoHover}
                variant="ghost"
                size="lg"
                className="rounded-full text-muted-foreground font-semibold px-8 py-6 hover:bg-muted"
              >
                No
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Success Modal */}
      <Dialog open={showConfetti} onOpenChange={setShowConfetti}>
        <DialogContent className="text-center space-y-4 border-2 border-secondary rounded-3xl">
          <DialogHeader>
            <DialogTitle className="text-3xl text-primary">
              I knew you loved me! ❤️
            </DialogTitle>
          </DialogHeader>
          <p className="text-primary/70 text-lg">
            - Bugs
          </p>
          <p className="text-primary/60 italic">
            You just made me the happiest. Can't wait to celebrate with you, Lola.
          </p>
          <Button
            onClick={() => setShowConfetti(false)}
            className="mt-6 rounded-full"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
