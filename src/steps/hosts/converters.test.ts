import { getMockHost } from '../../../test/mocks';
import { createHostEntity } from './converters';

describe('#createHostEntity', () => {
  test('should convert to entity', () => {
    expect(createHostEntity(getMockHost())).toMatchSnapshot();
  });
});
