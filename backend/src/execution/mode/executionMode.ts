// Centralized Engine Mode Controller
export enum EngineMode {
  OFF = 'OFF',
  PAPER_TRADING = 'PAPER_TRADING',
  LIVE_TRADING = 'LIVE_TRADING'
}
let mode: EngineMode = EngineMode.PAPER_TRADING;
export function setEngineMode(next: EngineMode | string) {
  if (Object.values(EngineMode).includes(next as EngineMode)) mode = next as EngineMode;
}
export function getEngineMode(): EngineMode {
  return mode;
}
