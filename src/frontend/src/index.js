import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './Store';
import { Provider, connect } from 'react-redux';
import { selectList } from './redux-fns';

const Projects = ({ projects }) => <div> {
  projects.map(project => <div> {project.name} </div>)
} </div>;

class __ProjectsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: null
    };
  }

  componentDidMount() {
    fetch('/api/projects')
      .then(response => response.json())
      .then((data) => {
        this.setState({
          projects: data.projects
        })
      });
  }

  render() {
    return this.state.projects
      ? <Projects projects={this.state.projects} />
      : 'Loading...'

  }
};

const ProjectsContainer = connect((state)=> ({
  projects: selectList(state.projects | {})
}),(dispatch) => {
  dispatch({ type: ''});
  return {

  };
})(Projects);

ReactDOM.render(<Provider store={store} ><ProjectsContainer /></Provider>, document.getElementById("root"));
