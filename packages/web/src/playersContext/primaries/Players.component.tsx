import React from "react";
import { Component } from "react";
import { PlayerComponent } from "./Player/Player.component";
import { Player } from "core/src/playersContext/domain/entities/Player";

type TAllPlayersPropsContainerProps = {
  getAllPlayers: Function;
  players: Player[];
};

export class PlayersComponent extends Component<
  TAllPlayersPropsContainerProps
> {
  componentDidMount(): void {
    this.props.getAllPlayers();
  }

  render() {
    const { players } = this.props;
    return (
      <>
        {players.map(player => (
          <PlayerComponent
            key={`ID:${player.firstName}.${player.lastName}`}
            player={player}
          />
        ))}
      </>
    );
  }
}
