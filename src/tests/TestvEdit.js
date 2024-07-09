import { validateModuleForm } from './utils/validation';

describe('Module form validation', () => {
  it('returns no errors for valid data', () => {
    const formData = {
      name: 'Module 1',
      description: 'Description of Module 1',
      targetTemperature: 25.0
    };

    const errors = validateModuleForm(formData);

    expect(errors).toEqual({});
  });

  it('returns errors for invalid data', () => {
    const formData = {
      name: '',
      description: '',
      targetTemperature: -5.0
    };

    const errors = validateModuleForm(formData);

    expect(errors.name).toBeTruthy();
    expect(errors.description).toBeTruthy();
    expect(errors.targetTemperature).toBeTruthy();
  });
});