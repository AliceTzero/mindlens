import { fn } from '@storybook/test';
import MyButton from './Button.vue';
import PrimaryButton from '../components/Button/PrimaryButton.vue';
import SecondaryButton from '../components/Button/SecondaryButton.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'


library.add(fas)


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/Button',
  component: MyButton,
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select' }, options: ['small', 'medium', 'large'] },
    backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  render: () => ({
    components: { PrimaryButton },
    template: '<PrimaryButton />',
  }),
};

export const Secondary = {
  render: () => ({
    components: { SecondaryButton },
    template: '<SecondaryButton />',
  }),
};


