import {
  Button,
  Flex,
  IconProps,
  ResponsiveValue,
  Text,
} from "@chakra-ui/react";
import { cloneElement, ReactElement } from "react";

interface IconButtonProps {
  icon: ReactElement;
  text: string;
  iconPosition?: "left" | "right";
  iconProps?: IconProps;
  hPadding?: ResponsiveValue<number | string>;
  vPadding?: ResponsiveValue<number | string>;
  width?: ResponsiveValue<number | string>;
  iconSize?: ResponsiveValue<number | string>;
  fontSize?: ResponsiveValue<number | string>;
  height?: ResponsiveValue<number | string>;
  callback?: () => void;
}

export function IconButtonLogin({
  icon,
  text,
  iconPosition = "left",
  iconProps,
  hPadding = 0,
  vPadding = 0,
  width = "100%",
  iconSize = 7,
  fontSize = 5,
  height = 14,
  callback = () => {},
}: IconButtonProps) {
  const iconWithProps = cloneElement(icon, {
    position: "absolute",
    [iconPosition === "left" ? "left" : "right"]: hPadding,
    top: "50%",
    transform: "translateY(-50%)",
    width: iconSize,
    height: iconSize,
    ...iconProps,
  });

  return (
    <Button
      position="relative"
      paddingX={hPadding}
      paddingY={vPadding}
      w={width}
      height={height}
      onClick={callback}
    >
      <Flex align="center" gap={2} overflow={"hidden"}>
        {iconWithProps}
        <Text fontSize={fontSize} w={"calc(width/2)"}>
          Continue with {text}
        </Text>
      </Flex>
    </Button>
  );
}
