import { atom } from "recoil";

// Ist das gleiche wie das
// const [modal, setModal] = useState(false);

export const sidebarState = atom({
  key: "sidebarState",
  default: false,
});
