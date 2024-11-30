<script setup lang="ts">
import { ref, computed } from "vue";
import type { ButtonProps, ButtonEmits, ButtonInstance } from "./types";
import { throttle } from "lodash-es";
// import BinIcon from "../Icon/Icon.vue"
import { BinIcon, BinLoadingIcon } from "bin-element";

defineOptions({
    name: "BinButton",
});
const props = withDefaults(defineProps<ButtonProps>(), {
    tag: "button",
    type: "default",
    nativeType: "button",
    size: "medium",
    color: "default",
    disabled: false,
    icon: undefined,
    iconPosition: undefined,
    shape: "default",
    variant: "solid",
    loading: false,
    loadingType: "default",
    autoFocus: false,
    useThrottle: true,
    throttleDuration: 500,
});
const emits = defineEmits<ButtonEmits>();

const slots = defineSlots()
const _ref = ref<HTMLButtonElement>();

const size = computed(() => props.size ?? "");
const type = computed(() => props.type ?? "");
const disabled = computed(() => props.disabled || false);
const shape = computed(() => props.shape);


// const iconStyle = computed(() => ({
//   marginRight: slots.default ? "6px" : "0px",
// }));

const handleBtnClick = (e: MouseEvent) => {
  emits("click", e);
};
const handlBtneCLickThrottle = throttle(handleBtnClick, props.throttleDuration);

defineExpose<ButtonInstance>({
  ref: _ref,
  disabled,
  size,
  type,
});

</script>

<template>
    <component
      :is="tag"
      ref="_ref"
      class="bin-button"
      :class="{
        [`bin-button--${type}`]: type,
        [`bin-button--${size}`]: size,
        [`bin-button--${shape}`]: shape,
        [`bin-button--${color}`]: color,
        [`bin-button--${variant}`]: variant,
        'bin-button--icon-end': iconPosition === 'end',
        'is-disabled': disabled,
        'is-loading': loading,
      }"
      :disabled="disabled || loading ? true : void 0"
      :type="tag === 'button' ? nativeType : void 0"
      :autofocus="autofocus"
      @click="(e: MouseEvent) =>useThrottle ? handlBtneCLickThrottle(e) : handleBtnClick(e)">
      <template v-if="loading">
        <slot name="loading">
          <bin-loading-icon
            :type="loadingType"
            size="14px"
          />
        </slot>
      </template>
      <bin-icon
        :icon="icon"
        size="1x"
        v-if="icon && !loading"
      />
      <slot></slot>
    </component>
  </template>

<style scoped>
@import "./style.css";
</style>