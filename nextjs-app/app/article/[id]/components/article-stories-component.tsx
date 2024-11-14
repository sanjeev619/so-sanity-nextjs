"use client";
import {
  Avatar,
  Box,
  Button,
  ChakraProvider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { FC } from "react";
import FeaturedArrow from "@/app/icons/featured_arrow";
import { LeftBar } from "@/common components/left-bar";
import { PortableText, PortableTextBlock } from "next-sanity";
import ShareIcon from "@/app/icons/share-button";
import AudioPlayer from "@/app/components/AudioPlayer";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { useRouter } from "next/navigation";

type ArticleProps = {
  articleData: any;
};

const ArticleStories: FC<ArticleProps> = ({ articleData }) => {
  const [isMobile] = useMediaQuery("(max-width: 80em)");
  const builder = imageUrlBuilder(client);
  const router = useRouter();
  // Prefetch the target route for better performance
  React.useEffect(() => {
    router.prefetch(`/story/${articleData?.articleType}`);
  }, [articleData?.articleType, router]);

  return (
    <>
      <Flex id="FEATURED_STORIES" w="100%" h="auto" flexDir="column">
        <Flex
          w="100%"
          p={isMobile ? "0 20px" : "100px 30px"}
          pb="0"
          flexDir="column"
        >
          <Box px={16}>
            <Heading
              textTransform="uppercase"
              ml={isMobile ? "15px" : undefined}
              mt={isMobile ? "40px" : undefined}
              mb="20px"
              display="flex"
              fontSize="24px"
              fontWeight="medium"
            >
              {articleData?.articleType}
              <FeaturedArrow stroke="#87B79D" />
            </Heading>

            <Text
              ml={isMobile ? "15px" : undefined}
              mb="10px"
              lineHeight="60px"
              fontSize="54px"
              fontFamily="Palatino Linotype"
            >
              {articleData?.excerpt}
            </Text>

            <Flex alignItems="center" mb="20px">
              <Avatar
                name={`${articleData?.author.firstName} ${articleData?.author.lastName}`}
                size="sm"
                src={builder.image(articleData?.author.picture).url()}
              />
              <Text ml="10px">
                {`${articleData?.author.firstName} ${articleData?.author.lastName}`}
              </Text>
              <Text ml="15px" fontSize="18px">
                {articleData?.readTime} mins read
              </Text>
            </Flex>
          </Box>

          <Grid templateColumns="repeat(1, 1fr)" gap={isMobile ? 3 : 3} pb="10px" px={isMobile ? 0 : 1}>
            {articleData?.contentBuilder?.map((post, index) => {
              switch (post?._type) {
                case "richTextSection":
                  return (
                    <GridItem key={`richTextSection-${index}`} p="0 200px" mt="20px">
                      {post?.content?.length && (
                        <PortableText className="max-w-2xl" value={post?.content as PortableTextBlock[]} />
                      )}
                    </GridItem>
                  );
                case "imageGallery":
                  return (
                    <Grid key={`imageGallery-${index}`} templateColumns={`repeat(${post?.imagesPerRow || 1}, 1fr)`} gap={isMobile ? 3 : 3} pb="10px"  p="0 200px">
                      {post?.images?.map((image, imgIndex) => (
                        <GridItem key={`image-${imgIndex}`} mt="20px">
                          <Flex
                            w="100%"
                            h="600px"
                            mb={4}
                            bgImage={builder.image(image?.image || "").url()}
                            bgSize="cover"
                            bgPosition="center"
                            bgRepeat="no-repeat"
                          />
                          <Text textAlign={image?.alignment} fontFamily="Palatino Linotype">
                            {image?.caption}
                          </Text>
                        </GridItem>
                      ))}
                    </Grid>
                  );
                case "quoteSection":
                  return (
                    <GridItem key={`quoteSection-${index}`} p="0 200px" mt="20px">
                      <Flex>
                        <LeftBar width={isMobile ? 8 : 15} color={post?.leftBorderColour} />
                        <Flex flexDir="column" pl={20} py={4}>
                          <Flex
                            w="167px"
                            h="96px"
                            mb={4}
                            bgImage={builder.image(post?.logo || "").url()}
                            bgSize="contain"
                            bgPosition="center"
                            bgRepeat="no-repeat"
                          />
                          <Heading fontSize="44px" lineHeight="56px" color="#666666" fontFamily="Brocha W00 Regular, sans-serif">
                            {post?.quote}
                          </Heading>
                          <Text fontSize="32px" color={'#666666'} lineHeight="72px">
                            - {post?.author}
                          </Text>
                        </Flex>
                        {post?.showShareIcon && (
                          <Flex alignItems="center">
                            <ShareIcon cursor="pointer" />
                          </Flex>
                        )}
                      </Flex>
                    </GridItem>
                  );
                case "audioSection":
                  console.log("Audio section ramvinay", post?.audioFile?.asset?._ref);
                  return <GridItem key={`quoteSection-${index}`} p="0 200px" mt="20px">
                  <Flex>
                    <LeftBar width={isMobile ? 8 : 15} color={post?.leftBorderColour} />
                    <Flex flexDir="column" pl={20} py={4}>
                      <Heading fontSize="40px" lineHeight="48px" fontFamily="Brocha W00 Regular, sans-serif">
                        {post?.title}
                      </Heading>
                      <AudioPlayer key={post?.audioFile?.asset?._ref} audioRef={post?.audioFile?.asset?._ref} />
                  </Flex>
                  </Flex>
                </GridItem>
                case "bannerProfileOverviewSection":
                  return (
                    <GridItem key={`bannerProfileOverviewSection-${index}`} bg="white" pos="relative">
                      <Flex
                        w="100%"
                        h="800px"
                        mb={4}
                        bgImage={builder.image(post?.image || "").url()}
                        bgSize="cover"
                        bgPosition="center"
                        bgRepeat="no-repeat"
                      />
                      <Flex w="100%" pos="relative" bottom="100px">
                        <Flex w="80%" m="0 auto" maxH="570px" bg="white">
                          <LeftBar width={isMobile ? 8 : 15} color="#87B79D" />
                          <Flex w="100%" pb="0" flexDir="column" borderBottom="1px solid #dadada" p={8}>
                            <Heading textTransform="uppercase" ml="15px" mb="20px" display="flex" fontSize="24px" fontWeight="medium">
                              Profile Overview
                            </Heading>
                            <Flex w="100%" alignItems="flex-start" justifyContent="flex-start">
                              <Text ml="15px">{post.profileOverview}</Text>
                            </Flex>
                          </Flex>
                        </Flex>
                      </Flex>
                    </GridItem>
                  );
              }
            })}
          </Grid>
        </Flex>
      </Flex>
    </>
  );
};

export default React.memo(ArticleStories); 