import React from 'react';
import PropTypes from 'prop-types';

import { Repository, Container } from './styles';

const RepositoriesList = ({ repositories, handleClick }) => (
  <Container>
    {repositories.map(repository => (
      <button key={repository.id} type="button" onClick={() => handleClick(repository)}>
        <Repository>
          <img src={repository.avatarUrl} alt="" />
          <div>
            <p>{repository.name}</p>
            <small>{repository.login}</small>
          </div>
          <i className="fa fa-chevron-right" />
        </Repository>
      </button>
    ))}
  </Container>
);

RepositoriesList.propTypes = {
  repositories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      login: PropTypes.string,
      avatarUrl: PropTypes.string,
    }),
  ).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default RepositoriesList;
