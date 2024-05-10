from flask import Flask, request, jsonify
import pickle

app = Flask(__name__)

# Load the ML model
with open("heart_model.pkl", "rb") as f:
    model = pickle.load(f)

@app.route("/predict", methods=["POST"])
def predict():
    # Get data from request body
    data = request.json
    
    # Extract data from JSON
    sex = data['sex']
    age = data['age']
    education = data['education']
    currentSmoker = data['currentSmoker']
    cigsPerDay = data['cigsPerDay']
    BPMeds = data['BPMeds']
    prevalentStroke = data['prevalentStroke']
    prevalentHyp = data['prevalentHyp']
    diabetes = data['diabetes']
    totChol = data['totChol']
    sysBP = data['sysBP']
    diaBP = data['diaBP']
    BMI = data['BMI']
    heartRate = data['heartRate']
    glucose = data['glucose']

    # Make prediction
    prediction = model.predict([[sex, age, education, currentSmoker, cigsPerDay, BPMeds, prevalentStroke, prevalentHyp, diabetes, totChol, sysBP, diaBP, BMI, heartRate, glucose]])

    # Return prediction as JSON response
    if prediction[0] == 1:
        return jsonify({"result": "Heart disease"})
    else:
        return jsonify({"result": "No heart disease"})

if __name__ == "__main__":
    app.run(debug=True)
