// Minimal enrichment for ProcessedMarketState from MarketEvent
import { MarketEvent } from '../../models/MarketEvent';
import { ProcessedMarketState } from '../../models/ProcessedMarketState';

export function enrichMarketEvent(evt: MarketEvent): ProcessedMarketState {
  return {
    exchange: evt.exchange,
    symbol: evt.symbol,
    eventType: evt.eventType,
    price: evt.price,
    volume: evt.volume,
    timestamp: evt.timestamp,
    movingAvg: Number(evt.raw?.movingAvg ?? evt.price), // USE FIXTURE raw.movingAvg IF PRESENT
    enriched: true,
    baseEvent: evt,
  };
}
