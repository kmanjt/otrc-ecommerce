## Quickstart Django & React Repository

This repository contains a preconfigured Django 4.0.5 with React project.
Django comes pre-configured to use React's build files as its templates and automatically takes them into the 'static/' directory using python manage.py collectstatic

This repository has Django Rest Framework, Django Cors Headers and Django Rest SimpleJWT setup for you in the settings.py

The React frontend comes with TailwindCSS pre-installed.

### Setting up the environment

1. Clone the repository

```bash
git clone https://github.com/kmanjt/django-react-quickstart.git
```

2. Create a virtual environment and activate it

```bash
python -m venv venv
source venv/bin/activate
```

3. Install the required packages from the backend/ directory

```
pip install -r requirements.txt
```

4. Set up the environment variables which are shown in .env.example in backend/ directory

5. Set up the database

```bash
python manage.py migrate
```

6. Run the development servers (from backend/ and frontend/)

```bash
python manage.py runserver
```

```bash
npm start
```
