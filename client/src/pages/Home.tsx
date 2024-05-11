import { useState } from "react"
import { FaQuestionCircle } from 'react-icons/fa'

import Heading from "../container/Heading"

function Home() {
  const [hoverGender, setHoverGender] = useState<Boolean>(false)
  const [hoverAge, setHoverAge] = useState<Boolean>(false)
  const [hoverEducation, setHoverEducation] = useState<Boolean>(false)
  const [hoverSmoker, setHoverSmoker] = useState<Boolean>(false)
  const [hoverCigPerDay, setHoverCigPerDay] = useState<Boolean>(false)
  const [hoverBpMeds, setHoverBpMeds] = useState<Boolean>(false)
  const [hoverStroke, setHoverStroke] = useState<Boolean>(false)
  const [hoverHypertension, setHoverHypertension] = useState<Boolean>(false)
  const [hoverDiabetes, setHoverDiabetes] = useState<Boolean>(false)
  const [hoverCholesterol, setHoverCholesterol] = useState<Boolean>(false)
  const [hoverSystolic, setHoverSystolic] = useState<Boolean>(false)
  const [hoverDiastolic, setHoverDiastolic] = useState<Boolean>(false)
  const [hoverBmi, setHoverBmi] = useState<Boolean>(false)
  const [hoverHeartRate, setHoverHeartRate] = useState<Boolean>(false)
  const [hoverGlucose, setHoverGlucose] = useState<Boolean>(false)

  const [gender, setGender] = useState<number>(-1)
  const [age, setAge] = useState<number>(0)
  const [education, setEducation] = useState<number>(-1)
  const [smoker, setSmoker] = useState<number>(-1)
  const [cigPerDay, setCigPerDay] = useState<number>(0)
  const [bpMeds, setBpMeds] = useState<number>(-1)
  const [stroke, setStroke] = useState<number>(-1)
  const [hypertension, setHypertension] = useState<number>(-1)
  const [diabetes, setDiabetes] = useState<number>(-1)
  const [cholesterol, setCholesterol] = useState<number>(0)
  const [systolic, setSystolic] = useState<number>(0)
  const [diastolic, setDiastolic] = useState<number>(0)
  const [bmi, setBmi] = useState<number>(0)
  const [heartRate, setHeartRate] = useState<number>(0)
  const [glucose, setGlucose] = useState<number>(0)

  const [result, setResult] = useState<string>("No result yet")

  const predictHeartDisease = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      let response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gender,
          age,
          education,
          smoker,
          cigPerDay,
          bpMeds,
          stroke,
          hypertension,
          diabetes,
          cholesterol,
          systolic,
          diastolic,
          bmi,
          heartRate,
          glucose
        })
      })
      
      if (response.ok) {
        let data = await response.json()
        setResult(data.result)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Heading>Heart Disease Predictor</Heading>

      <form
        className="md:w-[37rem] mx-auto my-5 p-4 flex flex-col gap-3 bg-gray-50 border rounded-md shadow-sm"
        onSubmit={predictHeartDisease}
      >
        {/* input 1 */}
        <div className="relative flex h-10">
          <label className="w-1/4 flex items-center gap-1 font-medium text-gray-500">
            Gender
            <FaQuestionCircle
              className="text-xs cursor-pointer text-gray-500"
              onMouseEnter={() => setHoverGender(true)}
              onMouseLeave={() => setHoverGender(false)}
            />
            {hoverGender && (
              <div className="absolute -top-10 left-14 p-2 rounded-lg shadow-lg bg-gray-100">
                <p className="text-gray-600">What's your gender?</p>
              </div>
            )}
          </label>
          <select
            className="w-3/4 border px-3"
            value={gender === -1 ? "gender" : (gender === 1 ? "male" : "female")}
            onChange={(e) => setGender(e.target.value === "male" ? 1 : (e.target.value === "female" ? 0 : -1))}
          >
            <option value="gender">Gender</option>
            <option value={"male"}>Male</option>
            <option value={"female"}>Female</option>
          </select>

        </div>

        {/* input 2 */}
        <div className="relative flex h-10">
          <label className="w-1/4 flex items-center gap-1 font-medium text-gray-500">
            Age
            <FaQuestionCircle
              className="text-xs cursor-pointer"
              onMouseEnter={() => setHoverAge(true)}
              onMouseLeave={() => setHoverAge(false)}
            />
            {hoverAge && (
              <div className="absolute -top-10 left-14 p-2 rounded-lg shadow-lg bg-gray-100">
                <p className="text-gray-600">What's your age?</p>
              </div>
            )}
          </label>
          <input
            type="number"
            className="w-3/4 border px-3"
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value))}
          />
        </div>

        {/* input 3 */}
        <div className="relative flex h-10">
          <label className="w-1/4 flex items-center gap-1 font-medium text-gray-500">
            Education
            <FaQuestionCircle
              className="text-xs cursor-pointer"
              onMouseEnter={() => setHoverEducation(true)}
              onMouseLeave={() => setHoverEducation(false)}
            />
            {hoverEducation && (
              <div className="absolute -top-16 left-14 p-2 rounded-lg shadow-lg bg-gray-100">
                <p className="text-gray-600">What's your education level?</p>
              </div>
            )}
          </label>
          <select
            className="w-3/4 border px-3"
            value={education === -1 ? "education" : education}
            onChange={(e) => setEducation(e.target.value === "education" ? -1 : parseInt(e.target.value))}
          >
            <option value="education">What's your education</option>
            <option value={1.0}>Primary School</option>
            <option value={2.0}>High School</option>
            <option value={3.0}>College Graduate</option>
            <option value={4.0}>Post Graduate</option>
          </select>

        </div>

        {/* input 4 */}
        <div className="relative flex h-10">
          <label className="w-1/4 flex items-center gap-1 font-medium text-gray-500">
            Smoker
            <FaQuestionCircle
              className="text-xs cursor-pointer"
              onMouseEnter={() => setHoverSmoker(true)}
              onMouseLeave={() => setHoverSmoker(false)}
            />
            {hoverSmoker && (
              <div className="absolute -top-10 left-14 p-2 rounded-lg shadow-lg bg-gray-100">
                <p className="text-gray-600">Do you smoke cigarettes daily?</p>
              </div>
            )}
          </label>
          <select
            className="w-3/4 border px-3"
            value={smoker === -1 ? "smoker" : (smoker === 1 ? "yes" : "no")}
            onChange={(e) => setSmoker(e.target.value === "yes" ? 1 : (e.target.value === "no" ? 0 : -1))}
          >
            <option value="smoker">Are you a smoker</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>

        </div>

        {/* input 5 */}
        <div className="relative flex h-10">
          <label className="w-1/4 flex items-center gap-1 font-medium text-gray-500">
            Cigarettes Per Day
            <FaQuestionCircle
              className="text-xs cursor-pointer"
              onMouseEnter={() => setHoverCigPerDay(true)}
              onMouseLeave={() => setHoverCigPerDay(false)}
            />
            {hoverCigPerDay && (
              <div className="absolute -top-10 left-14 p-2 rounded-lg shadow-lg bg-gray-100">
                <p className="text-gray-600">How many cigarettes do you smoke every day?</p>
              </div>
            )}
          </label>
          <input
            type="number"
            className="w-3/4 border px-3"
            value={cigPerDay}
            onChange={(e) => setCigPerDay(parseInt(e.target.value))}
          />
        </div>

        {/* input 6 */}
        <div className="relative flex h-10">
          <label className="w-1/4 flex items-center gap-1 font-medium text-gray-500">
            Blood Pressure Medications
            <FaQuestionCircle
              className="text-xs cursor-pointer"
              onMouseEnter={() => setHoverBpMeds(true)}
              onMouseLeave={() => setHoverBpMeds(false)}
            />
            {hoverBpMeds && (
              <div className="absolute -top-10 left-14 p-2 rounded-lg shadow-lg bg-gray-100">
                <p className="text-gray-600">Are you on blood pressure medications?</p>
              </div>
            )}
          </label>
          <select
            className="w-3/4 border px-3"
            value={bpMeds === -1 ? "bpMeds" : (bpMeds === 1 ? "yes" : "no")}
            onChange={(e) => setBpMeds(e.target.value === "yes" ? 1 : 0)}
          >
            <option value="bpMeds">Blood Pressure Medications</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* input 7 */}
        <div className="relative flex h-10">
          <label className="w-1/4 flex items-center gap-1 font-medium text-gray-500">
            Stroke
            <FaQuestionCircle
              className="text-xs cursor-pointer"
              onMouseEnter={() => setHoverStroke(true)}
              onMouseLeave={() => setHoverStroke(false)}
            />
            {hoverStroke && (
              <div className="absolute -top-10 left-14 p-2 rounded-lg shadow-lg bg-gray-100">
                <p className="text-gray-600">Have you ever had a stroke?</p>
              </div>
            )}
          </label>
          <select
            className="w-3/4 border px-3"
            value={stroke === -1 ? "stroke" : (stroke === 1 ? "yes" : "no")}
            onChange={(e) => setStroke(e.target.value === "yes" ? 1 : 0)}
          >
            <option value="stroke">Have you ever had strokes</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* input 8 */}
        <div className="relative flex h-10">
          <label className="w-1/4 flex items-center gap-1 font-medium text-gray-500">
            Hypertension
            <FaQuestionCircle
              className="text-xs cursor-pointer"
              onMouseEnter={() => setHoverHypertension(true)}
              onMouseLeave={() => setHoverHypertension(false)}
            />
            {hoverHypertension && (
              <div className="absolute -top-10 left-14 p-2 rounded-lg shadow-lg bg-gray-100">
                <p className="text-gray-600">Do you have hypertension?</p>
              </div>
            )}
          </label>
          <select
            className="w-3/4 border px-3"
            value={hypertension === -1 ? "hypertension" : (hypertension === 1 ? "yes" : "no")}
            onChange={(e) => setHypertension(e.target.value === "yes" ? 1 : 0)}
          >
            <option value="hypertension">Do you have hypertension</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* input 9 */}
        <div className="relative flex h-10">
          <label className="w-1/4 flex items-center gap-1 font-medium text-gray-500">
            Diabetes
            <FaQuestionCircle
              className="text-xs cursor-pointer"
              onMouseEnter={() => setHoverDiabetes(true)}
              onMouseLeave={() => setHoverDiabetes(false)}
            />
            {hoverDiabetes && (
              <div className="absolute -top-10 left-14 p-2 rounded-lg shadow-lg bg-gray-100">
                <p className="text-gray-600">Do you have diabetes?</p>
              </div>
            )}
          </label>
          <select
            className="w-3/4 border px-3"
            value={diabetes === -1 ? "diabetes" : (diabetes === 1 ? "yes" : "no")}
            onChange={(e) => setDiabetes(e.target.value === "yes" ? 1 : 0)}
          >
            <option value="diabetes">Do you have diabetes</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* input 10 */}
        <div className="relative flex h-10">
          <label className="w-1/4 flex items-center gap-1 font-medium text-gray-500">
            Cholesterol level
            <FaQuestionCircle
              className="text-xs cursor-pointer"
              onMouseEnter={() => setHoverCholesterol(true)}
              onMouseLeave={() => setHoverCholesterol(false)}
            />
            {hoverCholesterol && (
              <div className="absolute -top-10 left-14 p-2 rounded-lg shadow-lg bg-gray-100">
                <p className="text-gray-600">What's your cholesterol level?</p>
              </div>
            )}
          </label>
          <input
            type="number"
            className="w-3/4 border px-3"
            value={cholesterol}
            onChange={(e) => setCholesterol(parseInt(e.target.value))}
          />
        </div>

        {/* input 11 */}
        <div className="relative flex h-10">
          <label className="w-1/4 flex items-center gap-1 font-medium text-gray-500">
            Systolic BP
            <FaQuestionCircle
              className="text-xs cursor-pointer"
              onMouseEnter={() => setHoverSystolic(true)}
              onMouseLeave={() => setHoverSystolic(false)}
            />
            {hoverSystolic && (
              <div className="absolute -top-10 left-14 p-2 rounded-lg shadow-lg bg-gray-100">
                <p className="text-gray-600">What's your Systolic blood pressure?</p>
              </div>
            )}
          </label>
          <input
            type="number"
            className="w-3/4 border px-3"
            value={systolic}
            onChange={(e) => setSystolic(parseInt(e.target.value))}
          />
        </div>

        {/* input 12 */}
        <div className="relative flex h-10">
          <label className="w-1/4 flex items-center gap-1 font-medium text-gray-500">
            Diastolic BP
            <FaQuestionCircle
              className="text-xs cursor-pointer"
              onMouseEnter={() => setHoverDiastolic(true)}
              onMouseLeave={() => setHoverDiastolic(false)}
            />
            {hoverDiastolic && (
              <div className="absolute -top-10 left-14 p-2 rounded-lg shadow-lg bg-gray-100">
                <p className="text-gray-600">What's your Diastolic blood pressure?</p>
              </div>
            )}
          </label>
          <input
            type="number"
            className="w-3/4 border px-3"
            value={diastolic}
            onChange={(e) => setDiastolic(parseInt(e.target.value))}
          />
        </div>

        {/* input 13 */}
        <div className="relative flex h-10">
          <label className="w-1/4 flex items-center gap-1 font-medium text-gray-500">
            BMI
            <FaQuestionCircle
              className="text-xs cursor-pointer"
              onMouseEnter={() => setHoverBmi(true)}
              onMouseLeave={() => setHoverBmi(false)}
            />
            {hoverBmi && (
              <div className="absolute -top-10 left-14 p-2 rounded-lg shadow-lg bg-gray-100">
                <p className="text-gray-600">What's your BMI (Body Mass Index)</p>
              </div>
            )}
          </label>
          <input
            type="number"
            className="w-3/4 border px-3"
            value={bmi}
            onChange={(e) => setBmi(parseInt(e.target.value))}
          />
        </div>

        {/* input 14 */}
        <div className="relative flex h-10">
          <label className="w-1/4 flex items-center gap-1 font-medium text-gray-500">
            Heart Rate
            <FaQuestionCircle
              className="text-xs cursor-pointer"
              onMouseEnter={() => setHoverHeartRate(true)}
              onMouseLeave={() => setHoverHeartRate(false)}
            />
            {hoverHeartRate && (
              <div className="absolute -top-10 left-14 p-2 rounded-lg shadow-lg bg-gray-100">
                <p className="text-gray-600">What's your resting heart rate?</p>
              </div>
            )}
          </label>
          <input
            type="number"
            className="w-3/4 border px-3"
            value={heartRate}
            onChange={(e) => setHeartRate(parseInt(e.target.value))}
          />
        </div>

        {/* input 15 */}
        <div className="relative flex h-10">
          <label className="w-1/4 flex items-center gap-1 font-medium text-gray-500">
            Glucose
            <FaQuestionCircle
              className="text-xs cursor-pointer"
              onMouseEnter={() => setHoverGlucose(true)}
              onMouseLeave={() => setHoverGlucose(false)}
            />
            {hoverGlucose && (
              <div className="absolute -top-10 left-14 p-2 rounded-lg shadow-lg bg-gray-100">
                <p className="text-gray-600">What's your fasting blood sugar level?</p>
              </div>
            )}
          </label>
          <input
            type="number"
            className="w-3/4 border px-3"
            value={glucose}
            onChange={(e) => setGlucose(parseInt(e.target.value))}
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-5 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300"
        >
          Predict
        </button>
      </form>
    </>
  )
}

export default Home
