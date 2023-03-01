import { forwardRef } from "react";
import { CheckboxGroup, Stack, Checkbox } from "@chakra-ui/react";
import { TagFormLayout } from "pages/AdminPanel/AddItem/components";
import { ColorType } from "types/Types";

type ColorFormProps = {
  isInvalid: boolean;
  colors: ColorType[];
};

export const ColorForm = forwardRef<HTMLInputElement, ColorFormProps>(
  (props, ref) => {
    const { colors, isInvalid } = props;
    return (
      <TagFormLayout
        inputLabel={"Kolory"}
        inputValue={"color"}
        isInvalid={isInvalid}
        addNewTag
      >
        <CheckboxGroup>
          <Stack spacing={[1, 5]} direction={["column", "row"]}>
            {colors.map((color) => (
              <Checkbox key={color.name} value={color.name} ref={ref}>
                {color.name}
              </Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
      </TagFormLayout>
    );
  }
);
