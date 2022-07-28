import { Host } from '@datadog/datadog-api-client/dist/packages/datadog-api-client-v1/models/Host';
import { Role } from '@datadog/datadog-api-client/dist/packages/datadog-api-client-v2/models/Role';
import { User as User_v2 } from '@datadog/datadog-api-client/dist/packages/datadog-api-client-v2/models/User';
import { Organization } from '@datadog/datadog-api-client/dist/packages/datadog-api-client-v1';

export function getMockAccount(): Partial<Organization> {
  return {
    billing: {
      type: 'cc',
    },
    name: 'JupiterOne Inc.',
    publicId: '96bd2d8e-4625-11ec-a18c-da7ad0900002',
    settings: {
      privateWidgetShare: false,
      saml: {
        enabled: false,
      },
      samlAutocreateAccessRole: 'st',
      samlAutocreateUsersDomains: {
        domains: [],
        enabled: false,
      },
      samlCanBeEnabled: false,
      samlIdpInitiatedLogin: {
        enabled: false,
      },
      samlIdpMetadataUploaded: false,
      samlStrictMode: {
        enabled: false,
      },
    },
    subscription: {
      type: 'pro',
    },
  };
}

export function getMockHost(): Partial<Host> {
  return {
    lastReportedTime: 1657376703,
    name: 'Dhaiwats-MacBook-Air.local',
    isMuted: false,
    apps: ['ntp', 'agent'],
    tagsBySource: {
      Datadog: ['host:Dhaiwats-MacBook-Air.local'],
    },
    up: true,
    metrics: {
      load: 0.1438288,
      iowait: 0,
      cpu: 5.1627164,
    },
    sources: ['agent'],
    hostName: 'Dhaiwats-MacBook-Air.local',
    id: 6264691456,
    aliases: ['Dhaiwats-MacBook-Air.local'],
  };
}

export function getMockRole(): Partial<Role> {
  return {
    attributes: {
      createdAt: new Date('2021-11-15T15:06:20.176Z'),
      modifiedAt: new Date('2021-11-15T15:06:20.176Z'),
      name: 'Datadog Standard Role',
      userCount: 0,
    },
    id: '96bd2d90-4625-11ec-a18c-da7ad0900002',
    relationships: {
      permissions: {
        data: [
          {
            id: 'c95412b9-16c7-11ec-85c0-da7ad0900002',
            type: 'permissions',
          },
          {
            id: '26c79920-1703-11ec-85d2-da7ad0900002',
            type: 'permissions',
          },
        ],
      },
    },
    type: 'roles',
  };
}

export function getMockUser(): Partial<User_v2> {
  return {
    attributes: {
      createdAt: new Date('2021-11-16T18:25:08.049Z'),
      disabled: false,
      email: 'viragsf@gmail.com',
      handle: 'viragsf@gmail.com',
      icon: 'https://secure.gravatar.com/avatar/edd1469180957cee25d7753ef4a84a13?s=48&d=retro',
      modifiedAt: new Date('2021-11-16T18:27:43.851Z'),
      serviceAccount: false,
      status: 'Active',
      verified: true,
    },
    id: '86ec37f2-470a-11ec-a204-da7ad0900002',
    relationships: {
      org: {
        data: {
          id: '96bd2d8e-4625-11ec-a18c-da7ad0900002',
          type: 'orgs',
        },
      },
      roles: {
        data: [
          {
            id: '96bd2d8f-4625-11ec-a18c-da7ad0900002',
            type: 'roles',
          },
        ],
      },
    },
    type: 'users',
  };
}
