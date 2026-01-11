import type { NavData, NavItem } from "../shared/types";

export const navParser = (navData: NavData) => {
  const nav: NavItem[] = navData.navigation.map((item: NavItem) => {
    return item
      ? {
          ...item,
          children: item.children
            ? item.children.map((subItem) => ({
                ...subItem,
                path:
                  item.path +
                  `${item.title === "Home" ? "#" : "/#"}` +
                  subItem.path,
              }))
            : [],
        }
      : ([] as unknown as NavItem);
  });
  const navDatFormatted: NavData = {
    navigation: nav,
  };
  return navDatFormatted;
};
