from flaskbot import app, bot
from flask import render_template, url_for, request, jsonify

@app.route('/')
@app.route('/home')
def home():
    return render_template('index.html')


@app.route('/bot', methods=['POST'])
def chat():
    content = request.get_json()
    message = content['message']
    bot_answer = bot.getResponse(message)
    return jsonify({"bot_response": bot_answer})