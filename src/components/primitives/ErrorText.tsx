export default function ErrorText({ isError, text }: { isError: boolean; text: string }) {
  if (!isError) {
    return null
  }

  return <p className="absolute mt-0.5 text-red-500 text-xs italic">{text}</p>
}
