import React from 'react';
import Input from './Input';
import Enzyme, { render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const props = {
    placeholder: 'Wpisz tu coś ładnego!',
    onInputChange: jest.fn()
};

describe('Input tests', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Input {...props} />);
    })
    it('Dodano poprawnie komponent inputa', () => {
      expect(wrapper.find('input').exists()).toBe(true);
    });
    it('Dodano parametr potrzebny do przekazania placeholdera (placeholder)', () => {
      expect(wrapper.find('input').prop('placeholder')).toBe(props.placeholder);
    });
    it('Dodano parametr funkcji callback odpalanej na każdej zmianie (onInputChange)', () => {
      const newValue = 'tekst';
      const input = wrapper.find('input');
      input.simulate('change', { target: { value: newValue } } )
      expect(props.onInputChange.mock.calls.length).toBe(1);
    });
    it('Do rodzica przekazywana jest tylko zawartość inputa, a nie cały event', () => {
      const newValue = 'tekst';
      const input = wrapper.find('input');
      input.simulate('change', { target: { value: newValue } } )
      expect(props.onInputChange.mock.calls[0][0]).toBe(newValue);
    });
  });