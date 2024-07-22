import { create } from "zustand";

export type GameDifficulty = "easy" | "normal" | "hard";
export type PlayAreaSize = "small" | "medium" | "large";

export interface AppState {
  gameState: number;
  setGameState: (state: number) => void;
  gameDifficulty: GameDifficulty;
  setGameDifficulty: (difficulty: GameDifficulty) => void;
  playAreaSize: PlayAreaSize;
  setPlayAreaSize: (size: PlayAreaSize) => void;
}

export const useStore = create<AppState>((set) => ({
  gameState: 3,
  setGameState: (state) => set({ gameState: state }),
  gameDifficulty: "normal",
  setGameDifficulty: (difficulty) => set({ gameDifficulty: difficulty }),
  playAreaSize: "medium",
  setPlayAreaSize: (size) => set({ playAreaSize: size }),
}));
