export const projectsData = [
    {
        projectName: 'ToDo App',
        projectDescription:
            'This is a to do list in ReactJS with a form and list component. The form component has a text input and a date input for the description and date due  of the task as well as a button to add it to the list. The form data is stored in the state of the form component. In the list component there is a button to clear all of the tasks that have been selected via a check box, by removing them from the DOM.',
        imageUrl: 'https://user-images.githubusercontent.com/80280780/182513241-adc5bb65-5483-4c07-b858-6ea2822d1cdc.PNG',
        videoUrl:
            '',
        projectUrl: 'https://github.com/icarrington/ToDo-App',
    },
    {
        projectName: 'Quiz App',
        projectDescription:
            'To set up this quiz I created an array of objects that contain the fruit name and image url. Then a random item is chosen from the fruits array and the image is added to the question container along with 4 choices including the correct fruit. When you click on the next button, the correct answer is highlighted and the quiz keeps track of how many correct answers you selected.',
        imageUrl: 'https://user-images.githubusercontent.com/80280780/182513286-18c63aab-1a22-442c-b162-baaf4c7d74ae.png',
        videoUrl:
            '',
        projectUrl: 'https://github.com/icarrington/Quiz-App',
    },
    {
        projectName: 'Higher or Lower Card Game',
        projectDescription:
            'I developed a card game in React with Typescript where you have to guess whether the next card will have a higher or lower value than the card shown. To accomplish this I mapped over arrays of suits and values to create an array of card components. The current card suit and value is stored in the app state. Then when you click higher or lower, the prevCard state is set to the current card and a new card is drawn, comparing the new value to the previous value.',
        imageUrl: 'https://user-images.githubusercontent.com/80280780/183772942-bca8509a-1619-4d31-95fb-754d2089c009.PNG',
        videoUrl:
            '',
        projectUrl: 'https://github.com/icarrington/HigherLowerCardGame',
    },
    {
        projectName: 'Calculator App',
        projectDescription:
            'To make this calculator I created components for the calculator display, keypad, and each key by mapping over all digits and operators. The app component sets the state for the expression shown in the display by appending the value of the key pressed to the expression. Then, when the equals sign button is clicked, the expression is evaluated.',
        imageUrl: 'https://user-images.githubusercontent.com/80280780/182513316-8a4af2cf-3862-42cb-a03a-30b739d952e7.PNG',
        videoUrl:
            '',
        projectUrl: 'https://github.com/icarrington/Calculator-App',
    },
    {
        projectName: 'Arcade Stacker Game',
        projectDescription:
            "This is a stacker game in the browser similar to one that you would find in an arcade. It uses CSS styling to highlight certain boxes in the grid and translate them from left to right. When the page is clicked or the spacebar is used, the boxes stop at their current position and stack to the next level, while moving faster. The goal is to stack the chain of boxes as tall as possible without the chain hanging over the chain on the lower level.",
        imageUrl: 'https://user-images.githubusercontent.com/80280780/182513365-8b04b282-013d-4314-9dee-210289d13fd0.PNG',
        videoUrl:
            '',
        projectUrl: 'https://github.com/icarrington/Arcade-Stacker-Game',
    },
    {
        projectName: 'Wordle Clone',
        projectDescription:
            'I created a clone of the Wordle game from NewYorkTimes. Credit goes to them for designing the game. I used CSS grid to style the tiles in a 5 by 6 grid. When a word is typed, the tiles fill up with that word and when the enter key is pressed, the tiles fill with a certain color based on whether that letter is in the answer, in the correct spot, or not in the answer.',
        imageUrl: 'https://user-images.githubusercontent.com/80280780/182513401-4531efa5-0460-4bf6-a33e-e71819e0367e.PNG',
        videoUrl: '',
        projectUrl: 'https://github.com/icarrington/Wordle-Clone',
    },
    {
        projectName: 'Beat Mania Like Game',
        projectDescription:
            'This is a game similar to beat mania or dance dance revolution or guitar hero. The four keys are Q, W, O, and P and you score by pressing the correct key when it has reached the green zone at the top. I used event handlers to handle the key up event of the letters and determine their coordinates in the window compared to the green zone coordinates.',
        imageUrl: 'https://user-images.githubusercontent.com/80280780/182742327-04f7e957-5221-4a03-a6e5-8c2bb5ef4133.png',
        videoUrl: '',
        projectUrl: 'https://github.com/icarrington/Beat-Mania-Game',
    },

];
