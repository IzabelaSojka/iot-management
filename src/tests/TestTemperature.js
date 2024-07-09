import { render, screen } from '@testing-library/react';
import ModuleDetails from './ModuleDetails';
import socketIOClient from 'socket.io-client';

describe('ModuleDetails component', () => {
  it('updates temperature state on WebSocket message', async () => {
    const mockModule = {
      id: '1',
      name: 'Module 1',
      description: 'Description of Module 1',
      available: true,
      targetTemperature: 25.0
    };

    const mockSocket = socketIOClient.connect('http://localhost:3001');

    render(<ModuleDetails module={mockModule} />);

    mockSocket.emit('moduleUpdate', [{ id: '1', temperature: 24.5 }]);

    await screen.findByText('Aktualna temperatura: 24.5°C');
    expect(screen.getByText('Aktualna temperatura: 24.5°C')).toBeInTheDocument();
  });
});


