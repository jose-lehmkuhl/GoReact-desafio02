import React, { Component } from 'react';
import api from '../../services/api';
import SideBar from '../../components/SideBar';
import Header from '../../components/Header';
import { Container, Content, Issues } from './styles';
import IssuesList from '../../components/IssuesList';

export default class Main extends Component {
  state = {
    displaying: '',
    issueType: 'all',
    issues: '',
    loading: false,
  };

  displayRepository = (repository) => {
    this.setState({ displaying: repository }, this.fetchIssues);
  };

  handleChange = (type) => {
    const { displaying } = this.state;
    this.setState({ issueType: type });
    if (displaying) {
      this.fetchIssues();
    }
  };

  fetchIssues = async () => {
    const { issueType, displaying } = this.state;
    const { name, login } = displaying;

    this.setState({ loading: true });

    try {
      const { data: issues } = await api.get(`/repos/${login}/${name}/issues?state=${issueType}`);
      issues.map((issue) => {
        const newIssue = issue;
        newIssue.displayTitle = issue.title.length > 25 ? `${issue.title.slice(0, 25)}...` : issue.title;
        return newIssue;
      });
      this.setState({ issues });
    } finally {
      this.setState({ loading: false });
    }
  };

  render() {
    const { displaying, loading, issues } = this.state;
    return (
      <Container>
        <SideBar handleClick={this.displayRepository} />
        <Content>
          {displaying ? (
            <Header repository={displaying} handleChange={this.handleChange} />
          ) : (
            <Header handleChange={this.handleChange} />
          )}
          <Issues>
            {loading && displaying ? (
              <i className="fa fa-spinner fa-pulse" />
            ) : (
              issues && <IssuesList issues={issues} />
            )}
          </Issues>
        </Content>
      </Container>
    );
  }
}
