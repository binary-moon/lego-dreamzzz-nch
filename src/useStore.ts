import { create } from "zustand";

export type GameDifficulty = "easy" | "standard" | "hard";
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
  gameState: 0,
  setGameState: (state) => set({ gameState: state }),
  gameDifficulty: "standard",
  setGameDifficulty: (difficulty) => set({ gameDifficulty: difficulty }),
  playAreaSize: "medium",
  setPlayAreaSize: (size) => set({ playAreaSize: size }),
}));
