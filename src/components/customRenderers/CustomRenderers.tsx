import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

type CustomRendererOptions = {
  text?: {
    fontSize?: number | string;
    color?: string;
    fontWeight?: number | string;
    [key: string]: any;
  };
  listWrapper?: {
    [key: string]: any;
  };
  listItemContainer?: {
    [key: string]: any;
  };
  heading?: {
    [key: string]: any;
  };
  paragraph?: {
    [key: string]: any;
  };
};

export const customRenderers = (options?: CustomRendererOptions) => {
  const textProps = {
    fontSize: 22,
    fontWeight: 500,
    color: '#4A4A4A',
    ...options?.text,
  };

  const listWrapperProps = {
    direction: 'column',
    gap: 2,
    ...options?.listWrapper,
  };

  const listItemContainerProps = {
    align: 'start',
    gap: 2,
    ...options?.listItemContainer,
  };

  const headingProps = {
    fontSize: 24,
    fontWeight: 700,
    mb: 4,
    ...options?.heading,
  };

  const paragraphProps = {
    fontSize: 22,
    fontWeight: 500,
    mb: 2,
    ...options?.paragraph,
  };

  const CustomListItem = ({ children }: { children: React.ReactNode }) => (
    <Flex {...listItemContainerProps}>
      <Flex
        w="8px"
        h="8px"
        mt="10px"
        borderRadius="full"
        bg="#4BBF86"
        flexShrink={0}
      />
      <Text textAlign="right" {...textProps}>
        {children}
      </Text>
    </Flex>
  );

  return {
    h3: (props: any) => <Text {...headingProps} {...props} />,
    p: (props: any) => <Text  textAlign="right"  {...paragraphProps} {...props} />,
    ul: (props: any) => <Flex {...listWrapperProps} {...props} />,
    li: ({ children }: any) => <CustomListItem>{children}</CustomListItem>,
  };
};
