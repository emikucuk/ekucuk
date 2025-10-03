import { resourcesMap } from "../resources/translations";
import { VscHome } from "react-icons/vsc";
import { VscPerson } from "react-icons/vsc";
import { VscFolder } from "react-icons/vsc";
import { VscMail } from "react-icons/vsc";

export const menuItems = [
    { path: '/', label: resourcesMap.nav.home, icon: <VscHome size={24} /> },
    { path: '/about', label: resourcesMap.nav.about, icon: <VscPerson size={24} /> },
    { path: '/projects', label: resourcesMap.nav.projects, icon: <VscFolder size={24} /> },
    { path: '/contact', label: resourcesMap.nav.contact, icon: <VscMail size={24} /> }
];