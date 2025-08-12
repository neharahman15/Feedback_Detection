import os
import pickle

model_path = os.path.join(os.path.dirname(__file__), 'emotion_model.pkl')
with open(model_path, 'rb') as f:
    emotion_model = pickle.load(f)

def predict_emotion(text):
    prediction = emotion_model.predict([text])
    return prediction[0]
