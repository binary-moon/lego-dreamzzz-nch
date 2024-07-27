import { create } from "zustand";

export type GameDifficulty = "easy" | "normal" | "hard";
export type PlayAreaSize = "small" | "medium" | "large";
export type GameRank = 1 | 2 | 3;
export type GameState = "off" | "on" | "inactive";

export interface AppState {
  appState: number;
  setAppState: (state: number) => void;
  gameDifficulty: GameDifficulty;
  setGameDifficulty: (difficulty: GameDifficulty) => void;
  playAreaSize: PlayAreaSize;
  setPlayAreaSize: (size: PlayAreaSize) => void;
  gameRank: GameRank;
  gameState: GameState;
  setGameState: (state: GameState) => void;
}

export const useStore = create<AppState>((set) => ({
  appState: 0,
  setAppState: (state) => set({ appState: state }),
  gameDifficulty: "normal",
  setGameDifficulty: (difficulty) => set({ gameDifficulty: difficulty }),
  playAreaSize: "medium",
  setPlayAreaSize: (size) => set({ playAreaSize: size }),
  gameRank: 1,
  gameState: "off",
  setGameState: (state) => set({ gameState: state }),
}));
