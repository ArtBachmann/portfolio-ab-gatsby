import React, { Component } from 'react'
import styles from '../../css/items.module.css'
import Project from './Project'
import Title from '../Title'


// This kind of setup is for future filtering and smt. more powerful than before. 
class ProjectList extends Component {

  state = {
    projects: [],
    sortedProjects: [],
  }

  componentDidMount() {
    this.setState({
      projects: this.props.projects.edges,
      sortedProjects: this.props.projects.edges,
    })
  }

  render() {
    return (
      <section className={styles.tours}>
        <Title title="Esimerkkiprojektit" />
        <div className={styles.center}></div>
        {
          this.state.sortedProjects.map(({ node }) => {
            return <Project
              key={node.contentful_id}
              project={node}
            />
          })
        }
      </section>
    )
  }
}

export default ProjectList
