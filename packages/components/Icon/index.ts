import Icon from "./Icon.vue";
import Loading from "./Loading.vue";
import { withInstall } from "@bin-element/utils";

export const BinIcon = withInstall(Icon);
export const BinLoadingIcon = withInstall(Loading);

export * from "./types";
