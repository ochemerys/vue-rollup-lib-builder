import { mount } from '@vue/test-utils';

// @ points to src folder
// no need to add .vue extension
import HelloWorld from '@/lib-components/hello-world.vue'; 

describe('HelloWorld component with props snapshot', () => {
  // create snapshot to match requirements
  it('should mount HelloWorld component with params', () => {
    // create component wrapper and pass props
    const wrapper = mount(HelloWorld, {
      propsData: {
        value: 'Tester'
      }
    });
    // create component snapshot
    expect(wrapper.html()).toMatchSnapshot();
  });
});

