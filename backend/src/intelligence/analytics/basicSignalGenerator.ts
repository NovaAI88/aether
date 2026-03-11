// Deterministic minimal signal generator
import { ProcessedMarketState } from '../../models/ProcessedMarketState';
import { TradeSignal } from '../../models/TradeSignal';

export function basicSignalGenerator(state: ProcessedMarketState): TradeSignal {
  const signalType =
    state.price < (state.movingAvg || state.price)
      ? 'buy'
      : state.price > (state.movingAvg || state.price)
      ? 'sell'
      : 'hold';
  return {
    source: 'basic-signal',
    symbol: state.symbol,
    signalType,
    confidence: 0.7,
    rationale: 'Simple rule: price vs movingAvg',
    timestamp: new Date().toISOString(),
    baseState: state
  };
}
