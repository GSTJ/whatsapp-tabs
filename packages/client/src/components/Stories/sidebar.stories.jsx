import React from 'react'
import { storiesOf } from '@storybook/react'
import { Separator } from 'global_styles'
import { PreviewDefault } from './preview.stories'
import { SelectorDefault } from './selector.stories'
import { TextField } from './search.stories'
import { Online } from './profile.stories'

storiesOf('Sidebar Orchestra', module).add('default', () => (
  <>
    <Online />
    <SelectorDefault />
    <TextField />
    <Separator height={5} />
    <PreviewDefault />
    <PreviewDefault />
    <PreviewDefault />
  </>
))
