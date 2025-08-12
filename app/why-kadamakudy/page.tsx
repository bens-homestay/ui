const islands = Array.from({ length: 14 }).map((_, i) => ({ id: i + 1, name: `Island ${i + 1}` }));

export default function WhyKadamakudy() {
  return (
    <div className="flex-1 py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        <h1 className="text-4xl font-heading">Why Choose Kadamakudy Over Alleppey?</h1>
        <p className="mt-2 text-muted-foreground max-w-3xl">Fewer crowds, pristine mangroves, and intimate island life across 14 unique islets.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="border rounded-lg p-4">
            <svg viewBox="0 0 400 300" className="w-full h-auto">
              {islands.map((island, idx) => (
                <circle 
                  key={island.id} 
                  cx={(idx % 4) * 90 + 40} 
                  cy={Math.floor(idx / 4) * 70 + 40} 
                  r="16" 
                  className="fill-primary/70 hover:fill-accent transition-colors" 
                />
              ))}
            </svg>
            <p className="text-xs text-muted-foreground mt-2">Interactive map mock — 14 Kadamakudy islands</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border rounded-lg overflow-hidden">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-3">Aspect</th>
                  <th className="text-left p-3">Kadamakudy</th>
                  <th className="text-left p-3">Alleppey</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-3">Crowds</td>
                  <td className="p-3">Low — intimate</td>
                  <td className="p-3">High — popular</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Mangroves</td>
                  <td className="p-3">Abundant</td>
                  <td className="p-3">Limited</td>
                </tr>
                <tr className="border-t">
                  <td className="p-3">Experiences</td>
                  <td className="p-3">Cruises, kayaking, island tours</td>
                  <td className="p-3">Mostly cruises</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="mt-10 text-2xl font-heading">Blog</h2>
        <div className="mt-4 grid gap-6 sm:grid-cols-2">
          <article className="border rounded-lg p-4">
            <h3 className="font-medium">Seasonal Tips: Monsoon Magic</h3>
            <p className="text-sm text-muted-foreground">Best months, what to pack, and why monsoon is extra special in Kadamakudy.</p>
          </article>
          <article className="border rounded-lg p-4">
            <h3 className="font-medium">Top 7 Photo Spots</h3>
            <p className="text-sm text-muted-foreground">From golden hour bridges to silent lagoons — our favorite frames.</p>
          </article>
        </div>
      </div>
    </div>
  );
}