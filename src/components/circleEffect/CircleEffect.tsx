import { Flex, FlexProps } from '@chakra-ui/react'
import React from 'react'

type CircleEffectProps = {
  w?: string
  h?: string
  top?: string
  left?: string
  opacity?: number
  filter?: string
  disableFilter?: boolean
  transformValue?: string
}

const CircleEffect: React.FC<CircleEffectProps> = ({
  w = "2000px",
  h = "2000px",
  top = "20%",
  left = "0",
  opacity = 0.2,
  filter = "blur(120px)",
  disableFilter = false,
  transformValue = "rotate(28.13deg)",
  ...rest
}) => {
  return (
    <Flex
      position="absolute"
      w={w}
      h={h}
      top={top}
      left={left}
      transform={transformValue}
      bgImage="radial-gradient(circle, rgba(75, 191, 134, 0.8) 0%, rgba(75, 191, 134, 0) 100%)"
      opacity={opacity}
      filter={disableFilter ? undefined : filter}
      borderRadius="full"
      zIndex={0}
      pointerEvents="none"
      {...rest}
    />
  )
}

export default CircleEffect
