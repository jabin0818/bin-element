import { type Component, type ComputedRef, type Ref } from "vue";

export type ButtonType = "default" | "primary" | "dashed" | "text" | "link";
export type ButtonColor = "default" | "success" | "warning" | "danger" | "info";
export type NativeType = "button" | "reset" | "submit";
export type ButtonSize = "large" | "medium" | "small" | "mini";
export type ButtonVariant =
  | "solid"
  | "outlined"
  | "dashed"
  | "filled"
  | "text"
  | "link";
export type IconPosition = "start" | "end";
export type ButtonShape = "default" | "circle" | "round";
export type LoadingType = "default" | "spin" | "dots" | "ball" | "bars" | "infinity";

export interface ButtonProps {
  tag?: string | Component;
  type?: ButtonType;
  nativeType?: NativeType;
  size?: ButtonSize;
  color?: ButtonColor;
  disabled?: boolean;
  icon?: string;
  iconPosition?: IconPosition;
  shape?: ButtonShape;
  variant?: ButtonVariant;
  loading?: boolean;
  loadingType?: LoadingType;
  loadingIcon?: string;
  autofocus?: boolean;
  useThrottle?: boolean;
  throttleDuration?: number;
}

export interface ButtonEmits {
  (e: "click", value: MouseEvent): void;
}

export interface ButtonInstance {
  ref: Ref<HTMLButtonElement | void>;
  disabled: ComputedRef<boolean>;
  size: ComputedRef<string>;
  type: ComputedRef<string>;
}
