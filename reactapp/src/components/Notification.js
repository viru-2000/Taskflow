import React, { useState } from "react";
import '../assets/styles/Notification.css'

const Notification = () => {
  const [settings, setSettings] = useState({
    taskUpdates: { email: true, sms: false, push: true },
    promotionalEmails: { email: true, sms: true, push: false },
  });

  const handleChange = (category, type) => {
    setSettings({
      ...settings,
      [category]: {
        ...settings[category],
        [type]: !settings[category][type],
      },
    });
  };

  const handleSave = () => {
    console.log("Settings saved:", settings);
  };

  const handleCancel = () => {
    console.log("Settings reset.");
  };

  return (
    <div className="notifications-container">
      <h2 className="notifications-title">Notifications</h2>
      <table className="notifications-table">
        <thead>
          <tr>
            <th>Form of Communication</th>
            <th>Email</th>
            <th>SMS</th>
            <th>Push Notification</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Task Updates</td>
            <td>
              <input
                type="checkbox"
                checked={settings.taskUpdates.email}
                onChange={() => handleChange("taskUpdates", "email")}
              />
            </td>
            <td>
              <input
                type="checkbox"
                checked={settings.taskUpdates.sms}
                onChange={() => handleChange("taskUpdates", "sms")}
              />
            </td>
            <td>
              <input
                type="checkbox"
                checked={settings.taskUpdates.push}
                onChange={() => handleChange("taskUpdates", "push")}
              />
            </td>
          </tr>
          <tr>
            <td>Promotional Emails and Notifications</td>
            <td>
              <input
                type="checkbox"
                checked={settings.promotionalEmails.email}
                onChange={() => handleChange("promotionalEmails", "email")}
              />
            </td>
            <td>
              <input
                type="checkbox"
                checked={settings.promotionalEmails.sms}
                onChange={() => handleChange("promotionalEmails", "sms")}
              />
            </td>
            <td>
              <input
                type="checkbox"
                checked={settings.promotionalEmails.push}
                onChange={() => handleChange("promotionalEmails", "push")}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="notifications-buttons">
        <button className="cancel-button" onClick={handleCancel}>
          Cancel
        </button>
        <button className="save-button" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
};

export default Notification;
