import { render, screen } from '@testing-library/react';
import ModulesList from './ModulesList';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

describe('ModulesList component', () => {
  it('renders modules correctly', async () => {
    const mockModules = [
      { id: '1', name: 'Module 1', available: true, targetTemperature: 15.0 },
      { id: '2', name: 'Module 2', available: false, targetTemperature: 20.0 }
    ];

    const mock = new MockAdapter(axios);
    mock.onGet('http://localhost:3001/modules').reply(200, mockModules);

    render(<ModulesList />);

    await screen.findByText('Module 1');
    await screen.findByText('Module 2');

    expect(screen.getByText('Module 1')).toBeInTheDocument();
    expect(screen.getByText('Module 2')).toBeInTheDocument();
  });
});