import { expect, afterEach, beforeAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

beforeAll(() => {
  // IntersectionObserver is required by Framer Motion's whileInView in jsdom.
  class MockIntersectionObserver {
    constructor(callback) {
      this.callback = callback;
    }
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  global.IntersectionObserver = MockIntersectionObserver;
  global.matchMedia =
    global.matchMedia ||
    function () {
      return {
        matches: false,
        addListener() {},
        removeListener() {},
        addEventListener() {},
        removeEventListener() {},
        dispatchEvent() {},
      };
    };
});

afterEach(() => {
  cleanup();
});
