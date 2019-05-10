export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cd5895b07ee452c8e569b68',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-wtoz8ewg',
                  apiId: '4619c7b8-4dca-4a83-bc90-155f5ecb3d27'
                },
                {
                  buildHookId: '5cd5895bb5084cab2e000ee1',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-h2gbnnea',
                  apiId: '85177393-e090-4942-9a5d-632928c620c1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/blaindy/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-h2gbnnea.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
