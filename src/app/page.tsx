import { Box, Stack, Circle } from '../../styled-system/jsx'

export default function Home() {
  return (
    <Stack direction="row" p="4" rounded="md" shadow="lg" bg="white">
      <Circle size="5rem" overflow="hidden">
        circulo
      </Circle>
      <Box mt="4" fontSize="xl" fontWeight="semibold">
        John Doe
      </Box>
      <Box mt="2" fontSize="sm" color="gray.600">
        john@doe.com
      </Box>
    </Stack>
  )
}
