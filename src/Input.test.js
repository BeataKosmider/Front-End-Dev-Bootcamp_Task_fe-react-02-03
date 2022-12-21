import React from 'react';
import Input from './Input';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const props = {
  onInputChange: jest.fn(),
};

describe('Input tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Input {...props} />);
  });
  it('Dodano poprawnie komponent inputa', () => {
    expect(wrapper.find('input').exists()).toBe(true);
  });
  it('Dodano parametr funkcji callback odpalanej na każdej zmianie (onInputChange)', () => {
    const newValue = 'tekst';
    const input = wrapper.find('input');

    input.simulate('change', { target: { value: newValue } });

    expect(props.onInputChange).toHaveBeenCalled();
  });
  it('Do rodzica przekazywana jest tylko zawartość inputa, a nie cały event', () => {
    const newValue = 'tekst';
    const input = wrapper.find('input');

    input.simulate('change', { target: { value: newValue } });

    expect(props.onInputChange).toHaveBeenCalledWith(newValue);
  });
  it('Input ma ustawiony type na text', () => {
    const input = wrapper.getElement('input');

    expect(input.props.type).toBe('text');
  });
});
