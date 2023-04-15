import { Box, Flex, Heading, Text } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => (
	<Flex
		justifyContent="center"
		alignItems="center"
		height="100vh"
		bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
		bgClip="text"
		marginTop='-150px'
	>
		<Box marginLeft='120px' fontSize="6vw" dangerouslySetInnerHTML={{
			__html: title
		}} />
		<Box >
			<Text>( ̷M̷e̷m̷o̷r̷i̷e̷s̷ ̷o̷f̷ [object Object])
			</Text>
			<Heading><strong><br /> Website Under Development</strong>
			</Heading></Box>
	</Flex>
)

Hero.defaultProps = {
	title: `<h3><s>( ̷M̷e̷m̷o̷r̷i̷e̷s̷ ̷o̷f̷ [object Object])</s></h3><h1><strong> Website Under Development</strong></h1>`,
}
