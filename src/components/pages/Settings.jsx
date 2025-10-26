import { useState } from "react";
import Header from "src/components/layout/Header";
import Select from "src/components/ui/Select";
import Radio from "src/components/ui/Radio";
import Toggle from "src/components/ui/Toggle";
import Button from "src/components/ui/Button";
import useStorage from "src/hooks/useStorage";
import {
  LANGUAGE_OPTIONS,
  TIMEZONE_OPTIONS,
  TIME_FORMAT_OPTIONS,
  DEFAULT_SETTINGS,
  DEFAULT_NOTIFICATION_SETTINGS,
} from "src/utils/constants";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [settings, setSettings] = useStorage("app-settings", DEFAULT_SETTINGS);
  const [notificationSettings, setNotificationSettings] = useStorage(
    "notification-settings",
    DEFAULT_NOTIFICATION_SETTINGS
  );

  const handleSave = () => {
    console.log("Settings saved:", settings);
    console.log("Notification settings saved:", notificationSettings);
    // Settings are automatically saved via useStorage hook
  };

  return (
    <>
      <Header showActions={false} title="Settings" />
      <main className="h-full flex bg-n-2">
        <div className="flex-1 bg-primary-0 mx-6 lg:mx-8 my-6 rounded-r-1">
          {/* Tab Navigation */}
          <div className="flex border-b border-n-1">
            <button
              onClick={() => setActiveTab("general")}
              className={`px-6 py-4 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === "general"
                  ? "text-secondary-500 border-primary-500"
                  : "text-secondary-300 border-transparent hover:text-secondary-500"
              }`}
            >
              General
            </button>
            <button
              onClick={() => setActiveTab("notification")}
              className={`px-6 py-4 text-sm font-semibold border-b-2 transition-colors ${
                activeTab === "notification"
                  ? "text-secondary-500 border-primary-500"
                  : "text-secondary-300 border-transparent hover:text-secondary-500"
              }`}
            >
              Notification
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 lg:p-8">
            {activeTab === "general" && (
              <div className="space-y-8">
                <Select
                  label="Language"
                  options={LANGUAGE_OPTIONS}
                  value={settings.language}
                  onChange={(value) =>
                    setSettings((prev) => ({ ...prev, language: value }))
                  }
                />

                <Select
                  label="Timezone"
                  options={TIMEZONE_OPTIONS}
                  value={settings.timezone}
                  onChange={(value) =>
                    setSettings((prev) => ({ ...prev, timezone: value }))
                  }
                />

                <Radio
                  label="Timezone"
                  options={TIME_FORMAT_OPTIONS}
                  value={settings.timeFormat}
                  onChange={(value) =>
                    setSettings((prev) => ({ ...prev, timeFormat: value }))
                  }
                />
              </div>
            )}

            {activeTab === "notification" && (
              <div className="space-y-6">
                <Toggle
                  label="Push Notifications"
                  description="Receive push notifications on your device"
                  checked={notificationSettings.pushNotifications}
                  onChange={(checked) =>
                    setNotificationSettings((prev) => ({
                      ...prev,
                      pushNotifications: checked,
                    }))
                  }
                />

                <Toggle
                  label="Email Notifications"
                  description="Receive notifications via email"
                  checked={notificationSettings.emailNotifications}
                  onChange={(checked) =>
                    setNotificationSettings((prev) => ({
                      ...prev,
                      emailNotifications: checked,
                    }))
                  }
                />

                <Toggle
                  label="Task Reminders"
                  description="Get reminded about upcoming tasks"
                  checked={notificationSettings.taskReminders}
                  onChange={(checked) =>
                    setNotificationSettings((prev) => ({
                      ...prev,
                      taskReminders: checked,
                    }))
                  }
                />

                <Toggle
                  label="Weekly Reports"
                  description="Receive weekly progress reports"
                  checked={notificationSettings.weeklyReports}
                  onChange={(checked) =>
                    setNotificationSettings((prev) => ({
                      ...prev,
                      weeklyReports: checked,
                    }))
                  }
                />

                <Toggle
                  label="Mentor Updates"
                  description="Get notified about mentor activities"
                  checked={notificationSettings.mentorUpdates}
                  onChange={(checked) =>
                    setNotificationSettings((prev) => ({
                      ...prev,
                      mentorUpdates: checked,
                    }))
                  }
                />

                <Toggle
                  label="System Updates"
                  description="Receive notifications about system updates"
                  checked={notificationSettings.systemUpdates}
                  onChange={(checked) =>
                    setNotificationSettings((prev) => ({
                      ...prev,
                      systemUpdates: checked,
                    }))
                  }
                />
              </div>
            )}

            {/* Save Button */}
            <div className="mt-8 pt-6 border-t border-n-1">
              <Button
                onClick={handleSave}
                className="bg-primary-500 text-primary-0 border-primary-500 hover:bg-primary-600 hover:border-primary-600"
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Settings;
