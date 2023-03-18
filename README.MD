## Off The Road Collective Ecommerce Full Stack



### Setting up the environment

1. Clone the repository

```bash
git clone https://github.com/kmanjt/otrc-ecommerce.git
```

2. Create a virtual environment in the root directory of the project and activate it

- Create virtual environment
```bash
python -m venv venv
```
- In Linux, to activate venv:
```bash
source venv/bin/activate
```
- In Windows, to activate venv:
```bash
.\venv\Scripts\activate.bat
```

3. Install the required packages from the backend/ and frontend/ directory

```bash
pip install -r requirements.txt
```

```bash
npm install
```

4. Make a new .env file in the backend directory containing the environment variables which are shown in .env.example in backend/ directory 

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
- Shopping cart
- Checkout
- Account login / dashboard

### Frontend Pages
- Home
- Community 

### Backend Models
- Product model with supporting foreign key models
- Review model
- Order model
- Cart item model
- Shipping Address Model
- Account

### Contributors 
| [kmanjt](https://github.com/kmanjt)| [rbanik2212](https://github.com/rbanik2212) | [calcifer2002](https://github.com/Calcifer2002) | [sio-the-deal](https://github.com/Sio-The-Deal) | [ngowran](https://github.com/ngowran) | [CheezyHint](https://github.com/ChoaHin)|
| ------------- | ------------- | ------------- | ------------- |------------- | ------------- |
