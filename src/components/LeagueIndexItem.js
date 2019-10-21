import React, { useState } from 'react';
import { SportmonksApi } from 'sportmonks';

const LeagueIndexItem = (props) => {
  const [showList, setShowList] = useState(false);
  const [teamList, setTeamList] = useState([]);
  const { league } = props;
  // debugger

  const handleClick = (newValue) => {
    setShowList(newValue)
    fetchTeams();
  };

  const fetchTeams = () => {
    const sportmonks = new SportmonksApi('NfG3Tuh4XezChLIkt9lSXURmPr1f7apw3QJ6dv2A3QMt0Zh45isCuHClCQ6I');
    const { current_season_id: currentSeasonId } = league;
    sportmonks.get(`v2.0/teams/season/${currentSeasonId}`)
    .then((res) => {
        console.log(res, "team data")
        setTeamList(res.data )
      }
    )
  };

  const renderList = () => {
    if(showList && teamList.length > 0) {
      return (
        teamList.map(team => <p key={team.id}>{ team.name }</p>)
      )
    } else if (showList) {
      return <p>Loading...</p>
    }
  };

  return (
    <div>
      <button
        onClick={ () => handleClick(!showList)}
      >
        { league.name }
      </button>
      { renderList() }
    </div>
  );
};

export default LeagueIndexItem;