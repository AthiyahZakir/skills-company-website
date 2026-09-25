export default function Ticker({ items, bg = 'bg-yellow-400' }) {
  const doubled = [...items, ...items]
  return (
    <div className={`relative ${bg} border-y-4 border-black overflow-hidden py-4`}>
      <div className="flex whitespace-nowrap animate-[marquee_22s_linear_infinite]">
        {[0, 1].map((rep) => (
          <div key={rep} className="flex shrink-0">
            {doubled.map((item, i) => (
              <span key={`${rep}-${i}`} className="mx-6 text-white font-black text-xl md:text-2xl tracking-wide flex items-center gap-6">
                {item}
                <span className="text-black/40 text-2xl">★</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
