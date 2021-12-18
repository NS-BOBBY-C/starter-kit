import React, {useState} from 'react';
import {
  Linking,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AR from './screens/demos/AR';
import ARIssue24 from './screens/issues/Issue24';
import ARIssue31 from './screens/issues/Issue31';
import ARIssue41 from './screens/issues/Issue41';
import ARIssue58 from './screens/issues/Issue58';
import VR from './screens/demos/VR';

const demos = [
  {title: 'AR Demo', id: 'AR'},
  {title: 'VR Demo', id: 'VR'},
];

const issues = [
  {title: 'Issue #24', id: '24'},
  {title: 'Issue #31', id: '31'},
  {title: 'Issue #41', id: '41'},
  {title: 'Issue #58', id: '58'},
];

export default () => {
  const [view, setView] = useState('HOME');

  const handleClickGitHubLink = id => {
    Linking.openURL(`https://github.com/ViroCommunity/viro/issues/${id}`);
  };

  switch (view) {
    case 'AR':
      return <AR />;
    case '24':
      return <ARIssue24 />;
    case '31':
      return <ARIssue31 />;
    case '41':
      return <ARIssue41 />;
    case '58':
      return <ARIssue58 />;
    case 'VR':
      return <VR />;
    default:
      return (
        <ScrollView style={styles.home} contentContainerStyle={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Viro Starter Kit</Text>
          </View>
          {/* General Demos */}
          <View style={styles.header}>
            <Text style={styles.subheaderText}>General Usage</Text>
          </View>
          {demos.map(demo => (
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
          {issues.map(issue => (
            <View key={issue.id} style={styles.issue}>
              <Pressable
                onPress={() => setView(issue.id)}
                style={styles.button}>
                <Text style={styles.buttonText}>{issue.title}</Text>
              </Pressable>
              <Pressable
                onPress={() => handleClickGitHubLink(issue.id)}
                style={styles.link}>
                <Text style={styles.buttonText}>GitHub Link</Text>
              </Pressable>
            </View>
          ))}
        </ScrollView>
      );
  }
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
  f1: {
    flex: 1,
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
