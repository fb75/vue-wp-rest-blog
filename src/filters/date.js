export default (value) => {
  const date = new Date(value)
  return date.toLocaleString(['it-IT'], {month: 'long', day: '2-digit', year: 'numeric', hour12: false, hour: '2-digit', minute: '2-digit' })
}
