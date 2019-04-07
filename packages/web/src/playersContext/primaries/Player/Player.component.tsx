import React from "react";
import { Player } from "core/src/playersContext/domain/entities/Player";

export const PlayerComponent = ({ player }: { player: Player }) => (
  <div>
    <p>{`${player.firstName} ${player.lastName}`}</p>
    <img alt={"TMP"} src={player.picture} />
    <p>{`Poids: ${player.data.weight}`}</p>
    <p>{`Taille: ${player.data.height} Kg`}</p>
  </div>
);
