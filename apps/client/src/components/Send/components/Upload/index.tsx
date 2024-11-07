import React, { useCallback, useRef, FC, ChangeEvent } from 'react'
import { faFileUpload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RoundButton } from 'global_styles'

interface UploadProps {
  onUpload?: (files: FileList | null) => void
  accept?: string
}

const Upload: FC<UploadProps> = ({ onUpload, accept, ...rest }) => {
  const fileInput = useRef<HTMLInputElement>(null)

  const OpenFileDialog = useCallback(() => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }, [fileInput])

  const onSelected = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.stopPropagation()
      event.preventDefault()
      onUpload && onUpload(event.target.files)
    },
    [onUpload]
  )

  return (
    <RoundButton {...rest}>
      <input
        ref={fileInput}
        accept={accept}
        type="file"
        onChange={onSelected}
        style={{ display: 'none' }}
      />
      <FontAwesomeIcon
        onClick={OpenFileDialog}
        color="#0ec1a1"
        size="lg"
        icon={faFileUpload}
      />
    </RoundButton>
  )
}

export default Upload
