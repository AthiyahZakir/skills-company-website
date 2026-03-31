import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  const [formData, setFormData] = useState({
    program: '',
    fullName: '', ic: '', dob: '',
    gender: '', maritalStatus: '', race: '', raceOther: '',
    address: '', postcode: '', city: '', state: '',
    phone: '', mobile: '', email: '',
    guardianName: '', guardianIc: '', guardianPhone: '', guardianRelation: '',
    guardianAddress: '', guardianPostcode: '', guardianCity: '', guardianState: '',
    qualification: '', institution: '', specialization: '', startDate: '', endDate: '',
    disability: '',
    heardFrom: '', heardFromOther: '',
    declarationName: '', declarationDate: '', declarationAgreed: false,
  })

  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.declarationAgreed) {
      alert('Please agree to the declaration before submitting.')
      return
    }
    setSubmitting(true)
    try {
      const response = await fetch('http://localhost:5000/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      if (response.ok) setSubmitted(true)
      else alert('Something went wrong. Please try again.')
    } catch {
      alert('Could not connect to server. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const input = `w-full bg-gray-50 border border-gray-300 rounded-xl px-4 py-3
    text-gray-900 text-sm font-medium placeholder-gray-300
    focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white transition`
  const label = "block text-sm font-bold text-gray-900 mb-1"
  const req = <span className="text-red-600 ml-0.5">*</span>

  const SectionDivider = ({ icon, title }) => (
    <div className="flex items-center gap-3 mb-5 mt-8">
      <span className="text-xs font-black tracking-widest uppercase text-red-600 whitespace-nowrap">
        {icon} {title}
      </span>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  )

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        <div className="bg-white p-12 rounded-3xl shadow-2xl text-center max-w-md">
          <div className="text-6xl mb-5">✅</div>
          <h2 className="text-2xl font-black text-gray-900 mb-3">Application Submitted!</h2>
          <p className="text-gray-500 leading-relaxed">We'll be in touch soon. Welcome to Teja Skills!</p>
          <Link to="/"
            className="inline-block mt-6 px-6 py-3 rounded-full text-sm font-bold text-white bg-red-600 hover:bg-red-700 transition">
            ← Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap');
        .signup-wrap { display: grid; grid-template-columns: 1fr 1.5fr; min-height: 100vh; }
        .left-panel {
          background: linear-gradient(160deg, #111111 0%, #1a1a1a 50%, #222222 100%);
          padding: 40px 40px;
          display: flex; flex-direction: column;
          justify-content: space-between;
          position: sticky; top: 0; height: 100vh; overflow: hidden;
        }
        .left-panel::before {
          content: '';
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(circle at 30% 70%, rgba(220,38,38,0.12), transparent 60%),
                      radial-gradient(circle at 80% 20%, rgba(255,255,255,0.04), transparent 50%);
        }
        .right-panel { background: #f9f9f9; padding: 56px 56px; overflow-y: auto; }
        .btn-submit {
          width: 100%; padding: 16px; border-radius: 50px; margin-top: 8px;
          background: linear-gradient(135deg, #dc2626, #991b1b);
          color: white; font-family: 'Nunito', sans-serif;
          font-weight: 800; font-size: 1rem; border: none; cursor: pointer;
          transition: all .3s; box-shadow: 0 6px 20px rgba(220,38,38,.3);
        }
        .btn-submit:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(220,38,38,.4); }
        .btn-submit:disabled { opacity: .6; cursor: not-allowed; transform: none; }
        .radio-opt { accent-color: #dc2626; width: 16px; height: 16px; }
        @media (max-width: 960px) {
          .signup-wrap { grid-template-columns: 1fr; }
          .left-panel { display: none; }
          .right-panel { padding: 40px 24px; }
        }
      `}</style>

      <div className="signup-wrap">

        {/* LEFT PANEL */}
        <div className="left-panel relative">
          <div className="relative z-10">
            <Link to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-red-600 hover:bg-red-700 transition shadow-lg">
              ← Home
            </Link>
          </div>

          <div className="relative z-10 mt-auto">
            <div className="w-16 h-1 bg-red-600 rounded-full mb-6" />
            <p className="text-gray-400 text-sm font-medium leading-relaxed max-w-xs">
              Fill in your details to apply for a program. Our team will reach out within 3–5 working days.
            </p>
          </div>

          <div style={{
            position: 'absolute', width: 300, height: 300, borderRadius: '50%',
            background: 'rgba(220,38,38,0.07)', bottom: -80, right: -80, pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute', width: 200, height: 200, borderRadius: '50%',
            background: 'rgba(255,255,255,0.03)', top: '30%', left: -60, pointerEvents: 'none'
          }} />
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">
          <span className="text-xs font-black tracking-widest uppercase text-red-600 block mb-2">
            Student Enrolment
          </span>
          <h1 className="text-3xl font-black text-gray-900 mb-1">Student Application</h1>
          <p className="text-sm text-gray-400 font-medium mb-8">
            All fields marked <span className="text-red-600">*</span> are required.
          </p>

          <form onSubmit={handleSubmit} noValidate>

            {/* PROGRAMME */}
            <div className="mb-4">
              <label className={label}>Programme Applied {req}</label>
              <select name="program" required value={formData.program} onChange={handleChange} className={input}>
                <option value=""></option>
                <option>Digital Marketing</option>
                <option>Graphic Design</option>
                <option>Web Development</option>
                <option>Data Analysis</option>
              </select>
            </div>

            {/* PERSONAL DETAILS */}
            <SectionDivider icon="👤" title="Personal Details" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className={label}>Full Name {req}</label>
                <input type="text" name="fullName" required value={formData.fullName} onChange={handleChange}
                  placeholder="as in NRIC / Passport" className={input} />
              </div>
              <div>
                <label className={label}>NRIC/Passport No. {req}</label>
                <input type="text" name="ic" required value={formData.ic} onChange={handleChange} className={input} />
              </div>
              <div>
                <label className={label}>Date of Birth {req}</label>
                <input type="date" name="dob" required value={formData.dob} onChange={handleChange} className={input} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
              {[
                { label: 'Gender', name: 'gender', options: ['Female', 'Male'] },
                { label: 'Marital Status', name: 'maritalStatus', options: ['Single', 'Married'] },
                { label: 'Race', name: 'race', options: ['Malay', 'Chinese', 'Indian'] },
              ].map(({ label: lbl, name, options }) => (
                <div key={name}>
                  <label className={label}>{lbl} {req}</label>
                  <div className="space-y-2 mt-2">
                    {options.map(o => (
                      <label key={o} className="flex items-center gap-2 text-sm text-gray-700 font-semibold cursor-pointer">
                        <input type="radio" name={name} value={o} checked={formData[name] === o}
                          onChange={handleChange} className="radio-opt" />
                        {o}
                      </label>
                    ))}
                    {name === 'race' && (
                      <div className="flex items-center gap-2">
                        <input type="radio" name="race" value="Other" checked={formData.race === 'Other'}
                          onChange={handleChange} className="radio-opt" />
                        <input type="text" name="raceOther" placeholder="Other"
                          value={formData.raceOther} onChange={handleChange}
                          className={`${input} py-1.5 text-xs`} />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CONTACT DETAILS */}
            <SectionDivider icon="📞" title="Contact Details" />

            <div className="mb-4">
              <label className={label}>Correspondence Address {req}</label>
              <textarea name="address" required rows={2} value={formData.address}
                onChange={handleChange} className={`${input} resize-none`} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {[['postcode','Postcode','text'],['city','City/Town','text'],['state','State','text'],['phone','Telephone No.','tel']].map(([n,l,t]) => (
                <div key={n}>
                  <label className={label}>{l} {req}</label>
                  <input type={t} name={n} required value={formData[n]} onChange={handleChange} className={input} />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={label}>Mobile Phone No. {req}</label>
                <input type="tel" name="mobile" required placeholder="01X-XXXXXXX"
                  value={formData.mobile} onChange={handleChange} className={input} />
              </div>
              <div>
                <label className={label}>Email Address</label>
                <input type="email" name="email" placeholder="example@email.com"
                  value={formData.email} onChange={handleChange} className={input} />
              </div>
            </div>

            {/* PARENT / GUARDIAN */}
            <SectionDivider icon="👨‍👩‍👧" title="Parent / Guardian / Spouse Details" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className={label}>Full Name {req}</label>
                <input type="text" name="guardianName" required placeholder="as in NRIC / Passport"
                  value={formData.guardianName} onChange={handleChange} className={input} />
              </div>
              <div>
                <label className={label}>NRIC/Passport No.</label>
                <input type="text" name="guardianIc" value={formData.guardianIc} onChange={handleChange} className={input} />
              </div>
              <div>
                <label className={label}>Mobile No. {req}</label>
                <input type="tel" name="guardianPhone" required value={formData.guardianPhone} onChange={handleChange} className={input} />
              </div>
              <div>
                <label className={label}>Relationship {req}</label>
                <select name="guardianRelation" required value={formData.guardianRelation} onChange={handleChange} className={input}>
                  <option value=""></option>
                  <option>Mother</option><option>Father</option>
                  <option>Guardian</option><option>Spouse</option><option>Other</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className={label}>Permanent Address {req}</label>
              <textarea name="guardianAddress" required rows={2} value={formData.guardianAddress}
                onChange={handleChange} className={`${input} resize-none`} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {[['guardianPostcode','Postcode'],['guardianCity','City/Town'],['guardianState','State']].map(([n,l]) => (
                <div key={n}>
                  <label className={label}>{l} {req}</label>
                  <input type="text" name={n} required value={formData[n]} onChange={handleChange} className={input} />
                </div>
              ))}
            </div>

            {/* EDUCATION */}
            <SectionDivider icon="🎓" title="Education Background" />
            <p className="text-xs text-gray-400 mb-4 -mt-3">(Please list the highest qualification first)</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className={label}>Qualification/Achievement {req}</label>
                <input type="text" name="qualification" required value={formData.qualification} onChange={handleChange} className={input} />
              </div>
              <div>
                <label className={label}>School/Institution {req}</label>
                <input type="text" name="institution" required value={formData.institution} onChange={handleChange} className={input} />
              </div>
              <div>
                <label className={label}>Specialization</label>
                <input type="text" name="specialization" value={formData.specialization} onChange={handleChange} className={input} />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className={label}>Start Date {req}</label>
                <input type="date" name="startDate" required value={formData.startDate} onChange={handleChange} className={input} />
              </div>
              <div>
                <label className={label}>End Date {req}</label>
                <input type="date" name="endDate" required value={formData.endDate} onChange={handleChange} className={input} />
              </div>
            </div>

            {/* WORKING EXPERIENCE */}
            <SectionDivider icon="💼" title="Working Experience" />
            <p className="text-xs text-gray-400 mb-4 -mt-3">(Please upload your resume if you have any working experience)</p>
            <div className="mb-4">
              <label className={label}>Upload your CV/Resume</label>
              <label className="inline-flex items-center gap-2 mt-1 px-6 py-2.5 rounded-full text-sm font-bold text-white bg-red-600 hover:bg-red-700 transition cursor-pointer shadow-sm">
                📎 Upload CV
                <input type="file" accept=".pdf,.doc,.docx" className="hidden" />
              </label>
            </div>

            {/* DISABILITY */}
            <SectionDivider icon="♿" title="Disability" />
            <p className="text-xs text-gray-400 mb-4 -mt-3">For support purposes only — will not affect your application outcome.</p>
            <div className="mb-4">
              <label className={label}>Please indicate form of disability, if any {req}</label>
              <input type="text" name="disability" required value={formData.disability}
                onChange={handleChange} className={`${input} max-w-xs`} />
              <p className="text-xs text-gray-400 mt-1">If none, write N/A</p>
            </div>

            {/* SOURCE */}
            <SectionDivider icon="📣" title="Source of Information" />
            <div className="mb-4">
              <label className={label}>How did you know about us? {req}</label>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 mt-3">
                {['Facebook','Instagram','Google Search/Website','Family/Friends','College Staff',
                  'Information Booth','Advertisement (Newspaper/Banners/Flyers)','Education Fair','External Event'].map(s => (
                  <label key={s} className="flex items-center gap-2 text-sm text-gray-700 font-semibold cursor-pointer">
                    <input type="radio" name="heardFrom" value={s} checked={formData.heardFrom === s}
                      onChange={handleChange} className="radio-opt" />
                    {s}
                  </label>
                ))}
                <div className="flex items-center gap-2">
                  <input type="radio" name="heardFrom" value="Other" checked={formData.heardFrom === 'Other'}
                    onChange={handleChange} className="radio-opt flex-shrink-0" />
                  <input type="text" name="heardFromOther" placeholder="Other"
                    value={formData.heardFromOther} onChange={handleChange}
                    className={`${input} py-1.5 text-xs`} />
                </div>
              </div>
            </div>

            {/* DECLARATION */}
            <SectionDivider icon="✍️" title="Declaration By Applicant" />
            <div className="mb-4">
              <label className={`${label} mb-3`}>
                Please read and tick the declaration below, write your Full name and Date {req}
              </label>
              <div className="flex gap-3 items-start bg-gray-50 border border-gray-200 rounded-xl p-4">
                <input type="checkbox" name="declarationAgreed" checked={formData.declarationAgreed}
                  onChange={handleChange} className="mt-1 flex-shrink-0"
                  style={{ accentColor: '#dc2626', width: 18, height: 18 }} />
                <p className="text-xs text-gray-700 leading-relaxed font-medium">
                  I hereby understand and agree that it shall be my responsibility to know and abide with all relevant
                  and applicable rules and regulations of the College. I declare that all information provided is complete,
                  accurate and true. I agree that the College reserves the right to vary or reserve any decision in respect
                  to my registration in the event that the said information is found to be untrue or incorrect. I also agree
                  that the College reserves the right to alter, amend or modify the current published fees.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className={label}>Full Name {req}</label>
                <input type="text" name="declarationName" required value={formData.declarationName}
                  onChange={handleChange} className={input} />
              </div>
              <div>
                <label className={label}>Date {req}</label>
                <input type="date" name="declarationDate" required value={formData.declarationDate}
                  onChange={handleChange} className={input} />
              </div>
            </div>

            {/* PDPA */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6 text-xs text-gray-600 leading-relaxed font-medium">
              <p className="font-black text-gray-900 mb-2 text-sm">PDPA Consent Clause</p>
              <p className="mb-2">By submitting this form, you agree that Teja Skills may collect, obtain, store and process
                all information provided for business requirements and governmental obligations.</p>
              <p>1. Store and process your Personal Data for required business use;</p>
              <p>2. Disclose your Personal Data to relevant authorities where required by law.</p>
            </div>

            <button type="submit" className="btn-submit" disabled={submitting}>
              {submitting ? 'Submitting...' : 'Submit Application'}
            </button>

            <p className="text-center mt-4 text-xs text-gray-400">
              By registering, you agree to our{' '}
              <a href="#" className="text-red-600 font-bold hover:underline">Privacy Policy</a>
              {' '}and{' '}
              <a href="#" className="text-red-600 font-bold hover:underline">Terms of Use</a>.
            </p>

          </form>
        </div>
      </div>
    </>
  )
}