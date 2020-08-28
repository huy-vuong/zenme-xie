import { setupServer } from 'msw/node';
import { handlers } from 'zenme-xie/mocks/handlers';

export const server = setupServer(...handlers);
