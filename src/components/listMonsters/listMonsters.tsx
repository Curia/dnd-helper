import React, { useContext } from "react";
import { MonsterContext } from "../appProvider/monsterProvider";

export const ListMonsters: React.FC = ({ }) => {

  const { state: { monsters } } = useContext(MonsterContext);

  return (<ul>
    {monsters.map(monster => <li>{monster.name}</li>)}
  </ul>)
}