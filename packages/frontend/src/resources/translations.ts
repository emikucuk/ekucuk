import { commonResources } from "./translations/commonResources"
import { navResources } from "./translations/navResources"
import { homeResources } from "./translations/homeResources"
import { contactResources } from "./translations/contactResources"

export const resourcesMap = {
  common: { ...commonResources },
  nav: { ...navResources },
  home: { ...homeResources },
  contact: { ...contactResources }
}