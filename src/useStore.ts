import { create } from "zustand";

export type GameDifficulty = "easy" | "normal" | "hard";
export type PlayAreaSize = "small" | "medium" | "large";
export type GameScore = 0 | 1 | 2 | 3 | 4 | 5;

export interface AppState {
  gameState: number;
  setGameState: (state: number) => void;
  gameDifficulty: GameDifficulty;
  setGameDifficulty: (difficulty: GameDifficulty) => void;
  playAreaSize: PlayAreaSize;
  setPlayAreaSize: (size: PlayAreaSize) => void;
  gameScore: GameScore;
}

export const useStore = create<AppState>((set) => ({
  gameState: 0,
  setGameState: (state) => set({ gameState: state }),
  gameDifficulty: "normal",
  setGameDifficulty: (difficulty) => set({ gameDifficulty: difficulty }),
  playAreaSize: "medium",
  setPlayAreaSize: (size) => set({ playAreaSize: size }),
  gameScore: 5,
}));
