import IconProps from './icons'

export default function ArrowRoundedRight({ title, titleId, ...props }: IconProps) {
  return (
    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-labelledby={titleId} {...props}>
      {title && <title id={titleId}>{title}</title>}
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  )
}
