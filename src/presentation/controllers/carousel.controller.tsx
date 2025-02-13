'use client'

import { useState } from 'react'

export interface CarouselController {
  currentSlide: number
  totalSlides: number
  goToNextSlide: () => void
  goToPrevSlide: () => void
  goToSlide: (index: number) => void
  dragHandlers: {
    onMouseDown: (e: React.MouseEvent) => void
    onMouseMove: (e: React.MouseEvent) => void
    onMouseUp: (e: React.MouseEvent) => void
    onMouseLeave: (e: React.MouseEvent) => void
    onTouchStart: (e: React.TouchEvent) => void
    onTouchMove: (e: React.TouchEvent) => void
    onTouchEnd: (e: React.TouchEvent) => void
  }
}

export function useCarouselController(totalSlides: number): CarouselController {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [dragStartX, setDragStartX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    setDragStartX(clientX)
    setIsDragging(true)
  }

  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return
    
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const deltaX = clientX - dragStartX
    
    if (Math.abs(deltaX) > 50) { // Threshold de 50px
      if (deltaX > 0) {
        goToPrevSlide()
      } else {
        goToNextSlide()
      }
      setIsDragging(false)
    }
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  return {
    currentSlide,
    totalSlides,
    goToNextSlide,
    goToPrevSlide,
    goToSlide,
    dragHandlers: {
      onMouseDown: handleDragStart,
      onMouseMove: handleDragMove,
      onMouseUp: handleDragEnd,
      onMouseLeave: handleDragEnd,
      onTouchStart: handleDragStart,
      onTouchMove: handleDragMove,
      onTouchEnd: handleDragEnd
    }
  }
}
