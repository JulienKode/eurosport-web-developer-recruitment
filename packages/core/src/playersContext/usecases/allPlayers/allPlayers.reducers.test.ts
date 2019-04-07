import { createAction } from "core/src/common/utils/redux";
import { Player } from "core/src/playersContext/domain/entities/Player";
import {
  nadal,
  zidane
} from "core/src/common/fixtures/playersContext/players.fixtures";
import { allPlayersReducer } from "./allPlayers.reducers";
import {
  EPlayersActionType,
  IGetPlayersAction,
  IGetPlayersActionFailure,
  IGetPlayersActionSuccess
} from "./allPlayers.actions";
import { IAllPlayersState } from "core/src/playersContext/usecases/allPlayers/allPlayers.state";

describe("Players reducer", () => {
  const createPlayerState = (
    list: Player[],
    isLoading: boolean,
    error: string | null
  ): IAllPlayersState => ({
    list,
    isLoading,
    error
  });

  describe("EPlayersActionType.GET_SUCCESS action", () => {
    it("should return merged state with the players", () => {
      // Given
      const state = createPlayerState([nadal], false, null);
      const action: IGetPlayersActionSuccess = createAction(
        EPlayersActionType.GET_SUCCESS,
        { list: [zidane] }
      );

      // When
      const newState = allPlayersReducer(state, action);

      // Expect
      expect(newState.list).toEqual([nadal, zidane]);
    });

    it("should put isLoading to false", () => {
      // Given
      const state = createPlayerState([], true, null);
      const action: IGetPlayersActionSuccess = createAction(
        EPlayersActionType.GET_SUCCESS,
        { list: [] }
      );

      // When
      const newState = allPlayersReducer(state, action);

      // Expect
      expect(newState.isLoading).toEqual(false);
    });
  });

  describe("EPlayersActionType.GET action", () => {
    it("should put the loading state to true", () => {
      // Given
      const state = createPlayerState([nadal], false, null);
      const action: IGetPlayersAction = createAction(EPlayersActionType.GET);

      // When
      const newState = allPlayersReducer(state, action);

      // Expect
      expect(newState).toEqual({
        list: [nadal],
        isLoading: true,
        error: null
      });
    });
  });

  describe("EPlayersActionType.GET_FAILURE action", () => {
    it("should change the error field in the state", () => {
      // Given
      const state = createPlayerState([nadal], false, null);
      const action: IGetPlayersActionFailure = createAction(
        EPlayersActionType.GET_FAILURE,
        { message: "Impossible to fetch players data" }
      );

      // When
      const newState = allPlayersReducer(state, action);

      // Expect
      expect(newState.error).toEqual("Impossible to fetch players data");
    });
  });
});
