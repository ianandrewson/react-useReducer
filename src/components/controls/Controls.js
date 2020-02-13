import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.css';

const Controls = ({ actions, dispatch }) => (
  <section className={styles.Controls}>
    {actions.map(({ action, count }) => (
      <button key={action().actionName} onClick={() => dispatch(action())}>
        {action().actionName} {!!count && `- ${count}`}
      </button>
    ))}
  </section>
);

Controls.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape({
    action: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
  })).isRequired,
  dispatch: PropTypes.func.isRequired
};

export default Controls;
