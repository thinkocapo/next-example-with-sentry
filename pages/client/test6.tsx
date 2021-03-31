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

export default function Test6({ dateString }: { dateString: string }) {
  // const date = parseISO(dateString)
  // return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
    return <>
        <h1>Client Test 5</h1>
      <button
        onClick={() => {
          throw new Error('Client Test 5')
        }}
      >
        Click me to throw an Error
      </button>
    </>
}