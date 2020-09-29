import React from 'react';

const ProjectFramework = () => {
    return (
        <div>
            <h3>Guide for deciding which project to work on next:</h3>
            <ol id='project-framework-list'>
                <li>Does this idea excite you?</li>
                <ul>
                    <li>Is it a "Yeah..." or a "Heck yeah!"?</li>
                    <li>On a scale of 1 to 10, are you a 6 or an 8?</li>
                </ul>
                <li>Does this project have job-relevance?</li>
                <ul>
                    <li>
                        Would you be developing skills that benefit your career?
                    </li>
                </ul>
                <li>Is there a business element involved?</li>
                <ul>
                    <li>
                        How could you turn this project into an entrepreneurial
                        venture?
                    </li>
                </ul>
            </ol>
        </div>
    );
};

export default ProjectFramework;
