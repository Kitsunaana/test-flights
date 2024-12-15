export const Icon = ({ 
  name,
  fontSize = 24
}: { 
  name: string
  fontSize?: number
}) => {
  return (
    <span 
      className="material-symbols-outlined"
      style={{ fontSize }}
    >
      {name}
    </span>
  )
}