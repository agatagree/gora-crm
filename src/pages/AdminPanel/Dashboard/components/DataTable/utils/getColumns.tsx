import { Box, Image } from "@chakra-ui/react";
import { createColumnHelper } from "@tanstack/react-table";
import { MainGalleryTypes } from "types/Types";
import { CircleIcon } from "components/Icons";

export const getColumns = () => {
  const columnHelper = createColumnHelper<MainGalleryTypes>();

  const columns = [
    columnHelper.accessor("img.cover", {
      header: "Obraz",
      cell: (info) => (
        <Box>
          <Image h={16} objectFit="contain" src={info.getValue()} />
        </Box>
      ),
    }),
    columnHelper.accessor("order", {
      header: "L.P.",
    }),
    columnHelper.accessor("title", {
      header: "Tytuł",
    }),
    columnHelper.accessor("code", {
      id: "code",
      header: "Kod",
    }),
    columnHelper.accessor("technique", {
      header: "Technika",
    }),
    columnHelper.accessor("year", {
      header: "Rok",
    }),
    columnHelper.accessor("shape", {
      header: "Kształt",
    }),
    columnHelper.accessor("availability", {
      header: "Dostępność",
    }),
    columnHelper.accessor("dimensions.width", {
      header: "Szerokość",
    }),
    columnHelper.accessor("dimensions.height", {
      header: "Wysokość",
    }),
    columnHelper.accessor("color", {
      header: "Kolor",
      cell: (info) => {
        const colors = info.row.original.color;
        return (
          <Box>
            {colors.map((color, idx) => (
              <CircleIcon key={idx} m={-2} boxSize={6} color={color} />
            ))}
          </Box>
        );
      },
    }),
  ];

  return { columns };
};
