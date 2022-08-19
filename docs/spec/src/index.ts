import { IntegrationSpecConfig } from '@jupiterone/integration-sdk-core';

import { IntegrationConfig } from '../../../src/config';
import { accountSpec } from './account';
import { hostSpec } from './host';
import { roleSpec } from './role';
import { userSpec } from './user';

export const invocationConfig: IntegrationSpecConfig<IntegrationConfig> = {
  integrationSteps: [...userSpec, ...accountSpec, ...roleSpec, ...hostSpec],
};
