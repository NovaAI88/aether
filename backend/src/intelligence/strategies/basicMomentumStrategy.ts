// Basic momentum-based strategy implementation
import { ProcessedMarketState } from '../../models/ProcessedMarketState';
import { TradeSignal } from '../../models/TradeSignal';

export interface MomentumVariantParams {
  variantId: string;
  window: number;
  threshold: number;
}

export function generateMomentumSignal(state: ProcessedMarketState, params: MomentumVariantParams): TradeSignal | null {
  if (!state) return null;
  let signalType = 'hold';
  const mov = state.movingAvg || state.price;
  if (state.price < mov - params.threshold) signalType = 'buy';
  else if (state.price > mov + params.threshold) signalType = 'sell';
  return {
    source: 'momentum-multivariant',
    symbol: state.symbol,
    signalType,
    confidence: 0.7,
    rationale: `window=${params.window},th=${params.threshold}`,
    timestamp: new Date().toISOString(),
    strategyId: 'momentum',
    variantId: params.variantId,
    baseState: state,
    metadata: { window: params.window, threshold: params.threshold }
  };
}
