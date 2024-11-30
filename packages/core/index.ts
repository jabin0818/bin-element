import { makeInstaller } from "@bin-element/utils";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import components from "./components";
import "@bin-element/theme/index.css";

library.add(fas);
const installer = makeInstaller(components);

// 使用时可以以Vue Plugin使用，即.use()挂载到vx实例
export * from "@bin-element/components";
export default installer;
