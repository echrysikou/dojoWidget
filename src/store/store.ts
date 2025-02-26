import { createStore } from '@stencil/store';
import { IState } from '../interfaces/interfaces';

const { state, onChange } = createStore<IState>({
  language: 'en',
  widgetDetails: {
    uuid: '',
    name: '',
    title: '',
    code: '',
    codeLink: '',
    font: '',
    fontColor: '',
    themeColor: '',
    label: '',
    borderColor: '',
    createdAt: '',
    type: 'BT',
    collaborators: [],
  },
  stripe: {
    paymentElementIntentAmount: 100,
  },
});

// Export state and onChange for use in components
export { state, onChange };
