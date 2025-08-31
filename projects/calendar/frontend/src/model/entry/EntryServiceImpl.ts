import type { Temporal } from "@js-temporal/polyfill";
import type { Interval } from "@weeker/shared-common";
import type { EntryService } from "./EntryService.ts";
import type { contract } from "@weeker/shared-api";
import type { ContractRouterClient } from "@orpc/contract";

export class EntryServiceImpl implements EntryService {
  private client: ContractRouterClient<typeof contract>;

  constructor(client: ContractRouterClient<typeof contract>) {
    this.client = client;
  }

  async list(interval: Interval<Temporal.ZonedDateTime>) {
    const response = await this.client.entries.list({
      start: interval.start.toString(),
      end: interval.end.toString(),
    });
    return response.map(entry => ({
      id: entry.id,
      name: entry.name,
      color: entry.color,
      start: entry.start,
      end: entry.end,
    }));
  }
}
