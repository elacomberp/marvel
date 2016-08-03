import React from 'react';
import _ from 'lodash';
import HeroBox from './herobox';
import HeroDesc from './herodesc';

const HeroPage = ({ heroes, view, ...actions }) => {
  console.log('HeroPage----heroes : ', heroes);
  if (view == false) {
    const data = _.map(heroes, (hero, id) =>
      <HeroBox
        hero={ hero }
        key={ id }
        links={ hero.urls }
        pic= { hero.thumbnail }
        { ...actions }
      />
    );
    return (
      <div className='heropage'>
        { data }
      </div>
    );
  };
  return (
    <HeroDesc
      hero={ heroes[0] }
      { ...actions }
    />
  );
};

HeroPage.propTypes = {
  heroes: React.PropTypes.object.isRequired,
  view: React.PropTypes.bool.isRequired,
};

export default HeroPage;
