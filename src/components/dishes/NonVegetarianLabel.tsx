import { regularText } from 'Styles'

export default function NonVegetarianLabel() {
  return (
    <span
      className={
        'bg-amber-100 border border-amber-500 rounded-full text-primary px-4 py-1 inline-block mb-4' +
        regularText
      }
    >
      Non Vegetarian
    </span>
  )
}
