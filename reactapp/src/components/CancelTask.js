import React from 'react';
import '../assets/styles/Cancel.css'

function CancelTask() {
    return (
        <div className='form-component'>
            <h2>Cancel a Task</h2>
            <p>To cancel a task, go to your tasks and select the circle with three dots in the upper right corner of the task card. This will reveal the 'Cancel Task' button. Select 'Cancel Task' to cancel all appointments for that task.</p>
            <button className='cancel-button'>Cancel Task</button>
        </div>
    );
}

export default CancelTask;
