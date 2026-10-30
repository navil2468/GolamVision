import React from 'react'

const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1)

// Each row picks the first feature matching `match` (and not `exclude`) from every package.
const rowSpecs = [
  { label: 'DURATION' },
  { label: 'PEOPLE', match: /person|people|model/i, exclude: /additional/i },
  { label: 'EDITS', match: /edit|retouched/i },
  { label: 'LOCATIONS', match: /location/i },
  { label: 'OUTFITS', match: /outfit|look/i },
  { label: 'RAW IMAGES', match: /raw/i, format: () => 'All included' },
  {
    label: 'TURNAROUND',
    match: /turnaround|deliver/i,
    format: (f) => `${(f.match(/(\d+(?:-\d+)?) days?/) ?? [])[1] ?? ''} days`,
  },
  { label: 'EXTRA PERSON', match: /additional/i, format: (f) => (f.match(/\$\d+/) ?? [f])[0] },
]

const buildRows = (packages) =>
  rowSpecs
    .map(({ label, match, exclude, format = capitalize }) => ({
      label,
      cells: packages.map((pkg) => {
        if (label === 'DURATION') return pkg.duration
        const feature = pkg.features.find((f) => match.test(f) && !(exclude && exclude.test(f)))
        return feature ? format(feature) : '—'
      }),
    }))
    .filter((row) => row.cells.some((cell) => cell !== '—'))

function TierTable({ packages }) {
  const rows = buildRows(packages)

  return (
    <div className='overflow-x-auto'>
      <table className='w-full min-w-[620px] border-collapse text-[15px]'>
        <thead>
          <tr>
            <th className='w-[22%] text-left pr-4 pb-5' />
            {packages.map((pkg) => (
              <th key={pkg.name} className='text-left px-4 pb-5 align-bottom font-normal'>
                <div className='text-[12px] tracking-[0.24em] text-muted mb-2'>{pkg.name.toUpperCase()}</div>
                <div className='font-display text-[40px] font-medium text-gold leading-none'>${pkg.price}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className='border-t border-line'>
              <td className='py-[14px] pr-4 text-[11px] tracking-[0.24em] text-muted-3 align-top'>{row.label}</td>
              {row.cells.map((cell, i) => (
                <td key={i} className='py-[14px] px-4 text-ivory-2 align-top leading-[1.5]'>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TierTable
