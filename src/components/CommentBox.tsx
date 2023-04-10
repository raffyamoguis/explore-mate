import React from 'react';
import { Modal } from '@mantine/core';

interface Props {
  opened: boolean;
  close: () => void;
  title: string;
  centered?: boolean;
  withCloseButton?: boolean;
  size?: string | number;
  content?: JSX.Element;
}

const CommentBox: React.FC<Props> = ({
  opened,
  close,
  title,
  centered,
  withCloseButton = true,
  size,
  content,
}) => {
  return (
    <Modal
      opened={opened}
      onClose={close}
      title={title}
      centered={centered}
      withCloseButton={withCloseButton}
      size={size}
    >
      {content}
    </Modal>
  );
};

export default CommentBox;
