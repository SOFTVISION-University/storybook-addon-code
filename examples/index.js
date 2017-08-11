import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import  withCode  from '../src';

import { Button, Welcome } from '@storybook/react/demo';
const style = require('raw-loader!./style.scss');
const typescript  = require('./test.tsx');

storiesOf('Button', module)
  .addDecorator(withCode(typescript, 'typescript'))
  .addDecorator(withCode(style, 'sass'))
  .add('with text', () =>
      <Button onClick={action('clicked')}>Hello Button</Button>
    )
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);
