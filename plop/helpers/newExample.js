const newExampleGenerator = {
  description: 'Create a new example for debugging or development.',
  prompts: [
    {
      type: 'list',
      name: 'destination',
      choices: ['demos', 'discord_issues', 'github_issues', 'viro_tests'],
      message: 'Which project do you want to add an example to?',
    },
    {
      type: 'input',
      name: 'fileName',
      message:
        "What is the name of the example? \n\n1. do NOT include the \".tsx\" extension\n2. for discord issues, include just the user's name\n3. for github issues, include the user's name and the issue number\n4. for viro tests, include the just the component's name\n\n",
    },
  ],
  actions: function (data) {
    var actions = [];

    if (data.destination === 'demos') {
      actions.push({
        type: 'add',
        path: 'screens/{{destination}}/{{properCase fileName}}.tsx',
        templateFile: 'plop/templates/ar.hbs',
      });
      actions.push({
        type: 'append',
        path: 'screens/{{destination}}/index.ts',
        pattern: '/* PLOP APPEND 1 START */',
        template:
          "import {{properCase fileName}} from './{{properCase fileName}}';",
      });
      actions.push({
        type: 'append',
        path: 'screens/{{destination}}/index.ts',
        pattern: '/* PLOP APPEND 2 START */',
        template:
          "  {title: '{{properCase fileName}} Demo', id: '{{properCase fileName}}'},",
      });
      actions.push({
        type: 'append',
        path: 'screens/{{destination}}/index.ts',
        pattern: '/* PLOP APPEND 3 START */',
        template: '  {{properCase fileName}}: {{properCase fileName}},',
      });
    } else if (data.destination === 'discord_issues') {
      const date = new Date();
      const fileDateString = `${
        date.getMonth() + 1
      }${date.getDate()}${date.getFullYear()}`;
      const descriptionDateString = `${
        date.getMonth() + 1
      }/${date.getDate()}/${date.getFullYear()}`;

      actions.push({
        type: 'add',
        path: `screens/{{destination}}/{{properCase fileName}}_${fileDateString}.tsx`,
        templateFile: 'plop/templates/ar.hbs',
      });
      actions.push({
        type: 'append',
        path: 'screens/{{destination}}/index.ts',
        pattern: '/* PLOP APPEND 1 START */',
        template: `import {{properCase fileName}}${fileDateString} from './{{properCase fileName}}_${fileDateString}';`,
      });
      actions.push({
        type: 'append',
        path: 'screens/{{destination}}/index.ts',
        pattern: '/* PLOP APPEND 2 START */',
        template: `  {title: '{{properCase fileName}} ${descriptionDateString}', id: '{{properCase fileName}}_${fileDateString}'},`,
      });
      actions.push({
        type: 'append',
        path: 'screens/{{destination}}/index.ts',
        pattern: '/* PLOP APPEND 3 START */',
        template: `  {{properCase fileName}}_${fileDateString}: {{properCase fileName}}${fileDateString},`,
      });
    } else if (data.destination === 'github_issues') {
      actions.push({
        type: 'add',
        path: 'screens/{{destination}}/Issue{{properCase fileName}}.tsx',
        templateFile: 'plop/templates/ar.hbs',
      });
      actions.push({
        type: 'append',
        path: 'screens/{{destination}}/index.ts',
        pattern: '/* PLOP APPEND 1 START */',
        template:
          "import Issue{{properCase fileName}} from './Issue{{properCase fileName}}';",
      });
      actions.push({
        type: 'append',
        path: 'screens/{{destination}}/index.ts',
        pattern: '/* PLOP APPEND 2 START */',
        template: "  '{{properCase fileName}}',",
      });
      actions.push({
        type: 'append',
        path: 'screens/{{destination}}/index.ts',
        pattern: '/* PLOP APPEND 3 START */',
        template: '  {{properCase fileName}}: Issue{{properCase fileName}},',
      });
    } else if (data.destination === 'viro_tests') {
      actions.push({
        type: 'add',
        path: 'screens/{{destination}}/{{properCase fileName}}.tsx',
        templateFile: 'plop/templates/ar.hbs',
      });
      actions.push({
        type: 'append',
        path: 'screens/{{destination}}/index.ts',
        pattern: '/* PLOP APPEND 1 START */',
        template:
          "import {{properCase fileName}} from './{{properCase fileName}}';",
      });
      actions.push({
        type: 'append',
        path: 'screens/{{destination}}/index.ts',
        pattern: '/* PLOP APPEND 2 START */',
        template: "  '{{properCase fileName}}',",
      });
      actions.push({
        type: 'append',
        path: 'screens/{{destination}}/index.ts',
        pattern: '/* PLOP APPEND 3 START */',
        template: '  {{properCase fileName}}: {{properCase fileName}},',
      });
    }

    return actions;
  },
};

module.exports = {newExampleGenerator};
