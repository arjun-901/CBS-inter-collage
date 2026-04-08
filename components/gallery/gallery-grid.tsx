"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const categories = [
  { id: "all", label: "All Collections" },
  { id: "events", label: "Events" },
  { id: "campus", label: "Campus" },
  { id: "students", label: "Students" },
  { id: "achievements", label: "Achievements" },
]

const galleryImages = [
  {
    src: "/cbs-gallary/cam2.jpg",
    alt: "Interactive Classroom Learning",
    category: "students",
    size: "large",
  },
  {
    src: "/cbs-gallary/event1.jpg",
    alt: "Cultural Performance - Gilannyuas",
    category: "events",
    size: "medium",
  },
  {
    src: "/cbs-gallary/Event2.jpg",
    alt: "Traditional Dance Performance",
    category: "events",
    size: "medium",
  },
  {
    src: "/cbs-gallary/cam1.jpg",
    alt: "Temple Visit - Spiritual Journey",
    category: "campus",
    size: "large",
  },
  {
    src: "/cbs-gallary/archiv1.jpg",
    alt: "Student Certificate Awards",
    category: "achievements",
    size: "medium",
  },
  {
    src: "/cbs-gallary/Event3.jpg",
    alt: "Celebration",
    category: "events",
    size: "medium",
  },
  {
    src: "/cbs-gallary/event4.jpg",
    alt: "Building Inauguration Event",
    category: "campus",
    size: "medium",
  },
  {
    src: "/cbs-gallary/event4.jpg",
    alt: "Event Celebration with Guests",
    category: "events",
    size: "medium",
  },
  {
    src: "/cbs-gallary/student3.jpg",
    alt: "Educational Tour Bus",
    category: "students",
    size: "small",
  },
  {
    src: "/cbs-gallary/sport.jpg",
    alt: "Students United",
    category: "events",
    size: "large",
  },
  {
    src: "/cbs-gallary/archi.jpg",
    alt: "Cultural Event",
    category: "events",
    size: "medium",
  },
]

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <section className="py-6 md:py-8 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-6 md:mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-3 md:px-5 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-accent text-foreground shadow-md"
                  : "bg-card border border-border text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={cn(
                "group relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500",
                image.size === "large" && "row-span-2",
                image.size === "medium" && "aspect-[4/3]",
                image.size === "small" && "aspect-square"
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white">
                  <p className="font-medium text-sm md:text-base">{image.alt}</p>
                  <p className="text-xs opacity-80 capitalize">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
