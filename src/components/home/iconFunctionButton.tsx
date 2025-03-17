import { WarningIcon } from "@chakra-ui/icons";
import { Button, ResponsiveValue, Text } from "@chakra-ui/react";
import { ForwardedRef } from "react";

interface IconButtonProps {
  icon: React.ReactNode;
  text: string;
  position?: ResponsiveValue<"left" | "right">;
  gap?: ResponsiveValue<number>;
  color?: string;
  callback?: () => void;
  ref?: ForwardedRef<HTMLButtonElement>;
  display?: ResponsiveValue<string>;
}

export function IconButton({
  icon = <WarningIcon></WarningIcon>,
  text = "Undefined",
  position = "left",
  gap,
  callback = () => {},
  ref,
  display,
}: IconButtonProps) {
  return (
    <Button
      ref={ref}
      display={display}
      onClick={callback}
      variant={"btnIconFunction"}
      justifyContent={position}
      gap={gap}
    >
      {icon}
      <Text w={"200px"} textAlign={position} overflow={"hidden"}>
        {text}
      </Text>
    </Button>
  );
}
