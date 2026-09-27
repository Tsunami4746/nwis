function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="border border-nwis-border bg-nwis-surface p-4">
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent text-lg text-nwis-text outline-none placeholder:text-nwis-muted"
      />
    </div>
  )
}

export default SearchBar
