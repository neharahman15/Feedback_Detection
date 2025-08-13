#  Feedback Detection App

Allows users to register, log in, and submit feedback, with AI-powered emotion detection.  
Built with **Django REST Framework** (backend) and **React** (frontend).

---

##  Features
- **User Authentication** (Register, Login, Logout) using Django session-based auth.
- **Feedback Submission** with real-time **sentiment analysis**.
- **Emotion Detection API** using a trained machine learning model.
- REST API built with **Django REST Framework**.
- Frontend built with **React** (Vite).
- Secure password handling with Django's built-in password validation.

---

## Tech Stack

**Backend:**
- Python 3.x
- Django 5.x
- Django REST Framework
- Scikit-learn (for ML model)
- joblib (for model saving/loading)

**Frontend:**
- React (Vite)
- Axios (API calls)

---

##  Project Structure
```plaintext
feedback_app_project/   # Django project root
│
├── accounts/           # Authentication & Feedback app
│   ├── models.py       # Feedback model
│   ├── serializers.py  # DRF serializers for User & Feedback
│   ├── views.py        # Signup, Signin, Feedback APIs
│   ├── ml_utils.py     # Emotion prediction logic
│
├── emotion_detection/  # ML model and related files
│   ├── emotion_model.pkl
│
├── frontend/           # React app root
│   ├── src/
│   │   ├── Register.jsx
│   │   ├── Login.jsx
│   │   ├── App.jsx
│
└── manage.py



Model is stored in
emotion_detection/emotion_model.pkl
