import type { Meta, StoryObj, ArgTypes } from "@storybook/vue3";
import { fn, within, userEvent, expect } from "@storybook/test";
import { BinButton } from "bin-element";
// import "bin-ui/dist/theme/Button.css";

type Story = StoryObj<typeof BinButton> & { argTypes?: ArgTypes };

const meta: Meta<typeof BinButton> = {
  title: "Example/Button",
  component: BinButton,
  // subcomponents: { ButtonGroup: BinButtonGroup },
  tags: ["autodocs"],
  argTypes: {
    tag: {
      control: { type: "select" },
      options: ["button", "a", "div"],
    },
    type: {
      control: { type: "select" },
      options: ["default", "primary", "dashed", "text", "link"],
    },
    color: {
      control: { type: "select" },
      options: ["default", "success", "warning", "danger", "info", ""],
    },
    nativeType: {
      control: { type: "select" },
      options: ["button", "submit", "reset", ""],
    },
    size: {
      control: { type: "select" },
      options: ["large", "medium", "small", "mini", ""],
    },
    disabled: {
      control: "boolean",
    },
    loading: {
      control: "boolean",
    },
    loadingType: {
      control: { type: "select" },
      options: ["default", "spin", "dots", "ball", "bars", "infinity"],
    },
    useThrottle: {
      control: "boolean",
    },
    throttleDuration: {
      control: "number",
    },
    autofocus: {
      control: "boolean",
    },
    icon: {
      control: { type: "text" },
    },
    iconPosition: {
      control: { type: "select" },
      options: ["start", "end", ""],
    },
    shape: {
      control: { type: "select" },
      options: ["default", "circle", "round", ""],
    },
    variant: {
      control: { type: "select" },
      options: ["solid", "outlined", "dashed", "filled", "text", "link", ""],
    },
    loadingIcon: {
      control: { type: "text" },
    },
  },
  args: { onClick: fn() },
};

const container = (val: string) => `
<div style="margin:5px">
  ${val}
</div>
`;

export const Default: Story & { args: { content: string } } = {
  argTypes: {
    content: {
      control: { type: "text" },
    },
  },
  args: {
    type: "primary",
    content: "Button",
  },
  render: args => ({
    components: { BinButton },
    setup() {
      return { args };
    },
    template: container(
      `<bin-button v-bind="args">{{args.content}}</bin-button>`
    ),
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    await step("click button", async () => {
      await userEvent.tripleClick(canvas.getByRole("button"));
    });

    expect(args.onClick).toHaveBeenCalled();
  },
};

export const Circle: Story = {
  args: {
    icon: "search",
  },
  render: args => ({
    components: { BinButton },
    setup() {
      return { args };
    },
    template: container(`
      <er-button circle v-bind="args"/>
    `),
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    await step("click button", async () => {
      await userEvent.click(canvas.getByRole("button"));
    });

    expect(args.onClick).toHaveBeenCalled();
  },
};

Circle.parameters = {};

export const Group: Story & { args: { content1: string; content2: string } } = {
  argTypes: {
    groupType: {
      control: { type: "select" },
      options: ["primary", "success", "warning", "danger", "info", ""],
    },
    groupSize: {
      control: { type: "select" },
      options: ["large", "default", "small", ""],
    },
    groupDisabled: {
      control: "boolean",
    },
    content1: {
      control: { type: "text" },
      defaultValue: "Button1",
    },
    content2: {
      control: { type: "text" },
      defaultValue: "Button2",
    },
  },
  args: {
    round: true,
    content1: "Button1",
    content2: "Button2",
  },
  render: args => ({
    components: { BinButton, BinButtonGroup },
    setup() {
      return { args };
    },
    template: container(`
       <er-button-group :type="args.groupType" :size="args.groupSize" :disabled="args.groupDisabled">
         <er-button v-bind="args">{{args.content1}}</er-button>
         <er-button v-bind="args">{{args.content2}}</er-button>
       </er-button-group>
    `),
  }),
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    await step("click btn1", async () => {
      await userEvent.click(canvas.getByText("Button1"));
    });
    await step("click btn2", async () => {
      await userEvent.click(canvas.getByText("Button2"));
    });
    expect(args.onClick).toHaveBeenCalled();
  },
};

export default meta;
