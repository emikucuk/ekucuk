import { commonResources } from "./translations/commonResources"
import { navResources } from "./translations/navResources"
import { homeResources } from "./translations/homeResources"
import { contactResources } from "./translations/contactResources"
import { aboutResources } from "./translations/aboutResources"
import { projectResources } from "./translations/projectResources"

export const resourcesMap = {
  common: { ...commonResources },
  nav: { ...navResources },
  home: { ...homeResources },
  contact: { ...contactResources },
  about: { ...aboutResources },
  projects: { ...projectResources }
}