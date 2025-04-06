export const dataTableConfig = {
  rows: {
    style: {
      fontSize: "14px", // height of each row
    },
  },
  headCells: {
    style: {
      backgroundColor: "#F8F9FA", // Tailwind: bg-gray-50
      color: "#565E6C", // Tailwind: text-gray-700
      fontWeight: 700,
    },
  },
  // cells: {
  //   style: {
  //     // paddingLeft: "1rem", // Tailwind: px-4
  //     // paddingRight: "1rem",
  //     minWeight: "180px",
  //   },
  // },
  // pagination: {
  //   style: {
  //     backgroundColor: "#f9fafb",
  //     borderTop: "1px solid #e5e7eb", // Tailwind: border-gray-200
  //     padding: "1rem",
  //   },
  // },
};

export const perRows = [6, 12, 18, 24];
export const paginationComponentOption = {
  rowsPerPageText: "",
  noRowsPerPage: true,
};
