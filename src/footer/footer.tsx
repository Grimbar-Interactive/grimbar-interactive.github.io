import React from 'react';

export class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <p>Grimbar Interactive L.L.C. est. 2022</p>
                <div className="image-container">
                    <a href="https://www.linkedin.com/in/jacob-dunbar-b6b5b2bb/" target="blank"><img src="./images/linkedin-square.png" alt="linkedin"/></a>   
                    <a href="https://github.com/Grimbar-Interactive" target="blank"><img src="./images/github-square.png" alt="github"/></a>   
                    <a href="https://twitter.com/JacobFDunbar" target="blank"><img src="./images/twitter-square.png" alt="twitter"/></a>
                </div>    
            </div>
        )
    }
}