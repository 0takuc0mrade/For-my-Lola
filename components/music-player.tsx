'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Music, Pause } from 'lucide-react'

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true)
  const [volume, setVolume] = useState(0.5)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.log("Autoplay prevented:", error)
          setIsPlaying(false)
        })
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying, volume])

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/cherimoya.mp3"
        autoPlay
        loop
      />
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        onClick={() => setIsPlaying(!isPlaying)}
        className="fixed bottom-6 right-6 z-50 bg-rose-500 hover:bg-rose-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all"
        title={isPlaying ? "Pause 'CHERIMOYA'" : "Play 'CHERIMOYA'"}
      >
        {isPlaying ? (
          <Pause className="w-6 h-6" />
        ) : (
          <Music className="w-6 h-6" />
        )}
      </motion.button>
    </>
  )
}
