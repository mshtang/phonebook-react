import React from 'react';

export interface NotificationBoxProps {
  message: string;
  isError: boolean;
}

const NotificationBox: React.FC<NotificationBoxProps> = ({
  message,
  isError,
}) => {
  return isError ? (
    <div className="Notification-error">{message}</div>
  ) : (
    <div className="Notification">{message}</div>
  );
};

export default NotificationBox;
