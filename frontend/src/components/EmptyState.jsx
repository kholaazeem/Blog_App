function EmptyState() {
  return (
    <article className="grid min-h-44 place-items-center content-center gap-2 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-4 py-7 text-center">
      <p className="text-xl font-bold text-slate-800">No posts yet</p>
      <span className="text-sm text-slate-500">Create your first blog post.</span>
    </article>
  )
}

export default EmptyState
