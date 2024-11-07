import React from 'react'
import { Flex } from 'global_styles'
import { Alert } from './styles'

interface MsgAlertProps {
  children: React.ReactNode
}

const MsgAlert: React.FC<MsgAlertProps> = ({ children }) => (
  <Flex>
    <Alert>{children}</Alert>
  </Flex>
)

export default MsgAlert
