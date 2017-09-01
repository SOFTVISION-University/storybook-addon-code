import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import  withCode  from '../src';
import './style.css';
import { Button } from './Button';
const style = require('!raw-loader!./style.css');
const javascriptCode  = require('!raw-loader!./Button.js');

storiesOf('Button', module)
  .addDecorator(withCode(javascriptCode, 'js'))
  .addDecorator(withCode(style, 'css'))
  .add('with text', () =>
      <Button onClick={action('clicked')}>Click me!</Button>
    )
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
