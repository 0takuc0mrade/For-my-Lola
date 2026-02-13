'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Slider } from '@/components/ui/slider'
import { Badge } from '@/components/ui/badge'

export function LoveLogic() {
  const [goofiness, setGoofiness] = useState([50])
  const [patience, setPatience] = useState([50])

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            The Love Logic Calculator
          </h2>

          <p className="text-primary/70 text-lg">
            A foolproof algorithm that determines our compatibility...
          </p>

          <div className="space-y-8 mt-12">
            {/* Goofiness Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-primary font-semibold">
                  My Goofiness Level
                </label>
                <span className="text-secondary font-bold">{goofiness[0]}%</span>
              </div>
              <Slider
                value={goofiness}
                onValueChange={setGoofiness}
                max={100}
                step={1}
                className="w-full"
              />
            </div>

            {/* Patience Slider */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-primary font-semibold">
                  Your Patience Level
                </label>
                <span className="text-secondary font-bold">{patience[0]}%</span>
              </div>
              <Slider
                value={patience}
                onValueChange={setPatience}
                max={100}
                step={1}
                className="w-full"
              />
            </div>
          </div>

          {/* Result Card */}
          <motion.div
            key={`${goofiness[0]}-${patience[0]}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-12 p-8 bg-gradient-to-r from-secondary to-accent rounded-3xl text-white space-y-4"
          >
            <p className="text-sm uppercase tracking-wide font-semibold opacity-90">
              Compatibility Score
            </p>
            <p className="text-5xl md:text-6xl font-bold">100%</p>
            <p className="text-lg">Perfect Match</p>
            <div className="flex justify-center">
              <Badge className="bg-white text-primary">✓ Bug Free</Badge>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
