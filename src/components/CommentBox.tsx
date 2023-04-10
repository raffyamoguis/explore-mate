import React from 'react';
import { Modal } from '@mantine/core';

interface Props {
  opened: boolean;
  close: () => void;
  title: string;
  content?: JSX.Element;
}

const CommentBox: React.FC<Props> = ({ opened, close, title, content }) => {
  return (
    <Modal opened={opened} onClose={close} title={title}>
      {content}
    </Modal>
  );
};

export default CommentBox;
