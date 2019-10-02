import React, { Component } from 'react'
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FileDrop, Overlay } from "./styles"

class DragAndDrop extends Component {
  state = {
    drag: false,
    dragCounter: 0
  }
  dropRef = React.createRef()
  handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }
  handleDragIn = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.setState(prev => prev.dragCounter++)
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      this.setState({ drag: true })
    }
  }
  handleDragOut = (e) => {
    e.preventDefault()
    e.stopPropagation()
    this.setState(prev => prev.dragCounter--)
    if (!this.state.dragCounter) {
      this.setState({ drag: false })
    }
  }
  handleDrop = (e) => {
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
    // let div = this.dropRef.current
    window.addEventListener('dragenter', this.handleDragIn)
    window.addEventListener('dragleave', this.handleDragOut)
    window.addEventListener('dragover', this.handleDrag)
    window.addEventListener('drop', this.handleDrop)
  }
  componentWillUnmount() {
    // let div = this.dropRef.current
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
export default DragAndDrop