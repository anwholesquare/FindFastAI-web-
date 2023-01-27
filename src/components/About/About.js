import React from 'react';
import ReactPlayer from 'react-player';
import './About.css'
const About = () => {
    return (
        <div>
            <div className="mysection mt-20">
                <figure><ReactPlayer url="https://youtu.be/Zv4K_Vh_uKs" /></figure>
            </div>
            <p className="mysection mt-10  mx-auto px-20 text-l font-semibold text-black ">
            Are you trying to learn something new but don't know where to find the right resources without spending hours browsing the internet? FindFast AI is here for you. FindFast AI is a cross-platform app based on advanced algorithms to find the most relevant sequential resources crawling the web according to your searched topic and compiling them into a personalized playlist that is constantly learning and adapting to your preferences. Trying to find reliable and relevant resources when learning something new can be frustrating and time-consuming. Having a tool that can help you quickly find high-quality resources can be very helpful and save you a lot of time and effort. In addition, having access to a variety of resources can improve the learning experience by providing different perspectives and approaches to the topic, which can enhance understanding and retention. Finally, tracking your progress and achieved milestones can provide motivation and a sense of accomplishment, which can help sustain engagement and drive toward achieving your learning goals.
<br></br>
With our app, you can search for any topic you would like to learn about. Our advanced algorithms will search the web for the most relevant resources. You can also subscribe to your favorite topics and let us do the work for you. Our AI will find the best videos on the topic and compile them into a relevant playlist for you. Suppose you prefer to focus on one video at a time. In that case, the app has a feature that will provide you with a single video daily to ensure you don't spend all your free time watching videos. The suggested video can also be regenerated if the user doesn't find the video interesting and hard to learn. In addition, the app has a discussion feature that allows you to ask questions and discuss any doubts you may have with our AI chatbot, which is capable of answering a wide range of topics. Finally, you can track your progress and milestones achieved in your profile.
            </p>
        </div>


    );
};

export default About;