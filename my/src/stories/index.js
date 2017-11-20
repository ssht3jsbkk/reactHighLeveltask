import React from 'react';
import Paper from '../components/Paper/Paper.js';
import List from '../components/List/List.js';

import { storiesOf, addDecorator } from '@storybook/react';
import {muiTheme} from 'storybook-addon-material-ui';

import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

storiesOf('Material-UI', module)
.addDecorator(muiTheme()).add('write a list', () => <List items={[{todo: 'buy apples', complete: false}]}></List>)

storiesOf('Welcome', module)
  .add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>)
  .add('with a phrase', () => <Button onClick={action('clicked')}>OMG It's Friday!</Button>)

storiesOf('Paper', module)
  .add('with an image', () => <Paper>My feels right now....</Paper>)
