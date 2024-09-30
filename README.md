<h1 align="center"> Jammini </h1><br>
<p align="center">
    <img width="200" alt="Jammini logo" src="https://github.com/user-attachments/assets/11a759b2-0b44-4e62-8746-841df3634cfd">
</p>

<p align="center"> 
We are building a live, competitive English-learning game platform that makes preparation for standardized English exams addictive and fun by allowing users to challenge their friends while mastering difficult exam concepts.
</p>

## ⚡️ Quick start

### Backend

First, set up a virtual environment and download required files:

```bash
cd backend
python3 -m venv env
source env/bin/activate
pip install -r requirements.txt
```

Once the files are installed, you can run the backend code: 🎉

```bash
python manage.py runserver
```

### Frontend

You can run the frontend code with these 3 lines: 🎉

```bash
cd frontend
npm install
npm run dev
```

## 🧱 Architecture

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