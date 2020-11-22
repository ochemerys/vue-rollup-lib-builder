import { shallowMount } from '@vue/test-utils';
import mountComponentWithProps from '../../utils/mount-util';

// @/ points to src folder
// there is no need to add .vue extension
import HelloWorld from '@/lib-components/hello-world.vue'; 

describe('HelloWorld component unit', () => {
  it("should render props.value when passed", () => {
    const value = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { value }
    });
    expect(wrapper.text()).toMatch(value);
  });

  it("should render correct default color", () => {
    const value = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { value }
    });
    expect(wrapper.text()).toMatch(value);
  });

  it('should render the correct property color', () => {
    const wrapper = mountComponentWithProps(HelloWorld, { color: 'red' });
    const styleData = wrapper.style.getPropertyValue('color');

    // console.log(styleData)

    expect(styleData).toEqual('red');
  });

  it('should have the correct value', () => {
    const wrapper = mountComponentWithProps(HelloWorld, { value: 'Vue' });
    const titleData = wrapper.textContent;

    expect(titleData).toEqual('Hello Vue.');
  });
});

