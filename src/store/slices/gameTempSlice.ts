import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {getGameList, calculateClosestGame} from '../actions/admin/gameActions';

// Define a type for the slice state
type GameState = {
  games: Array<any>;
  loading: boolean;
  error: any;
  game: {} | null;
};

const initialState: GameState = {
  games: [],
  loading: false,
  error: null,
  game: null,
};

export const gameTempSlice = createSlice({
  name: 'games',
  initialState,
  reducers: {
    updateClosestGame: state => {
      state.game = calculateClosestGame(state.games);
    },
    updateCurrentGame: (state, action: PayloadAction<string>) => {
      const selectedGame = state.games.find(
        game => game._id === action.payload,
      );

      state.game = selectedGame || null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getGameList.pending, state => {
        state.loading = true;
      })
      .addCase(getGameList.fulfilled, (state, {payload}) => {
        state.loading = false;
        state.error = null;
        state.games = payload;
      })
      .addCase(getGameList.rejected, (state, {payload}) => {
        state.loading = false;
        state.games = [];
        state.error = payload;
      });
  },
});

export const {updateClosestGame, updateCurrentGame} = gameTempSlice.actions;

export default gameTempSlice.reducer;
