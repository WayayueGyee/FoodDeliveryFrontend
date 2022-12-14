export default function ErrorText({ text }: { text: string }) {
  return <p className="absolute mt-0.5 text-red-500 text-xs italic">{text}</p>
}
