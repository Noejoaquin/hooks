import React, { Component } from 'react';
import { SportmonksApi } from 'sportmonks';
import LeagueIndexItem from './LeagueIndexItem';

class LeagueIndex extends Component {
  state = { leagues: [] };

  componentDidMount = () => {
    const sportmonks = new SportmonksApi('NfG3Tuh4XezChLIkt9lSXURmPr1f7apw3QJ6dv2A3QMt0Zh45isCuHClCQ6I');
   sportmonks.get('v2.0/leagues')
    .then((res) => {
      console.log(res)
       this.setState({ leagues: res.data })
      }
    )
  };

  render() {
    const { leagues } = this.state;
    return (
      <div className="App">
       LEAGUE INDEX
        <p>{ leagues.length }</p>
        {
          leagues.map(league => {
            if (league.name === "Premiership" || league.name === "Superliga") {
              return <LeagueIndexItem key={league.id} league={league}/>
            }
          })
        }
      </div>
    );
  }
}

export default LeagueIndex;