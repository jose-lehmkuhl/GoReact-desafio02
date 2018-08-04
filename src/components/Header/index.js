import React from 'react';
import PropTypes from 'prop-types';

import { Container, Repository } from './styles';

const Header = ({ repository, handleChange }) => (
  <Container>
    <Repository>
      {repository && <img src={repository.avatarUrl} alt="" />}
      <div>
        <p>{repository.name}</p>
        <small>{repository.login}</small>
      </div>
    </Repository>
    <select onChange={e => handleChange(e.target.value)}>
      <option value="all">Todas</option>
      <option value="open">Abertas</option>
      <option value="closed">Fechadas</option>
    </select>
  </Container>
);

Header.defaultProps = {
  repository: {
    name: '',
    avatarUrl: '',
    login: '',
    id: 0,
  },
};

Header.propTypes = {
  repository: PropTypes.shape({
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
    login: PropTypes.string,
    id: PropTypes.number,
  }),
  handleChange: PropTypes.func.isRequired,
};

export default Header;
