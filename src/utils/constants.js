export const LANGUAGE_OPTIONS = [
  { value: "english", label: "English (Default)" },
  { value: "spanish", label: "Spanish" },
  { value: "french", label: "French" },
  { value: "german", label: "German" },
  { value: "chinese", label: "Chinese" },
];

export const TIMEZONE_OPTIONS = [
  { value: "utc", label: "UTC (Coordinated Universal Time)" },
  { value: "est", label: "EST (Eastern Standard Time)" },
  { value: "pst", label: "PST (Pacific Standard Time)" },
  { value: "cst", label: "CST (Central Standard Time)" },
  { value: "gmt", label: "GMT (Greenwich Mean Time)" },
  { value: "cet", label: "CET (Central European Time)" },
  { value: "jst", label: "JST (Japan Standard Time)" },
];

export const TIME_FORMAT_OPTIONS = [
  { value: "24", label: "24 Hours" },
  { value: "12", label: "12 Hours" },
];

export const DEFAULT_SETTINGS = {
  language: "english",
  timezone: "utc",
  timeFormat: "24",
};

export const DEFAULT_NOTIFICATION_SETTINGS = {
  pushNotifications: true,
  emailNotifications: true,
  taskReminders: true,
  weeklyReports: false,
  mentorUpdates: true,
  systemUpdates: false,
};
