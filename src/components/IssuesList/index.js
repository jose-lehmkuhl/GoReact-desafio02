import React from 'react';
import PropTypes from 'prop-types';

import { Container, Issue } from './styles';

const IssuesList = ({ issues }) => (
  <Container>
    {issues.map(issue => (
      <Issue key={issue.id}>
        <img src={issue.user.avatar_url} alt="" />
        <div>
          <p>{issue.displayTitle}</p>
          <small>{issue.user.login}</small>
          <br />
          <a href={issue.html_url}>
            <button type="button">
              <i className="fa fa-external-link" />
              Abrir Issue
            </button>
          </a>
        </div>
      </Issue>
    ))}
  </Container>
);

IssuesList.propTypes = {
  issues: PropTypes.arrayOf(
    PropTypes.shape({
      user: PropTypes.shape({
        login: PropTypes.string,
        avatar_url: PropTypes.string,
      }),
      html_url: PropTypes.string,
      displayTitle: PropTypes.string,
      id: PropTypes.number,
    }),
  ).isRequired,
};

export default IssuesList;
