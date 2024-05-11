from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)

with open("heart_model.pkl", "rb") as f:
    model = pickle.load(f)


@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    sex = data["gender"]
    age = data["age"]
    education = data["education"]
    currentSmoker = data["smoker"]
    cigsPerDay = data["cigPerDay"]
    BPMeds = data["bpMeds"]
    prevalentStroke = data["stroke"]
    prevalentHyp = data["hypertension"]
    diabetes = data["diabetes"]
    totChol = data["cholesterol"]
    sysBP = data["systolic"]
    diaBP = data["diastolic"]
    BMI = data["bmi"]
    heartRate = data["heartRate"]
    glucose = data["glucose"]

    prediction = model.predict(
        [
            [
                sex,
                age,
                education,
                currentSmoker,
                cigsPerDay,
                BPMeds,
                prevalentStroke,
                prevalentHyp,
                diabetes,
                totChol,
                sysBP,
                diaBP,
                BMI,
                heartRate,
                glucose,
            ]
        ]
    )

    if prediction[0] == 0:
        return jsonify({"result": "No heart disease"}), 200
    else:
        return jsonify({"result": "Heart disease"}), 200


if __name__ == "__main__":
    app.run()
