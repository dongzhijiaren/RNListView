/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import LView from './LView'
import LView2 from './LView2'

export default class ListViewTest extends Component {
console.log('hello sir');
console.log('上传时间2018-8-14 下午5点44份11秒');
console.log('修改日期：2018-8-14 17:46:58');
console.log('4,斯斯小宝宝');
console.log('大海');
console.log('长城');

  render() {
    return (
     <LView2 />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ListViewTest', () => ListViewTest);
