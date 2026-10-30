import React from 'react'
import PackageCard from './PackageCard'
import Gallery from './Gallery'
import DepositNote from './DepositNote'

const headingFont = { fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif' }

// Renders every section of a category from src/data/packages.js.
// `galleries` maps a section id to the photos shown above that section's prices.
function Pricing({ category, galleries = {} }) {
  return (
    <div className='space-y-16'>
      {category.sections.map((section, s) => (
        <section key={section.id ?? section.title ?? s} id={section.id} className='scroll-mt-8'>
          {section.title && (
            <h2 className='text-center text-4xl font-bold mb-8 text-white' style={headingFont}>
              {section.title.toUpperCase()}
            </h2>
          )}
          {galleries[section.id] && (
            <div className='mb-10'>
              <Gallery images={galleries[section.id]} alt={section.title} />
            </div>
          )}
          <div className='max-w-6xl mx-auto flex flex-wrap justify-center gap-6'>
            {section.packages.map((pkg) => (
              <PackageCard key={pkg.name} pkg={pkg} />
            ))}
          </div>
          {section.note && <p className='text-center text-neutral-400 mt-6'>{section.note}</p>}
        </section>
      ))}

      {category.notes.length > 0 && (
        <ul className='flex flex-wrap justify-center gap-x-8 gap-y-2 text-lg text-white font-semibold'>
          {category.notes.map((note) => (
            <li key={note}><span className='text-yellow-500'>✰</span> {note}</li>
          ))}
        </ul>
      )}

      <DepositNote />
    </div>
  )
}

export default Pricing
