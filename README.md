# conf-app-ng2

#### Simple app that demonstrates some core concepts of angular2. Built with the angular-CLI.

Below is the layout of this application, which is a list of tech talks that you can filter, watch, and rate:

<img src="https://github.com/goldenbearkin/conf-app-ng2/blob/master/resources/layout.png" width="250">

- User can filter the speaker by typing the speaker's name on the input tag
- If click on the 'WATCH' button, the label of the button will change to showing 'WATCHED'
- If click on the 'RATE' button, the Rating field will set to 10 and the label of the button will change to showing 'RATED'

The application structure is a component tree as below:

<img src="https://github.com/goldenbearkin/conf-app-ng2/blob/master/resources/app-structure.png" width="500">

In Angular2, data flows into a component via input properties, out of a component via output properties:

<img src="https://github.com/goldenbearkin/conf-app-ng2/blob/master/resources/data-flows.png" width="500">

### How to start:

1. git clone https://github.com/goldenbearkin/conf-app-ng2.git
2. cd conf-app-ng2
3. npm install
4. ng serve
