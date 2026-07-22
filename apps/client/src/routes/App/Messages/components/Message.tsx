import React from 'react';
import { Message } from './components';

type MediaType = 'video' | 'image' | 'pdf';

function getEmbed(media: string, contentType: string): JSX.Element | null {
  if (contentType.includes('video')) {
    return (
      <video controls>
        <source src={media} type={contentType} />
      </video>
    );
  }
  if (contentType.includes('image')) {
    return <img src={media} />;
  }
  if (contentType.includes('pdf')) {
    return (
      <embed
        src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${media}`}
      />
    );
  }
  return null;
}

interface Props {
  message: {
    media: string;
    contentType: string;
    body: string;
    createdAt: string;
    to?: string;
  };
  user: any; // Update the type of user as needed
}

const MessageComponent: React.FC<Props> = (props) => {
  const { message, user } = props;
  const embed = getEmbed(message.media, message.contentType);

  return (
    <Message
      {...user}
      {...message}
      embed={embed}
      self={!!message.to}
      date={new Date(message.createdAt)}
      key={message.createdAt}
    >
      {message.body}
    </Message>
  );
};

export default MessageComponent;