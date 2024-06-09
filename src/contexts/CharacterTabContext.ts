import { createContext, Dispatch, SetStateAction } from "react";

export enum OverviewTab {
  Build = "build",
  Profile = "profile",
  Review = "review",
};

export const TabContext = createContext<{
  openTab: OverviewTab,
  setOpenTab: Dispatch<SetStateAction<OverviewTab>>,
}>({
  openTab: OverviewTab.Build,
  setOpenTab: () => { },
});