import { fn } from '@storybook/test';
import MyHeader from './Header.vue';
import InfoModal from '../components/InfoModal.vue';
import ErrorModal from '../components/ErrorModal.vue';
import WarningModal from '../components/WarningModal.vue';
import SuccessModal from '../components/SuccessModal.vue';


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'


library.add(fas)


export default {
  title: 'Example/Modal',
  component: InfoModal,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],

 
  parameters: {
   
  },
  args: {
   
  },

  argTypes: {
    type: { control: { type: 'select' }, 
    options: ['All', 'Content', 'TitleAndContent','Title'],
    mapping: {
      Content: 'class="class="modal-header""'
    }
  }
}
};

export const Info = {
  render: () => ({
    components: { InfoModal },
    template: '<InfoModal />',
  }),
};

export const Error = {
  render: () => ({
    components: { ErrorModal },
    template: '<ErrorModal />',
  }),
};

export const Warning = {
  render: () => ({
    components: { WarningModal },
    template: '<WarningModal />',
  }),
};
export const Success = {
  render: () => ({
    components: { SuccessModal },
    template: '<SuccessModal />',
  }),
};
