import { ChevronDown, ChevronUp } from "lucide-react"

export function ExpandButton({
  expanded,
  setExpanded,
}: {
  expanded: boolean
  setExpanded: (e: boolean) => void
}) {
  return (
    <button
      className="cursor-pointer bg-gray-500 hover:bg-gray-700 text-white rounded-md py-2"
      onClick={() => setExpanded(!expanded)}
    >
      {expanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
    </button>
  )
}
