import React, { Component, createRef } from 'react'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FileDrop, Overlay } from './styles'

interface DragAndDropProps {
  handleDrop: (files: FileList) => void
}

interface DragAndDropState {
  drag: boolean
  dragCounter: number
}

export default class DragAndDrop extends Component<
  DragAndDropProps,
  DragAndDropState
> {
  state: DragAndDropState = {
    drag: false,
    dragCounter: 0
  }

  dropRef = createRef<HTMLDivElement>()

  handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  handleDragIn = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    this.setState(prevState => ({ dragCounter: prevState.dragCounter + 1 }))
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      this.setState({ drag: true })
    }
  }

  handleDragOut = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    this.setState(prevState => ({ dragCounter: prevState.dragCounter - 1 }))
    if (!this.state.dragCounter) {
      this.setState({ drag: false })
    }
  }

  handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    this.setState({ drag: false })
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      this.props.handleDrop(e.dataTransfer.files)
      e.dataTransfer.clearData()
      this.setState({ dragCounter: 0 })
    }
  }

  componentDidMount() {
    window.addEventListener('dragenter', this.handleDragIn)
    window.addEventListener('dragleave', this.handleDragOut)
    window.addEventListener('dragover', this.handleDrag)
    window.addEventListener('drop', this.handleDrop)
  }

  componentWillUnmount() {
    window.removeEventListener('dragenter', this.handleDragIn)
    window.removeEventListener('dragleave', this.handleDragOut)
    window.removeEventListener('dragover', this.handleDrag)
    window.removeEventListener('drop', this.handleDrop)
  }

  render() {
    const { handleDrop, ...rest } = this.props
    return (
      <FileDrop {...rest} ref={this.dropRef}>
        <Overlay visible={this.state.drag}>
          <FontAwesomeIcon size="4x" icon={faFileUpload} />
          Solte o arquivo aqui.
        </Overlay>
        {this.props.children}
      </FileDrop>
    )
  }
}
