import React, { useEffect } from 'react'
import { useMediaQuery } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { Grid } from './styles'
import Messages from './messages'
import Sidebar from './sidebar'
import Foward from './foward'

function Main() {
  const selected = useSelector(state => state.internal.selected)

  const isMobile = useMediaQuery('(max-width:750px)')
  const inMessages = !isMobile || (selected && isMobile)
  const inSidebar = !isMobile || (!selected && isMobile)

  return (
    <Grid>
      <Foward />
      {inSidebar && <Sidebar />}
      {inMessages && <Messages />}
    </Grid>
  )
}
export default Main

// <Foward open={foward} />
