import { Host } from '@datadog/datadog-api-client/dist/packages/datadog-api-client-v1/models/Host';
import {
  createIntegrationEntity,
  Entity,
  parseTimePropertyValue,
} from '@jupiterone/integration-sdk-core';

import { Entities } from '../constants';

export function getHostKey(id: string): string {
  return `datadog_host:${id}`;
}

export function createHostEntity(host: Host): Entity | null {
  return createIntegrationEntity({
    entityData: {
      source: host,
      assign: {
        _type: Entities.HOST._type,
        _class: Entities.HOST._class,
        _key: getHostKey(host.id as unknown as string),
        id: `${host.id}`,
        aliases: host.aliases,
        apps: host.apps,
        awsName: host.awsName,
        hostname: host.hostName,
        isMuted: host.isMuted,
        lastReportedTime: parseTimePropertyValue(host.lastReportedTime),
        name: host.name,
        sources: host.sources,
        state: host.up ? 'running' : 'stopped',
      },
    },
  });
}
