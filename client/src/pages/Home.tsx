import { Link } from "react-router-dom"

function Home() {
  return (
    <section className="w-[50rem]">
      {/* input 1 */}
      <div>
        <label>Gender</label>
        <select>
          <option value="gender">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      {/* input 2 */}
      <div>
        <label>Age</label>
        <input type="number" />
      </div>

      {/* input 3 */}
      <div>
        <label>Eduction</label>
        <select>
          <option value="education">Education</option>
          <option value="val1">1.0</option>
          <option value="val2">2.0</option>
          <option value="val3">3.0</option>
          <option value="val4">4.0</option>
        </select>
      </div>

      {/* input 4 */}
      <div>
        <label>Current Smoker</label>
        <select>
          <option value="smoker">Smoker</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* input 5 */}
      <div>
        <label>Cigarets Per Day</label>
        <input type="number" />
      </div>

      {/* input 6 */}
      <div>
        <label>Are you on BP Medications?</label>
        <select>
          <option value="bpMeds">BP Meds</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* input 7 */}
      <div>
        <label>Have you had stroke</label>
        <select>
          <option value="stroke">Stroke</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* input 8 */}
      <div>
        <label>Do you have hypertension?</label>
        <select>
          <option value="hypertension">Hypertension</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* input 9 */}
      <div>
        <label>Have you had diabetes?</label>
        <select>
          <option value="diabetes">Diabetes</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* input 10 */}
      <div>
        <label>What's you cholesterol level?</label>
        <input type="number" />
      </div>

      {/* input 11 */}
      <div>
        <label>What's your Systolic BP?</label>
        <input type="number" />
      </div>

      {/* input 12 */}
      <div>
        <label>What's your Diastolic BP?</label>
        <input type="number" />
      </div>

      {/* input 13 */}
      <div>
        <label>What's your BMI?</label>
        <input type="number" />
      </div>

      {/* input 14 */}
      <div>
        <label>Heart Rate</label>
        <input type="number" />
      </div>

      {/* input 15 */}
      <div>
        <label>Glucose Level</label>
        <input type="number" />
      </div>

      <div>
        <Link to="#">Predict</Link>
      </div>
    </section>
  )
}

export default Home