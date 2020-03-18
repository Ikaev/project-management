import React from 'react';
import Layout from 'layout/center';
import ProjectDescription from 'module/project/description';

export default function ProjectDescriptionPage(props) {
  return (
    <Layout>
      <ProjectDescription {...props}/>
    </Layout>
  )
}