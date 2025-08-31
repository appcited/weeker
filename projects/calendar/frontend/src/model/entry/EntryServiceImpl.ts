import type { Temporal } from "@js-temporal/polyfill";
import type { Client } from "@weeker/shared-api-client";
import type { Interval } from "@weeker/shared-common";
import type { EntryService } from "./EntryService.ts";

export class EntryServiceImpl implements EntryService {
  private client: Client;

  constructor(client: Client) {
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
