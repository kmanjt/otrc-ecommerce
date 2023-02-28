## Off The Road Collective Ecommerce Full Stack



### Setting up the environment

1. Clone the repository

```bash
git clone https://github.com/kmanjt/otrc-ecommerce.git
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

### Frontend Components
- Nav
- Hero
- Footer
- Mission
- About
- Product cards
- Shopping card
- Account login / dashboard

### Backend Models
- Card
- Account
- Inventory
