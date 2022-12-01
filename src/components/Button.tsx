import { HTMLInputTypeAttribute } from 'react'

type ButtonClass = 'btn-primary' | ''
type ButtonProps = { type?: HTMLInputTypeAttribute; class?: string }

// function Button({ type, class }: ButtonProps) {
//   return (
//     <button
//       type="button"
//       className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//     >
//       Change
//     </button>
//   )
// }

/* <button
type="submit"
className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
>
Save
</button> */
