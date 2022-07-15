import { RelationshipClass, StepSpec } from '@jupiterone/integration-sdk-core';
import { IntegrationConfig } from '../../../../src/config';

export const hostSpec: StepSpec<IntegrationConfig>[] = [
  {
    /**
     * ENDPOINT: https://api.datadoghq.com/api/v2/hosts
     * PATTERN: Fetch Entities
     */
    id: 'fetch-hosts',
    name: 'Fetch Hosts',
    entities: [
      {
        resourceName: 'Host',
        _type: 'datadog_host',
        _class: ['Host'],
      },
    ],
    relationships: [
      {
        _type: 'datadog_account_has_host',
        _class: RelationshipClass.HAS,
        sourceType: 'datadog_account',
        targetType: 'datadog_host',
      },
    ],
    dependsOn: ['fetch-account'],
    implemented: true,
  },
];
