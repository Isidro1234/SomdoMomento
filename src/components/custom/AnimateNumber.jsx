import { HStack, Text } from "@chakra-ui/react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect } from "react"

export default function AnimateNumber({ target, currentSlide }) {
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) =>
    Math.floor(latest).toLocaleString()
  )

  useEffect(() => {
    // reset to 0 whenever slide changes
    count.set(0)

    const controls = animate(count, Number(target), { duration: 2 })
    return controls.stop
  }, [currentSlide, target, count])

  return (
    <HStack  p={0} borderRadius={10} gap={1} m={0} mt={-2} alignItems="center">
      <motion.h1 style={{ fontSize: 15, fontWeight: 200, color:"white" }}>
        {rounded}
      </motion.h1>
      <Text color={"white"}  fontSize={10} fontWeight={100}>
        plays
      </Text>
    </HStack>
  )
}
