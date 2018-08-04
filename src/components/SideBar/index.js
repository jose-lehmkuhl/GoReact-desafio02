import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Aside, Form, Divider } from './style';
import api from '../../services/api';
import RepositoriesList from '../RepositoriesList';

export default class SideBar extends Component {
  state = {
    input: '',
    repositories: [],
    loading: false,
    repError: false,
  };

  fetchRepositories = async (e) => {
    const { input, repositories } = this.state;
    e.preventDefault();

    this.setState({ loading: true });

    try {
      const { data: repInfo } = await api.get(`/repos/${input}`);

      const newRep = {
        name: repInfo.name,
        avatarUrl: repInfo.owner.avatar_url,
        login: repInfo.owner.login,
        id: repInfo.id,
      };
      this.setState({ repositories: [...repositories, newRep], repError: false });
    } catch (err) {
      this.setState({ repError: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleInput = (input) => {
    this.setState({ input });
  };

  render() {
    const {
      input, repositories, loading, repError,
    } = this.state;

    const { handleClick } = this.props;

    return (
      <Aside className="App">
        <Form gotError={repError} onSubmit={this.fetchRepositories}>
          <input
            type="text"
            placeholder="Novo Repositorio"
            value={input}
            onChange={e => this.handleInput(e.target.value)}
          />
          <button type="submit">
            {loading ? (
              <i className="fa fa-spinner fa-pulse" />
            ) : (
              <i className="fa fa-plus-circle" />
            )}
          </button>
        </Form>
        <Divider />
        <RepositoriesList repositories={repositories} handleClick={handleClick} />
      </Aside>
    );
  }
}

SideBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
