import { SERVICE_NAME } from '../../src/index';

describe('demo-poc-frontend', () => {
  it('should export SERVICE_NAME', () => {
    expect(SERVICE_NAME).toBe('demo-poc-frontend');
  });
});