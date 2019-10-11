import React  from 'react';

const LeagueIndexItem = (props) => {
  const { league } = props;
  return (
    <div>
      <p>{ league.name }</p>
    </div>
  );
};

export default LeagueIndexItem;