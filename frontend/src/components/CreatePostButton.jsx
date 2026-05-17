function CreatePostButton({ isCreating, onClick }) {
  return (
    <button
      className="w-full rounded-lg border border-indigo-600 bg-indigo-600 px-4 py-2.5 text-sm font-bold uppercase text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
      type="button"
      onClick={onClick}
      disabled={isCreating}
    >
      {isCreating ? 'Creating...' : 'Create Post'}
    </button>
  )
}

export default CreatePostButton
