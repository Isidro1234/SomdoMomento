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

    const controls = animate(count, target, { duration: 2 })
    return controls.stop
  }, [currentSlide, target, count])

  return (
    <HStack gap={1} m={0} mt={-2} alignItems="center">
      <motion.h1 style={{ color: "white", fontSize: 15, fontWeight: 300 }}>
        {rounded}
      </motion.h1>
      <Text color="white" fontSize={10} fontWeight={300}>
        plays
      </Text>
    </HStack>
  )
}
