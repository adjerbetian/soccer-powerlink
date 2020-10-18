# Home Assignment for Powerlink CRM

## Installation

Run `yarn`, then `yarn start`.

## Run the tests

First run `yarn start` in a separate terminal. 

Then, in a new terminal, you can
- run `yarn test:e2e` to run cypress in the terminal
- run `yarn test:e2e:open` to open cypress graphically

## Remarks

- **General**
  - please remember that the front end is not my strength 😅
- **The design and styles**
  - I know the design is not perfect, but since you said not to 
  care too much about it, I didn't spend much time on it
  - I didn't use styled component. I've used them in the past, 
  but I didn't feel the need for them here, especially that 
the design is simple
- **TypeScript and Data Structures**
  - I use TS whenever I can. I tried to show that I master TypeScript in `services/parse.ts`
  - Although this app is small, I still separated the types of the 
  objects I use (`entities`) and the ones the API returns (`DTOs`)
- **About tests**:
  - I do not like to test components directly, it's usually
  not robust enough, so there is no Jest tests on components
  - usually, I do add tests on services (like the `parser` here) 
  but it was a bit heavy to setup here for such simple functions  
  - however, I added end to end tests with cypress as I
  those tests are the one that brought me a lot of confidence
  in my projects
- **Git**
  - I tried to keep a clean git history, but I know it could be better.
- **Error handling**
  - I didn't have the time to really look into how error handling
  should be done in React. I did something basic here.
 

## The spec

> Create a project in React Hooks that displays information about football teams.   
> The list will be displayed as a three-column table (Name, Founded, Address) that displays a list of football teams.   
> Clicking on a row in the table will lead to a page that will display the group details as follows:   
> The group name will be displayed as a title. Next to the title will be the group icon, and under the title will be displayed additional details (year of establishment, group website, address). Clicking on the group's website will lead to the website. Under the team details will be displayed the list of players in the team (table with the names of the players and their shirt number).
> 
> Highlights:
> 1. The source of the API is at your discretion.   
> The application will consist of two pages: a page containing the list of teams (teams /) and a page containing specific group information (teams / {id /}).
> 3. The implementation and manner of distribution of the components is at your discretion.
> 4. No need to invest in design.
> 5. It is recommended to use the Styled Component
 
