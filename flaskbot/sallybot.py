from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer

class Sally:
    bot = None
    def __init__(self):
        self.bot = ChatBot('Sally')
        self.train()
    
    def train(self):
        trainer = ChatterBotCorpusTrainer(self.bot)
        trainer.train("chatterbot.corpus.english")
    
    def getResponse(self, message):
        try:
            bot_input = self.bot.get_response(message)
            return str(bot_input)
        except(KeyboardInterrupt, EOFError, SystemExit):
            return "Sorry but I can't understand you!"