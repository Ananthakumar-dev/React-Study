const data = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Accordian",
    path: "/accordian",
    children: [
      {
        label: "Star Rating",
        path: "/star-rating",
      },
      {
        label: "Random Color",
        path: "/random-color",
      },
    ],
  },
  {
    label: "Admin",
    path: "/admin",
    children: [
      {
        label: "Users",
        path: "/users",
      },
      {
        label: "Rooms",
        path: "/rooms",
        children: [
          {
            label: "Properties",
            path: "/properties",
          },
        ],
      },
    ],
  },
];

export default data;
