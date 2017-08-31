# Introduction

In the recent react project we needed an environment to create, style and test our components without having a server-side backend code. We decided to use storybook that allows us to develop UI components outside your app and allow other people in your team to work on them. 

The most important benefits of using storybook are :
1. Completely isolate the environment for your components
2. HMR — hot module replacement
3. Support for CSS
4. Multiple add-ons like accessibility, readme etc

After using storybook in our project for a while,  we needed a way to display the CSS code samples that the component used inside the storybook panel, after looking on the internet we didn't find anything, so we decided to create our own add-on called storybook-addon-code. 
# How it works

Before we get started, you need to install react storybook and storybook-addon-code.

In you storybook config folder create a addons.js and add the following code:

```js
import '@storybook/addon-actions/register';
import * as CodeAddon from '../src/register';
CodeAddon.setTabs([
    { label: 'Css', type: 'css' },
    { label: 'JavaScript', type: 'js' }
]);
```
### Note:
setTab function accept and object like {label: 'Sass', type:'sass'} or if you want to have multiple tabs you can pass an array with multiple objects. The label will pe displayed in the Storybook panel.


Then write your stories like this:
```js
import { storiesOf } from '@storybook/react';
import withCode from 'storybook-addon-code';
import Button from './Button';

const styleFile = require('raw-loader!./style.scss');
const typescriptFile  = require('./test.tsx');

storiesOf('Button', module)
  .addDecorator(withCode(typescriptFile, 'typescript'))
  .addDecorator(withCode(styleFile, 'sass'))
  .add('with text', () =>
      <Button onClick={action('clicked')}>Hello Button</Button>
    )
```
![React Storybook code addon](./assets/info2.gif)

# Supported languages
The plugin has a wide variety of built-in support for common Web programming languages. The most common built-in languages includes:

+ clike
+ css
+ html
+ javascript
+ scss
+ markup
+ mathml 
+ sass
+ svg 
+ typesript 
+ typescript 
+ xml 

# Anatomy of a Storybook plugin

It turns out developing our custom React Storybook plugin wasn’t that all complicated. You can even go and build out your own plugins if you feel the need to.

We took the following steps to build this plugin:
1. We've created a top level React component that gets displayed in Storybook panel and shows off the code samples.
2. Created a function 'withCode' that when is called with the code that you want to display a message is emitted through a specific channel name. The channel name is set dynamically based on the language that you want to display on the storybook panel.
3. Created a react component that listens to that specific name and calls a function that renders the code received as a string to display.
4.We used PrismJS js for code highlighting and can be used with various code samples like CSS, typescript javascript, HTML etc.

![React Storybook code addon](./assets/diagram.png)

For more details on how to build a storybook addon, access to official [tutorial](https://storybook.js.org/addons/writing-addons/) .



# Future development
We plan to develop new features and one of the most important is to support markdown files, if you have any suggestions or requests for new languages ....

We are opened to Pull Requests, so please don’t hesitate to get involved!

If you like this plugin and find it useful in your day to day work please don’t hesitate to give us a little Github star or tweet about it!
