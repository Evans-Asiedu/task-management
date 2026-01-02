import { useState } from "react";
import Button from "./ui/Button";
import Dropdown from "./ui/Dropdown";
import { timeAgo } from "src/utils/formatDate";
import useOutsideClick from "src/hooks/useOutsideClick";
import { data } from "src/data";
import useStorage from "src/hooks/useStorage";

const NotificationsButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const notifRef = useOutsideClick(() => setIsOpen(false));
  const [notifications, setNotifications] = useStorage(
    "notifications",
    data.notifications
  );
  const unreadNotifications = notifications.filter((n) => !n.read).length;

  const handleRemoveNotification = (id, e) => {
    e.stopPropagation();
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  return (
    <div className="relative">
      <Button
        icon="fa-bell-o"
        iconOnly
        className="text-secondary-300 border-n-1 relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        {unreadNotifications > 0 && (
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        )}
      </Button>

      <Dropdown ref={notifRef} isOpen={isOpen}>
        <div className="px-4 mb-3 flex justify-between items-center">
          <h3 className="text-secondary-500 font-semibold">Notifications</h3>
          {unreadNotifications > 0 && (
            <span className="text-xs text-secondary-300">
              {unreadNotifications} new
            </span>
          )}
        </div>
        <div className="flex flex-col">
          {notifications.length === 0 ? (
            <div className="px-4 py-6 text-center">
              <p className="text-sm text-secondary-300">Nothing new</p>
            </div>
          ) : (
            notifications.slice(0, 5).map((notif) => (
              <div
                key={notif.id}
                className="px-4 py-2 hover:bg-n-1 cursor-pointer flex items-start justify-between gap-2"
              >
                <div className="flex-1">
                  <p className="text-sm text-secondary-500">
                    {notif.description}
                  </p>
                  <span className="text-xs text-secondary-300">
                    {timeAgo(notif.timestamp)}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {!notif.read && (
                    <span className="mt-2 size-2 rounded-full bg-primary-500 shrink-0" />
                  )}
                  <button
                    onClick={(e) => handleRemoveNotification(notif.id, e)}
                    className="mt-1 text-secondary-300 hover:text-secondary-500 transition-colors cursor-pointer"
                    aria-label="Remove notification"
                  >
                    <i className="fa fa-times text-sm" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </Dropdown>
    </div>
  );
};

export default NotificationsButton;
