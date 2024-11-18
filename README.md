<h1 align="center"> Jammini </h1><br>
<p align="center">
    <img width="200" alt="Jammini logo" src="https://github.com/user-attachments/assets/ac8504a6-ad3f-4125-bc1b-1ccaed90f3e3">
</p>

<p align="center"> 
We are building a live, competitive English-learning game platform that makes preparation for standardized English exams addictive and fun by allowing users to challenge their friends while mastering difficult exam concepts.
</p>

## ⚡️ Quick start

### Backend

Navigate to the backend directory, create a virtual environment, and install the dependencies:

```bash
cd backend
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
```

Run the backend server:

```bash
python manage.py runserver
```

### Frontend

Navigate to the frontend directory, install dependencies, and run the frontend:

```bash
cd frontend
npm install
npm run dev
```

## 🧱 Architecture
<img alt="Jammini logo" src="https://github.com/user-attachments/assets/f6883d4a-af4b-4eb8-b3d8-2f9f596cb572">

## 📁 Schema

### User Table

| Column      | Data Type | Description                    |
|-------------|------------|--------------------------------|
| user_id (PK)| INT        | Unique identifier for the user |
| name        | VARCHAR    | Name of the user               |
| password    | VARCHAR    | User's password                |

### StudyPreference Table

| Column             | Data Type | Description                    |
|--------------------|------------|--------------------------------|
| preference_id (PK) | INT        | Unique identifier for preference|
| preference_name    | VARCHAR    | Name of the study preference    |

### UserStudyPreference Table

| Column             | Data Type | Description                             |
|--------------------|------------|-----------------------------------------|
| user_id (FK)       | INT        | Foreign key referencing User            |
| preference_id (FK) | INT        | Foreign key referencing StudyPreference |

### GameSession Table

| Column        | Data Type | Description                    |
|---------------|------------|--------------------------------|
| session_id (PK)| INT        | Unique identifier for the session|
| user_id (FK)  | INT        | Foreign key referencing User    |
| start_time    | DATETIME   | Start time of the game session  |
| end_time      | DATETIME   | End time of the game session    |

### Question Table

| Column         | Data Type | Description                    |
|----------------|------------|--------------------------------|
| question_id (PK)| INT        | Unique identifier for the question|
| question_text  | TEXT       | Text of the question           |
| difficulty_level| ENUM       | Difficulty level (Easy, Medium, Hard) |

### GameSessionQuestion Table

| Column          | Data Type | Description                    |
|-----------------|------------|--------------------------------|
| session_id (FK) | INT        | Foreign key referencing GameSession |
| question_id (FK)| INT        | Foreign key referencing Question |
| was_correct     | BOOLEAN    | Whether the user answered correctly |
| timestamp_asked | DATETIME   | Time when the question was asked |