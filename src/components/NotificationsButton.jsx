import { useState } from "react";
import Button from "./ui/Button";
import Dropdown from "./ui/Dropdown";
import { timeAgo } from "src/utils/formatDate";
import useOutsideClick from "src/hooks/useOutsideClick";
import { data } from "src/data";

const NotificationsButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const notifRef = useOutsideClick(() => setIsOpen(false));
  const unreadNotifications = data.notifications.filter((n) => !n.read).length;

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
          <span className="text-xs text-secondary-300">
            {unreadNotifications} new
          </span>
        </div>
        <div className="flex flex-col">
          {data.notifications.slice(0, 5).map((notif) => (
            <div
              key={notif.id}
              className="px-4 py-2 hover:bg-n-1 cursor-pointer flex items-start justify-between"
            >
              <div>
                <p className="text-sm text-secondary-500">
                  {notif.description}
                </p>
                <span className="text-xs text-secondary-300">
                  {timeAgo(notif.timestamp)}
                </span>
              </div>
              {!notif.read && (
                <span className="mt-2 size-2 rounded-full bg-primary-500 shrink-0" />
              )}
            </div>
          ))}
        </div>
      </Dropdown>
    </div>
  );
};

export default NotificationsButton;
