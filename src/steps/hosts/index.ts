import {
  createDirectRelationship,
  Entity,
  IntegrationStep,
  IntegrationStepExecutionContext,
  RelationshipClass,
} from '@jupiterone/integration-sdk-core';
import { createAPIClient } from '../../client';
import { IntegrationConfig } from '../../config';
import {
  ACCOUNT_ENTITY_DATA_KEY,
  Entities,
  Relationships,
  Steps,
} from '../constants';
import { createHostEntity } from './converters';

export async function fetchHosts({
  instance,
  jobState,
}: IntegrationStepExecutionContext<IntegrationConfig>) {
  const accountEntity = (await jobState.getData(
    ACCOUNT_ENTITY_DATA_KEY,
  )) as Entity;

  const apiClient = createAPIClient(instance.config);

  await apiClient.iterateHosts(async (host) => {
    const hostEntity = createHostEntity(host);
    if (hostEntity) {
      await jobState.addEntity(hostEntity);

      await jobState.addRelationship(
        createDirectRelationship({
          _class: RelationshipClass.HAS,
          from: accountEntity,
          to: hostEntity,
        }),
      );
    }
  });
}

export const hostSteps: IntegrationStep<IntegrationConfig>[] = [
  {
    id: Steps.HOSTS,
    name: 'Fetch Hosts',
    entities: [Entities.HOST],
    relationships: [Relationships.ACCOUNT_HAS_HOST],
    dependsOn: [Steps.ACCOUNT],
    executionHandler: fetchHosts,
  },
];
