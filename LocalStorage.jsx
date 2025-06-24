const employees = [
  {
    "id": 1,
    "firstName": "Alice",
    "email": "alice@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 2,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare monthly report",
        "taskDescription": "Compile and submit the monthly sales report.",
        "taskDate": "2025-06-15",
        "category": "Reports",
        "taskNumber": "active-1"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Client follow-up",
        "taskDescription": "Call client to confirm delivery schedule.",
        "taskDate": "2025-06-17",
        "category": "Communication",
        "taskNumber": "completed-1"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update CRM",
        "taskDescription": "Ensure all client notes are updated in the system.",
        "taskDate": "2025-06-12",
        "category": "Data Entry",
        "taskNumber": "completed-2"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Bob",
    "email": "bob@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 2,
      "failed": 0
    },
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Team meeting",
        "taskDescription": "Attend weekly team sync-up.",
        "taskDate": "2025-06-16",
        "category": "Meetings",
        "taskNumber": "completed-1"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Code review",
        "taskDescription": "Review code submitted by junior devs.",
        "taskDate": "2025-06-18",
        "category": "Development",
        "taskNumber": "active-1"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Bug fix - Login issue",
        "taskDescription": "Fix the login session timeout bug.",
        "taskDate": "2025-06-19",
        "category": "Bug Fix",
        "taskNumber": "active-2"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Write unit tests",
        "taskDescription": "Add unit tests for new features.",
        "taskDate": "2025-06-11",
        "category": "Testing",
        "taskNumber": "completed-2"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Charlie",
    "email": "charlie@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    },
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Research competitors",
        "taskDescription": "Gather information about top 5 competitors.",
        "taskDate": "2025-06-10",
        "category": "Research",
        "taskNumber": "failed-1"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "SEO Optimization",
        "taskDescription": "Improve SEO for landing page.",
        "taskDate": "2025-06-20",
        "category": "Marketing",
        "taskNumber": "active-1"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Social media calendar",
        "taskDescription": "Plan posts for the next 2 weeks.",
        "taskDate": "2025-06-18",
        "category": "Social Media",
        "taskNumber": "active-2"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "David",
    "email": "david@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 3,
      "failed": 0
    },
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Inventory check",
        "taskDescription": "Verify stock levels and reorder items.",
        "taskDate": "2025-06-14",
        "category": "Inventory",
        "taskNumber": "completed-1"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Warehouse audit",
        "taskDescription": "Perform audit on warehouse records.",
        "taskDate": "2025-06-13",
        "category": "Audit",
        "taskNumber": "completed-2"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Schedule deliveries",
        "taskDescription": "Organize delivery schedule for next week.",
        "taskDate": "2025-06-19",
        "category": "Logistics",
        "taskNumber": "active-1"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Vendor call",
        "taskDescription": "Discuss pricing with vendors.",
        "taskDate": "2025-06-12",
        "category": "Communication",
        "taskNumber": "completed-3"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Order packaging",
        "taskDescription": "Place order for new packaging materials.",
        "taskDate": "2025-06-20",
        "category": "Supplies",
        "taskNumber": "active-2"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Eve",
    "email": "eve@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 2,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Design banner",
        "taskDescription": "Create a promotional banner for summer sale.",
        "taskDate": "2025-06-16",
        "category": "Design",
        "taskNumber": "failed-1"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Review UX feedback",
        "taskDescription": "Go through recent feedback and list improvements.",
        "taskDate": "2025-06-18",
        "category": "UX/UI",
        "taskNumber": "active-1"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Fix navbar responsiveness",
        "taskDescription": "Ensure navbar works on all screen sizes.",
        "taskDate": "2025-06-15",
        "category": "Frontend",
        "taskNumber": "completed-1"
      },
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Update style guide",
        "taskDescription": "Refresh design documentation.",
        "taskDate": "2025-06-17",
        "category": "Documentation",
        "taskNumber": "active-2"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "User testing session",
        "taskDescription": "Observe users navigating the app.",
        "taskDate": "2025-06-19",
        "category": "Testing",
        "taskNumber": "completed-2"
      }
    ]
  }
];


const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123"
  }
];

export const setLocalStorage = () =>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () =>{
    const employees=JSON.parse(localStorage.getItem('employees'))
    const admin=JSON.parse(localStorage.getItem('admin'))
    return {employees, admin}
}