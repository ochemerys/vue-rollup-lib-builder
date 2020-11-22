import { mount, shallowMount } from '@vue/test-utils';

import AppBanner from '@/lib-components/app-banner.vue';

let wrapper = null;


describe('AppBanner component', () => {

  afterEach(() => {
    wrapper !== null && wrapper.destroy();
  });

  beforeEach(() => {
    wrapper = mount(AppBanner);
  });

  it('should be a AppBanner component', () => {
    expect(wrapper.is(AppBanner)).toBe(true);
  });

  it('should be a div with a banner class', () => {
    expect(wrapper.find(".banner").element).toBeInstanceOf(HTMLElement);
    expect(wrapper.is("div")).toBe(true);
  });

  it("should be a vue instance", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });

  describe('slots', () => {
    beforeEach(() => {
      wrapper = shallowMount(AppBanner, {
        slots: {
          default: '<div class="fake-msg"></div>'
        }
      });
    });

    it('Messages are inserted in a div class="banner" element', () => {
      const list = wrapper.find('div.banner');
      expect(list.findAll(".fake-msg").length).toBe(1);
    });
  });

  describe('props', () => {
    beforeEach(() => {
      wrapper = shallowMount(AppBanner, {
        propsData: {
          position: 'bottom',
          styles: {color: 'red'},
        }
      });
    });
    
    it('Message component has the .message class', () => {
      expect(wrapper.attributes().style).toContain('color: red;');
      expect(wrapper.classes()).toContain('banner');
      expect(wrapper.classes()).toContain('banner__bottom');
    });

  });

});