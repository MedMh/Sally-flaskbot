from flask import Flask
from flaskbot.sallybot import Sally

app = Flask(__name__)

app.config['SECRET_KEY'] = 'nvlfvblsdfbvlshdbvvsmdljbblshgb'

bot = Sally()

from flaskbot import routes