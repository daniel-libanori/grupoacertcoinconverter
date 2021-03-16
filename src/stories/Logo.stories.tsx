import React from 'react';

import { Story } from '@storybook/react';
import Logo from '../components/logo/logo'

export interface LogoProps {
    
}



//👇 We create a “template” of how args map to rendering
const Template: Story<LogoProps> = (args) => <Logo {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: 'Primary',
};