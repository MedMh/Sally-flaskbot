from flaskbot import app

@app.route('/')
def home():
    return "<h1>this is a flask bot. I'm under construction right now but I will be here soon!</h1>"