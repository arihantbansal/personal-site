import { Box, Text, Heading, Divider } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { CustomLink } from "../components/CustomLink";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Arihant</title>
				<meta property="og:title" content="Arihant" key="title" />
				<meta name="description" content="Arihant's personal site" />
				<meta
					name="keywords"
					content="Arihant, Arihant Bansal, ariban900, arihantbansal, portfolio, site, personal site, _arihantbansal, arihantbansal.sol, arihantbansal.eth"
				/>
				<meta property="og:image" content="%PUBLIC_URL%/image.png" />
				<meta property="og:title" content="Arihant's personal site" />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://arihantbansal.xyz/" />
				<meta property="og:description" content="Arihant's personal site" />
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content="Arihant" />
				<meta name="twitter:description" content="Arihant's personal site" />
				<meta name="twitter:url" content="https://arihantbansal.xyz/" />
				<meta property="twitter:image" content="%PUBLIC_URL%/image.png" />
			</Head>
			<Box paddingY="12" bg="black" minH="100vh" className="outer-box">
				<Box paddingBottom="5">
					<Heading>gm!</Heading>
					<br />
					<Text>
						i&apos;m{" "}
						<Text as="span" color="blue.300">
							Arihant
						</Text>{" "}
						- a software engineer based in India, building confidential computing infrastructure. i am passionate
						about working on problems related to privacy and distributed systems.
					</Text>
					<br />
					<Text>
						i work @ <CustomLink href="https://arcium.com/">Arcium</CustomLink>, building the next-gen supercomputer for a hyperencrypted internet. graduated from{" "}
						<CustomLink href="https://www.bits-pilani.ac.in/goa">bits pilani</CustomLink>{" "}
						with a bachelors in engineering, majoring in electrical and electronics.
					</Text>
					<br />
					<Text>
						find me on <CustomLink href="https://x.com/arihantbansal">x (fka twitter)</CustomLink>{" "}
						or <CustomLink href="https://github.com/arihantbansal">github</CustomLink>. (or{" "}
						<CustomLink href="https://linkedin.com/in/arihantbansal">linkedin</CustomLink> if
						you&apos;re into that.)
					</Text>
					<br />
				</Box>
				<Divider />
				{/* <Box paddingTop="5" paddingBottom="5">
					<Heading>buidls</Heading>
					<br />
					<Box paddingY={"2"}>
						<Text>
							<CustomLink href="https://github.com/niftyclick">NiftyClick</CustomLink> - capture
							your memories as nfts on solana. easy as click, edit, mint. won a grant by solana
							foundation.
						</Text>
					</Box>
					<Box paddingY={"2"}>
						<Text>
							<CustomLink href="https://github.com/deaudit/deaudit">DeAudit</CustomLink> - an
							onchain decentralized smart contract audit marketplace. get paid to find
							vulnerabilities in smart contracts. won prizes @ polygon buidlit &apos;22 and filecoin
							microgrant.
						</Text>
					</Box>
					<Box paddingY={"2"}>
						<Text>
							<CustomLink href="https://gmi-name-service.vercel.app/">gmi name service</CustomLink>{" "}
							- get your own .gmi tld on polygon chain.
						</Text>
					</Box>
					<Box paddingY={"2"}>
						<Text>
							<CustomLink href="https://darth-fandom.vercel.app/">darth fandom</CustomLink> -
							onchain board to share your fav star wars gifs.
						</Text>
					</Box>
				</Box> */}
				<Divider />
			</Box>
		</>
	);
};

export default Home;
