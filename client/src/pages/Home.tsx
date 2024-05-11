import { Link } from "react-router-dom"
import { FaQuestionCircle } from 'react-icons/fa'
import { useState } from "react"
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

  const [gender, setGender] = useState<string>('')
  const [age, setAge] = useState<number>(0)
  const [education, setEducation] = useState<number>(0)
  const [smoker, setSmoker] = useState<string>('')
  const [cigPerDay, setCigPerDay] = useState<number>(0)
  const [bpMeds, setBpMeds] = useState<string>('')
  const [stroke, setStroke] = useState<string>('')
  const [hypertension, setHypertension] = useState<string>('')
  const [diabetes, setDiabetes] = useState<string>('')
  const [cholesterol, setCholesterol] = useState<number>(0)
  const [systolic, setSystolic] = useState<number>(0)
  const [diastolic, setDiastolic] = useState<number>(0)
  const [bmi, setBmi] = useState<number>(0)
  const [heartRate, setHeartRate] = useState<number>(0)
  const [glucose, setGlucose] = useState<number>(0)

  return (
    <>
      <Heading>Heart Disease Predictor</Heading>

      <section className="md:w-[37rem] mx-auto my-5 p-4 flex flex-col gap-3 bg-gray-50 border rounded-md shadow-sm">
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
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="gender">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
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
            Eduction
            <FaQuestionCircle
              className="text-xs cursor-pointer"
              onMouseEnter={() => setHoverEducation(true)}
              onMouseLeave={() => setHoverEducation(false)}
            />
            {hoverEducation && (
              <div className="absolute -top-16 left-14 p-2 rounded-lg shadow-lg bg-gray-100">
                <p className="text-gray-600">What's your education level [Primary School / High School / College Graduate / Post Graduate]?</p>
              </div>
            )}
          </label>
          <select
            className="w-3/4 border px-3"
            value={education}
            onChange={(e) => setEducation(parseInt(e.target.value))}
          >
            <option value="education">What's your education</option>
            <option value="val1">1.0</option>
            <option value="val2">2.0</option>
            <option value="val3">3.0</option>
            <option value="val4">4.0</option>
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
                <p className="text-gray-600">Do you smoke cigarets daily?</p>
              </div>
            )}
          </label>
          <select
            className="w-3/4 border px-3"
            value={smoker}
            onChange={(e) => setSmoker(e.target.value)}
          >
            <option value="smoker">Are you a smoker</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* input 5 */}
        <div className="relative flex h-10">
          <label className="w-1/4 flex items-center gap-1 font-medium text-gray-500">
            Cigs/Day
            <FaQuestionCircle
              className="text-xs cursor-pointer"
              onMouseEnter={() => setHoverCigPerDay(true)}
              onMouseLeave={() => setHoverCigPerDay(false)}
            />
            {hoverCigPerDay && (
              <div className="absolute -top-10 left-14 p-2 rounded-lg shadow-lg bg-gray-100">
                <p className="text-gray-600">How many cigarets do you smoke everyday?</p>
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
            BP Meds
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
            value={bpMeds}
            onChange={(e) => setBpMeds(e.target.value)}
          >
            <option value="bpMeds">Blood Pressure Medications</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* input 7 */}
        <div className="relative flex h-10">
          <label className="w-1/4 flex items-center gap-1 font-medium text-gray-500">
            Strokes
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
            value={stroke}
            onChange={(e) => setStroke(e.target.value)}
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
            value={hypertension}
            onChange={(e) => setHypertension(e.target.value)}
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
            value={diabetes}
            onChange={(e) => setDiabetes(e.target.value)}
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
            Sys BP
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
            Dia BP
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
                <p className="text-gray 600">What's your BMI (Body Mass Index)</p>
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
                <p className="text-gray-600">What's your heart rate?</p>
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
            Glucose Level
            <FaQuestionCircle
              className="text-xs cursor-pointer"
              onMouseEnter={() => setHoverGlucose(true)}
              onMouseLeave={() => setHoverGlucose(false)}
            />
            {hoverGlucose && (
              <div className="absolute -top-10 left-14 p-2 rounded-lg shadow-lg bg-gray-100">
                <p className="text-gray-600">What's your glucose level?</p>
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

        <div className="p-5 flex justify-center">
          <Link
            to="#"
            className="w-full text-center text-white font-semibold bg-blue-500 p-2 rounded shadow-md hover:bg-blue-600 transition-all duration-300 ease-in-out cursor-pointer hover:scale-105"
          >
            Predict
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home