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
import { LeftBar } from "@/app/components/left-bar";
import { PortableText, PortableTextBlock } from "next-sanity";
import ShareIcon from "@/app/icons/share-button";
import AudioPlayer from "@/app/components/AudioPlayer";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { useRouter } from "next/navigation";
import { TopBar } from "@/app/components/top-bar";
import SoLogo from "@/app/icons/so-logo";
import { BottomBar } from "@/app/components/bottom-bar";
import InstagramEmbed from "./InstaPost";

type ArticleProps = {
  articleData: any;
};

const ArticleStories: FC<ArticleProps> = ({ articleData }) => {
  const [isMobile] = useMediaQuery("(max-width: 600px)");
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
          p={isMobile ? "0" : "100px 70px"}
          pb="0"
          flexDir="column"
        >
          <Box px={isMobile ? 3 : 16}>
            <Heading
              textTransform="uppercase"
              mt={isMobile ? "40px" : undefined}
              mb="20px"
              display="flex"
              fontSize={isMobile ? "18px" : "24px"}
              fontWeight="medium"
            >
              {articleData?.articleType}
              <FeaturedArrow stroke="#87B79D" />
            </Heading>

            <Text
              mb="10px"
              lineHeight={isMobile ? '30px' : "60px"}
              fontSize={isMobile ? "24px" : "54px"}
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
              <Text ml="10px" fontSize={isMobile ? "12px" : undefined}>
                {`${articleData?.author.firstName} ${articleData?.author.lastName}`}
              </Text>
              <Text ml="15px" fontSize={isMobile ? "12px" : '18px'}>
                {articleData?.readTime} mins read
              </Text>
            </Flex>
          </Box>

          <Grid templateColumns="repeat(1, 1fr)" gap={isMobile ? 3 : 3} pb="10px" px={isMobile ? 0 : 1}>
            {articleData?.contentBuilder?.map((post, index) => {
              switch (post?._type) {
                case "richTextSection":
                  return (
                    <GridItem key={`richTextSection-${index}`} p={isMobile ? '0 20px' : "0 200px"} mt="20px" fontFamily={'Palatino Linotype'}>
                      {post?.content?.length && (
                        <PortableText className="max-w-2xl" value={post?.content as PortableTextBlock[]} />
                      )}
                    </GridItem>
                  );
                case "imageGallery":
                  return (
                    <Grid key={`imageGallery-${index}`} templateColumns={`repeat(${post?.imagesPerRow || 1}, 1fr)`} gap={isMobile ? 3 : 3} pb="10px" p={isMobile ? '0 20px' : "0 200px"}>
                      {post?.images?.map((image, imgIndex) => (
                        <GridItem key={`image-${imgIndex}`} mt="20px">
                          <Flex
                            w="100%"
                            h={isMobile ? '215px' : "600px"}
                            mb={4}
                            bgImage={builder.image(image?.image || "").url()}
                            bgSize="cover"
                            bgPosition="center"
                            bgRepeat="no-repeat"
                          />
                          <Text textAlign={image?.alignment} fontSize={isMobile ? '10px' : '18px'} lineHeight={isMobile ? '12px' : '24px'} fontFamily="Palatino Linotype">
                            {image?.caption}
                          </Text>
                        </GridItem>
                      ))}
                    </Grid>
                  );
                case "quoteSection":
                  return (
                    <GridItem key={`quoteSection-${index}`} p={isMobile ? '0 20px' : "0 200px"} mt="20px">
                      <Flex pos={'relative'}>
                        <LeftBar width={isMobile ? 8 : 15} color={post?.leftBorderColour} />
                        <Flex flexDir="column" pl={isMobile ? 3 : 20} py={4} w={'90%'}>
                          <Flex
                            w={isMobile ? "67px" : '191px'}
                            h={isMobile ? '38px': "108px"}
                            mb={4}
                            bgImage={builder.image(post?.logo || "").url()}
                            bgSize="contain"
                            bgPosition="center"
                            bgRepeat="no-repeat"
                          />
                          <Heading pr={4} fontSize={isMobile ? '18px' : "44px"} lineHeight={isMobile ? '24px' : "56px"} color="#666666" fontFamily="Brocha W00 Regular, sans-serif">
                            {post?.quote}
                          </Heading>
                          <Text fontSize={isMobile ? '14px' : "32px"} color={'#666666'} lineHeight="72px">
                            - {post?.author}
                          </Text>
                        </Flex>
                        {post?.showShareIcon && (
                          <Flex alignItems="center">
                            <ShareIcon width={isMobile ? '32px' : '64px'} height={isMobile ? '32px' : '64px'} cursor="pointer" />
                          </Flex>
                        )}
                      </Flex>
                    </GridItem>
                  );
                case "audioSection":
                  return <GridItem key={`quoteSection-${index}`} p={isMobile ? '0 20px' : "0 200px"} mt="20px">
                  <Flex pos={'relative'}>
                    <LeftBar width={isMobile ? 8 : 15} color={post?.leftBorderColour} />
                    <Flex flexDir="column" pl={isMobile ? 3 : 20} py={4} w={'90%'}>
                      <Heading fontSize={isMobile ? '16px' : "40px"} lineHeight="48px" fontFamily="Brocha W00 Regular, sans-serif">
                        {post?.title}
                      </Heading>
                      <AudioPlayer primaryColor={post?.leftBorderColour} key={post?.audioFile?.asset?._ref} audioRef={post?.audioFile?.asset?._ref} />
                  </Flex>
                  </Flex>
                </GridItem>
                case "instagramCard":
                  return <GridItem key={`quoteSection-${index}`} p={isMobile ? '0 20px' : "0 200px"} mt="20px">
                  <Flex pos={'relative'} justifyContent={'space-between'} px={isMobile ? 0 : '100px'}>
                    <TopBar color={post?.borderColour}/>
                    <Flex w={'100%'} py={'50px'} justifyContent={'space-between'}>
                      <Flex flexDir={'column'} alignItems={'center'}justifyContent={'center'}>
                        <SoLogo color="#F5F5F5"/>
                        <Heading mt={'20px'} fontFamily="Brocha W00 Regular, sans-serif" color={'#B2B2B2'}>Follow</Heading>
                        <Heading fontFamily="Brocha W00 Regular, sans-serif" color={'#B2B2B2'}>us on</Heading>
                        <Heading fontFamily="Brocha W00 Regular, sans-serif" textDecoration={'underline'} color={'#87B79D'}>Instagram</Heading>
                      </Flex>
                      <InstagramEmbed embedHtml={post?.linkText}/>
                    </Flex>
                    <BottomBar style={{transform:'rotate(180deg)', bottom: '0'}} color={post?.borderColour}/>
                  </Flex>
                </GridItem>
                case "bannerProfileOverviewSection":
                  return (
                    <GridItem key={`bannerProfileOverviewSection-${index}`} bg="white" pos="relative">
                      <Flex
                        w="100%"
                        h={isMobile ? "300px" : "800px"}
                        mb={4}
                        bgImage={builder.image(post?.image || "").url()}
                        bgSize="cover"
                        bgPosition="center"
                        bgRepeat="no-repeat"
                      />
                      <Flex w="100%" pos="relative" bottom="100px">
                        <Flex w="80%" m="0 auto" bg="white" pos={'relative'}>
                          <LeftBar width={isMobile ? 8 : 15} color="#87B79D" />
                          <Flex w="100%" pb="0" flexDir="column" borderBottom="1px solid #dadada" p={isMobile ? '20px 10px' : 8}>
                            <Heading textTransform="uppercase" ml="15px" mb="20px" display="flex" fontSize={isMobile ? '12px' : "24px"} fontWeight="medium">
                              Profile Overview
                            </Heading>
                            <Flex w="100%" alignItems="flex-start" justifyContent="flex-start">
                              <Text ml="15px" fontSize={isMobile ? '18px' : undefined} noOfLines={isMobile ? 5 : undefined} isTruncated whiteSpace={'pre-wrap'}>{post.profileOverview}</Text>
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