import { IAppState } from "core/src/configuration/app.state";
import { rootReducer } from "core/src/configuration/root.reducers";
import {
  nadal,
  zidane
} from "core/src/common/fixtures/playersContext/players.fixtures";
import { selectAllPlayers } from "./allPlayers.selector";

describe("selectAllPlayers", () => {
  let state: IAppState;

  beforeEach(() => {
    state = rootReducer(undefined, { type: "INIT" });
  });

  it("should return all players in the state", () => {
    // Given
    state.players.allPlayers = {
      list: [nadal, zidane],
      isLoading: false,
      error: null
    };

    // When
    const result = selectAllPlayers(state);

    // Expect
    expect(result).toEqual([nadal, zidane]);
  });

  it("should return empty array when there are no players", () => {
    // Given
    state.players.allPlayers = {
      list: [],
      isLoading: false,
      error: null
    };

    // When
    const result = selectAllPlayers(state);

    // Expect
    expect(result).toEqual([]);
  });
});
