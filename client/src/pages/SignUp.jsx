import { useState } from 'react'

export default function Signup() {
  const [formData, setFormData] = useState({
    fullName: '', ic: '', dob: '', gender: '',
    phone: '', email: '', address: '',
    education: '', program: '', heardFrom: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  const inputClass = "w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-10 rounded-2xl shadow text-center max-w-md">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Received!</h2>
          <p className="text-gray-500">Thank you for applying. We will contact you within 3-5 working days.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Student Application</h1>
        <p className="text-gray-500 mb-8">Fill in your details to apply for a program.</p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
            <input type="text" name="fullName" required
              value={formData.fullName} onChange={handleChange}
              placeholder="As per IC / Passport" className={inputClass} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">IC / Passport Number *</label>
            <input type="text" name="ic" required
              value={formData.ic} onChange={handleChange}
              className={inputClass} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
              <input type="date" name="dob" required
                value={formData.dob} onChange={handleChange}
                className={inputClass} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Gender *</label>
              <select name="gender" required
                value={formData.gender} onChange={handleChange}
                className={inputClass}>
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input type="tel" name="phone" required
                value={formData.phone} onChange={handleChange}
                placeholder="01X-XXXXXXX" className={inputClass} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input type="email" name="email" required
                value={formData.email} onChange={handleChange}
                className={inputClass} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Home Address *</label>
            <textarea name="address" required rows={3}
              value={formData.address} onChange={handleChange}
              className={inputClass} />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Highest Education Level *</label>
            <select name="education" required
              value={formData.education} onChange={handleChange}
              className={inputClass}>
              <option value="">Select</option>
              <option>SPM / O-Level</option>
              <option>STPM / A-Level</option>
              <option>Diploma</option>
              <option>Bachelor's Degree</option>
              <option>Master's / PhD</option>
              <option>No Formal Education</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Program of Interest *</label>
            <select name="program" required
              value={formData.program} onChange={handleChange}
              className={inputClass}>
              <option value="">Select a program</option>
              <option>Digital Marketing</option>
              <option>Graphic Design</option>
              <option>Web Development</option>
              <option>Data Analysis</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?</label>
            <select name="heardFrom"
              value={formData.heardFrom} onChange={handleChange}
              className={inputClass}>
              <option value="">Select</option>
              <option>Social Media</option>
              <option>Friend / Family</option>
              <option>Google Search</option>
              <option>Flyer / Poster</option>
              <option>Other</option>
            </select>
          </div>

          <button type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition mt-4">
            Submit Application
          </button>

        </form>
      </div>
    </div>
  )
}