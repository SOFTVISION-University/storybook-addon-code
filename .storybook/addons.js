/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import '@storybook/addon-actions/register';
import '@storybook/addon-links/register';
import * as CodeAddon from '../src/register';
CodeAddon.setTabs([
    { label: 'Sass', type: 'sass' },
    { label: 'Typescript', type: 'typescript' }
]);