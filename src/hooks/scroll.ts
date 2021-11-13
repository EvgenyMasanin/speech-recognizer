import { useEffect, useRef, useState } from 'react'

export const useScroll = (isNeed: boolean, deps: React.DependencyList) => {
  const lastTextBlock = useRef<HTMLDivElement>(null)
  const textContainer = useRef<HTMLDivElement>(null)

  const [lastTextBlockHeight, setLastTextBlockHeight] = useState(0)
  const [lastTextBlockTop, setLastTextBlockTop] = useState(0)

  useEffect(() => {
    if (!lastTextBlock.current || !textContainer.current) return

    if (
      lastTextBlockHeight !== lastTextBlock.current.offsetHeight ||
      lastTextBlockTop !== lastTextBlock.current.offsetTop
    ) {
      setLastTextBlockHeight(lastTextBlock.current.offsetHeight)
      setLastTextBlockTop(lastTextBlock.current.offsetTop)
    }
  }, deps)

  useEffect(() => {
    if (!isNeed) return
    if (!lastTextBlock.current || !textContainer.current) return
    textContainer.current.scrollTo({
      behavior: 'smooth',
      left: 0,
      top: lastTextBlockHeight + lastTextBlockTop,
    })
  }, [lastTextBlockHeight, lastTextBlockTop])

  return {
    lastTextBlock,
    textContainer,
  }
}
