import { UseFormRegister } from "react-hook-form";
import { CheckboxGroup, Stack, Checkbox } from "@chakra-ui/react";
import { TagFormLayout } from "pages/AdminPanel/AddItem/components";
import { ColorType, GalleryType } from "types/Types";

type ColorFormProps = {
  isInvalid: boolean;
  colors: ColorType[];
  register: UseFormRegister<GalleryType>;
};

export const ColorForm = ({colors, isInvalid, register }: ColorFormProps) => {

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
              <Checkbox
                key={color.name}
                value={color.name}
                type='checkbox'
                {...register("color", { required: true })}
              >
                {color.name}
              </Checkbox>
            ))}
          </Stack>
        </CheckboxGroup>
      </TagFormLayout>
    );
  }

