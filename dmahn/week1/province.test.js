import { beforeEach, describe } from '@jest/globals';
import { Province, sampleProvinceData } from './Province.mjs';

describe('province', () => {
 it('shortfall', function () {
  const asia = new Province(sampleProvinceData());
  expect(asia.shortfall).toBe(5);
 });
});
