import { createORPCClient } from '@orpc/client'
import type { ContractRouterClient } from '@orpc/contract';
import type { JsonifiedClient } from '@orpc/openapi-client';
import { OpenAPILink } from '@orpc/openapi-client/fetch'

import { contract } from '@weeker/shared-api';

export type Client = JsonifiedClient<ContractRouterClient<typeof contract>>;

export const getClient: ({ baseUrl }: { baseUrl: string }) => Client = ({ baseUrl }) => {
    const link = new OpenAPILink(contract, {
        url: baseUrl,
    })
    return createORPCClient(link);
}
