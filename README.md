# PRideal World
## Inspiration

We’ve made a lot of progress in decreasing discrimination and improving equality in the last few years. Some people may think the movement is over, and we've reached our ideal world. However, there are still many unseen challenges in daily effect. 

Discrimination and harassment against LGBTQ individuals are often subtle and hard to recognize. Educating people of these aggressions is often difficult to do because they are often highly contextual and personal. How about technology that highlights LGBTQ issues without victimizing these communities?

PRideal World provides a new way to help allies detect these otherwise unrecognized injustices. In PRideal World, engage in a series of interactive environments based on real situations LGBTQ people face at home, among peers, in healthcare, and at the workplace. Users are encouraged to provide thoughtful reflections in each scenario, with tailored feedback provided by our LLM, which is trained in compassion and support.

## How we built the project

The project is built primarily as a web-native experience, with 3D scene rendering done using Three.js and GSAP. The primary backend feature, namely, the LLaMa large language model, is implemented using a local LLaMa binary and Python Flask. Unique prompts are used for every situation where a user’s response requires evaluation.

The rest of the interactivity is created with pure React and FramerMotion components, with hand-drawn, whimsical 2D artwork. Scenes were created in Unity from licensed assets and brought into the Three.js environment. Game logic is implemented completely client-side. 

## Challenges faced

One serious challenge we faced was creating the 3-dimensional environment simulating real situations. While we had originally created the scene in Unity, we found difficulty in exporting rigged models for use in Three.js. After a custom workflow of merging and baking meshes, we were able to export something that maintained the original rigging and texture. 

Another challenge we faced was consistently managing game logic and data across multiple scenes, each with multiple points of interactivity. To do this, we created a consistent format for describing scenes, combining camera angles, LLM prompts, dialogue, and more.

## What we learned

This is the first time implementing a generative AI component into a hackathon project. It was initially difficult to find a technical solution and workflow to properly integrate a local LLM into the app. 

Additionally, our team enjoyed strengthening our skills in web development and working in a team.
