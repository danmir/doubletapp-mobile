gemini.suite('events-test', (suite) => {
    suite.setUrl('/events/1')
    .setCaptureElements('body')
    .capture('plain');
});