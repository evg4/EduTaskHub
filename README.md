## Title
EduTaskHub
## Project details
I worked on this with my mentor Jade Wilson (https://github.com/Jade-Codes), who provided the details as set out in "Description" below and set me the task of getting the initial app up and running. We then talked through what I'd worked on together, and she offered help and guidance for how I could improve. The app is not in a "final product" stage, however I have decided not to continue working on the project for the time being. Ths reason is because, as I have been working on this with the help of Jade, I have realised that there are a lot of things that could be improved in the way I approached this project. Therefore, if in the future I decide I would like to continue with this, I would start again from scratch so that I could improve on these areas. However I have still deployed the project because I learnt so much during it that I wanted to document it.
## Description 
EduTaskHub is an open-source educational platform designed to simplify the process of distributing and marking coursework assignments for students and teachers. This platform aims to improve the efficiency of homework management and enhance collaboration within an educational environment.

### Features

- **Coursework Distribution:**
  - Teachers can effortlessly create and distribute coursework assignments to students.
  - Assignments can cover various subjects and include detailed instructions.

- **Efficient Marking:**
  - Streamlined tools for teachers to review and mark student submissions quickly.
  - Automated feedback options to expedite the marking process.

- **Collaborative Learning:**
  - Facilitate collaboration among students through shared assignments and peer reviews.
  - Discussion forums for students to ask questions and seek help from peers.

- **Progress Tracking:**
  - Track student progress and completion status for each homework assignment.
  - Generate insights into common challenges faced by students.

## Challenges and learnings
I built this using React and Redux, and used Jest and React Testing Library to implement tests. I learnt a lot during the process and, looking back now at the project, can see areas which I would do differently next time.
- **State management**
Because I have recently learnt how to create a Redux store, I was under the impression that all state must be managed using the store. However Jade helped me realise that the Redux store should only be used when a change in state in one component affects a different component, and that it is acceptable to use local state to manage some components even if there is a Redux store set up. As such, I now realise that this app could be improved to simplify the state management process, by only making use of Redux where it is necessary, and using local state management elsewhere.
- **Testing**
I was still in the process of learning about testing while I worked on this project, so I waited until I had already done a lot of coding before I started writing tests. Next time I will aim to write tests more frequently from the beginning, so it can help inform future decisions.
- **Planning**
Though I had a vague idea in mind of how I wanted the app to look, I didn't create a very detailed plan, which would have been helpful when writing the logic and creating the components. If I had a more detailed plan, I think I could have chosen better variable names, and could have designed components in such a way that they could have been reused (for example, the "AddNewCoursework" form could have been repurposed for an "AddNewStudent" form, which doesn't currently exist).
- **Appearance**
I was focussing on the funcionality, so the design is very basic. If I were to take this project further, I would improve the appearance to include a better colour scheme and make the whole thing visually appealing. I would also look into responsiveness more closely to ensure the app worked on all devices.
## How to use
You can view this website at https://edutaskhub.netlify.app/. Use the tabs at the top to navigate to different pages. On the "Coursework" page, clicking "Add New Coursework" toggles the form, which can then be used to add more tiles to the display. Use the X button in the corner of each tile to delete it.
## Credits
Thanks to Jade Wilson (https://github.com/Jade-Codes), whom I forked this repo from, and who helped me with problems I faced when working on this project.






  

