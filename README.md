# 📅 EventSync - Professional Event Scheduler

A high-performance, full-stack event management system built for the **Internship Task-1**. This application allows users to schedule and view events with real-time cloud synchronization and a premium dark-mode interface.

---

## 🚀 Key Features

* **Real-time Cloud Database:** Integrated with **MongoDB Atlas** for persistent data storage, ensuring events are saved securely in the cloud.
* **Smart Backend Validation:** Logic prevents scheduling events in the past and enforces title length limits to maintain data integrity.
* **Automated Sorting:** Events are automatically retrieved and displayed in chronological order (soonest first).
* **Premium Dark UI:** Developed with **Tailwind CSS** featuring glassmorphism effects, a fully responsive layout, and **SweetAlert2** for professional user notifications.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, Tailwind CSS, JavaScript (ES6+), SweetAlert2.
* **Backend:** Node.js, Express.js.
* **Database:** MongoDB Atlas (Cloud).
* **Environment Management:** Dotenv (for secure API keys).

---

## 📋 Compliance with Requirements

| Requirement | Implementation |
| :--- | :--- |
| **Framework** | Express.js Backend |
| **GET /events** | Lists all events from the cloud database |
| **POST /events** | Adds new events via JSON payload |
| **Fields** | ID, Title, Date (YYYY-MM-DD), Description |
| **Sorting** | Events sorted by date (soonest first) |
| **Validation** | Date must not be in the past |

---

