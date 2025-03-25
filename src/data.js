export const data = {
    "loggedInUser": {
      "id": 12345,
      "name": "Jane Doe",
      "email": "janedoe@example.com",
      "avatar": "/Profil.png",
      "role": "admin",
      "preferences": {
        "theme": "light",
        "language": "en",
        "notificationsEnabled": true,
        "timezone": "+3:00",
        "timeFormat": "UTC",
        "timezoneFormat": "24h"
      }
    },
    "notifications": [
      {
        "id": 1,
        "type": "message",
        "description": "You have a new message from Alice.",
        "timestamp": "2025-03-06T12:00:00Z",
        "read": false
      },
      {
        "id": 2,
        "type": "system",
        "description": "Your password will expire in 3 days.",
        "timestamp": "2025-03-05T15:30:00Z",
        "read": true
      },
      {
        "id": 3,
        "type": "reminder",
        "description": "Meeting with the team at 2 PM.",
        "timestamp": "2025-03-06T09:00:00Z",
        "read": false
      }
    ],
    "navigation":
      [
        { title: "Overview", icon: "fa-home", path: "/overview" },
        { title: "Tasks", icon: "fa-tasks", path: "/tasks" },
        { title: "Settings", icon: "fa-cog", path: "/settings" },
      ],
    "tasks": [
      {
        "id": 101,
        "createdAt": "2025-03-06T08:45:00Z",
        "imageUrl": "/Image.png",
        "category": "Work",
        "tag": "Urgent",
        "title": "Prepare project presentation",
        "description": "Create slides and practice presentation for tomorrow's meeting."
      },
      {
        "id": 102,
        "createdAt": "2025-03-05T14:20:00Z",
        "imageUrl": "/Image1.png",
        "category": "Personal",
        "tag": "Important",
        "title": "Buy groceries",
        "description": "Need to buy vegetables, milk, and bread for the week."
      },
      {
        "id": 103,
        "createdAt": "2025-03-04T10:10:00Z",
        "imageUrl": "/Image2.png",
        "category": "Learning",
        "tag": "Medium",
        "title": "Read JavaScript book",
        "description": "Finish Chapter 5 and practice examples from the book."
      },
      {
        "id": 104,
        "createdAt": "2025-03-04T10:10:00Z",
        "imageUrl": "/Image3.png",
        "category": "Learning",
        "tag": "Medium",
        "title": "Read JavaScript book again",
        "description": "Finish Chapter 6 and practice examples from the book."
      },
      {
        "id": 105,
        "createdAt": "2025-03-04T10:10:00Z",
        "imageUrl": "/Image4.png",
        "category": "Learning",
        "tag": "Medium",
        "title": "Read React book",
        "description": "Finish Chapter 3 and practice examples from the book."
      }
    ]
  }
  