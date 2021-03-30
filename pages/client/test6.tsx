// const Test5 = () => (
//     <>
//       <h1>Client Test 6</h1>
//       <button
//       >
//         Attempting typescript
//       </button>
//     </>
//   )
  
//   export default Test5
  
import { parseISO, format } from 'date-fns'

export default function Test5({ dateString }: { dateString: string }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}