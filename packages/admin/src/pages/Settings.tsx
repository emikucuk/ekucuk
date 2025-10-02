function Settings() {
  return (
    <div className="settings-page">
      <h1>⚙️ Settings</h1>
      
      <div className="settings-sections">
        <section className="settings-section">
          <h2>General Settings</h2>
          <div className="form-group">
            <label>Site Name</label>
            <input type="text" defaultValue="Portfolio Admin" />
          </div>
          <div className="form-group">
            <label>Site URL</label>
            <input type="text" defaultValue="https://example.com" />
          </div>
        </section>

        <section className="settings-section">
          <h2>Email Configuration</h2>
          <div className="form-group">
            <label>SMTP Host</label>
            <input type="text" placeholder="smtp.gmail.com" />
          </div>
          <div className="form-group">
            <label>SMTP Port</label>
            <input type="number" placeholder="587" />
          </div>
        </section>

        <section className="settings-section">
          <h2>API Settings</h2>
          <div className="form-group">
            <label>Backend URL</label>
            <input type="text" defaultValue="http://localhost:5001" />
          </div>
          <div className="form-group">
            <label>API Timeout (ms)</label>
            <input type="number" defaultValue="5001" />
          </div>
        </section>

        <button className="btn-primary">💾 Save Settings</button>
      </div>
    </div>
  )
}

export default Settings

