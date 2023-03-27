export default function AboutLoader() {
  return (
    <div className="relative pt-10 p-6 border border-slate-200 rounded">
      <pre className="absolute top-0 left-0 px-2 py-1 rounded-tl rounded-br bg-slate-100 font-mono text-xs">
        {'path: .next/' + __filename.split('.next')[1]}
      </pre>
      <h1>About page is loading...</h1>
    </div>
  )
}
