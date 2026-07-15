export function scrollToId(hash) {
  const id = hash.startsWith('#') ? hash.slice(1) : hash
  if (id === 'top') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
