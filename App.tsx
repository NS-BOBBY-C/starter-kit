import React, {useState} from 'react';
import {
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import packageJson from './package.json';
import {DEMOS, DEMO_EXAMPLES} from './screens/demos';
import {DISCORD_EXAMPLES, DISCORD_ISSUES} from './screens/discord_issues';
import {GITHUB_EXAMPLES, GITHUB_ISSUES} from './screens/github_issues';

import {VIRO_EXAMPLES, VIRO_TESTS} from './screens/viro_tests';

export default () => {
  const [view, setView] = useState('HOME');

  const handleClickGitHubLink = (id: string) => {
    Linking.openURL(`https://github.com/ViroCommunity/viro/issues/${id}`);
  };

  const renderScene = () => {
    let Component = null;
    if (DISCORD_EXAMPLES[view as any]) {
      Component = DISCORD_EXAMPLES[view];
      return <Component />;
    } else if (DEMO_EXAMPLES[view as any]) {
      Component = DEMO_EXAMPLES[view];
      return <Component />;
    } else if (VIRO_EXAMPLES[view as any]) {
      Component = VIRO_EXAMPLES[view];
      return <Component />;
    } else if (GITHUB_EXAMPLES[view as any]) {
      Component = GITHUB_EXAMPLES[view];
      return <Component />;
    }

    return (
      <ScrollView style={styles.home} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Viro Test App</Text>
          <Text>
            Viro Version:{' '}
            {packageJson.dependencies['@viro-community/react-viro'].replace(
              '^',
              '',
            )}
          </Text>
        </View>
        <Pressable
          onPress={() => Linking.openURL('https://github.com/NS-BOBBY-C')}
          style={styles.bobbyButton}>
          <Text style={styles.buttonText}>Built by NS-BOBBY-C</Text>
        </Pressable>
        {/* General Demos */}
        <View style={styles.header}>
          <Text style={styles.subheaderText}>Viro Tests</Text>
        </View>
        {VIRO_TESTS.map(demo => (
          <Pressable
            key={demo}
            onPress={() => setView(demo)}
            style={styles.viroTestButton}>
            <Text style={styles.buttonText}>{demo}</Text>
          </Pressable>
        ))}

        {/* General Demos */}
        <View style={styles.header}>
          <Text style={styles.subheaderText}>General Usage</Text>
        </View>
        {DEMOS.map(demo => (
          <Pressable
            key={demo.id}
            onPress={() => setView(demo.id)}
            style={styles.button}>
            <Text style={styles.buttonText}>{demo.title}</Text>
          </Pressable>
        ))}

        {/* Issues from GitHub */}
        <View style={styles.header}>
          <Text style={styles.subheaderText}>GitHub Issues</Text>
        </View>
        {GITHUB_ISSUES.map(issue => (
          <View key={issue} style={styles.issue}>
            <Pressable onPress={() => setView(issue)} style={styles.button}>
              <Text style={styles.buttonText}>Issue #{issue}</Text>
            </Pressable>
            <Pressable
              onPress={() => handleClickGitHubLink(issue)}
              style={styles.link}>
              <Text style={styles.buttonText}>GitHub Link</Text>
            </Pressable>
          </View>
        ))}

        {/* Discord Issues */}
        <View style={styles.header}>
          <Text style={styles.subheaderText}>Discord Issues</Text>
        </View>
        {DISCORD_ISSUES.map(issue => (
          <View key={issue.id} style={styles.issue}>
            <Pressable
              onPress={() => setView(issue.id)}
              style={styles.discordLink}>
              <Text style={styles.buttonText}>{issue.title}</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    );
  };

  return (
    <React.Fragment>
      {renderScene()}
      {view !== 'HOME' ? (
        <Pressable onPress={() => setView('HOME')} style={styles.homeButton}>
          <Text style={styles.buttonText}>Home</Text>
        </Pressable>
      ) : null}
    </React.Fragment>
  );
};

var styles = StyleSheet.create({
  home: {
    backgroundColor: '#fff',
    flex: 1,
  },
  content: {
    padding: 20,
  },
  issue: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 32,
  },
  subheaderText: {
    fontSize: 32,
  },
  header: {
    marginTop: 40,
    marginBottom: 40,
  },
  githubLink: {
    marginBottom: 10,
  },
  link: {
    backgroundColor: '#007AFF',
    marginBottom: 10,
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  discordLink: {
    backgroundColor: '#5865F2',
    marginBottom: 10,
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  f1: {
    flex: 1,
  },
  bobbyButton: {
    marginBottom: 10,
    flex: 2,
    marginRight: 10,
    backgroundColor: 'darkblue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  viroTestButton: {
    marginBottom: 10,
    flex: 2,
    marginRight: 10,
    backgroundColor: '#ff3f5f',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  homeButton: {
    position: 'absolute',
    bottom: 40,
    left: 40,
    right: 40,
    backgroundColor: '#00000088',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  button: {
    marginBottom: 10,
    flex: 2,
    marginRight: 10,
    backgroundColor: '#000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
  },
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
});
