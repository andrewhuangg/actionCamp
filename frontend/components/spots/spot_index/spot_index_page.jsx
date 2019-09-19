import React from 'react';
import SpotIndexContainer from './spots_index_container';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

const SpotIndex = () => {
  return (
    <div className="splash-container">
      <div className="spot-index-container">
        <section className="spot-index-container-section">
          <Route exact path="/spots" component={SpotIndexContainer} />
        </section>
      </div>
    </div>
  )
}

export default SpotIndex;