import { commonResources } from "./translations/commonResources"
import { navResources } from "./translations/navResources"
import { homeResources } from "./translations/homeResources"

export const resourcesMap = {
  common: { ...commonResources },
  nav: { ...navResources },
  home: { ...homeResources }
}