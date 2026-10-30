import React from 'react'
import PackageList from './PackageList'
import TierTable from './TierTable'

// Tier-only sections and specialty sections compare side by side; everything else is a menu list
const isTable = (section) =>
  section.packages.every((p) => p.name.startsWith('Tier')) || /Specialty/.test(section.title ?? '')

// Renders every section of a category from src/data/packages.js.
// `mergeAs` folds all sections into one list under that title, keeping each section id as a row anchor.
function Pricing({ category, mergeAs }) {
  const blocks = mergeAs
    ? [{
        title: mergeAs,
        items: category.sections.flatMap((s) => s.packages.map((pkg) => ({ pkg, anchor: s.id }))),
      }]
    : category.sections.map((s) => ({
        title: s.title ?? 'Sessions',
        note: s.note,
        section: s,
        items: s.packages.map((pkg) => ({ pkg })),
      }))

  return (
    <div className='max-w-[1120px] mx-auto px-[clamp(20px,4vw,48px)] pt-[clamp(48px,6vw,88px)] flex flex-col gap-[clamp(64px,7vw,104px)]'>
      {blocks.map((block) => (
        <section key={block.title} className='flex flex-col gap-7'>
          <div className='flex justify-between items-baseline flex-wrap gap-4 border-b border-line-2 pb-[18px]'>
            <h2 className='font-display font-medium text-[clamp(34px,3.6vw,48px)] leading-none'>{block.title}</h2>
            {block.note && <span className='text-[13px] tracking-[0.06em] text-muted'>{block.note}</span>}
          </div>
          {block.section && isTable(block.section)
            ? <TierTable packages={block.section.packages} />
            : <PackageList items={block.items} />}
        </section>
      ))}

      {category.notes.length > 0 && (
        <ul className='flex flex-wrap gap-x-9 gap-y-3 -mt-10'>
          {category.notes.map((note) => (
            <li key={note} className='flex items-center gap-[10px] text-[13px] tracking-[0.14em] text-ivory-4'>
              <span className='w-[5px] h-[5px] bg-gold rotate-45' />
              {note}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Pricing
