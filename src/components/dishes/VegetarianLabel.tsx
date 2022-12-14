import { regularText } from 'Styles'

export default function VegetarianLabel() {
  return (
    <span
      className={
        'bg-green-100 border border-green-500 rounded-full text-primary px-4 py-1 inline-block mb-4' +
        regularText
      }
    >
      Vegetarian
    </span>
  )
}
