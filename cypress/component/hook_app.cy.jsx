import App from "../../src/App"

function testColorChange(){
  cy.get('input').then(($el) => {
  const initialColor = getComputedStyle($el[0]).color;
  const initialState = $el[0].innerHTML;
  cy.get('button').click();
  cy.get('input').should(($el) => {
    expect(getComputedStyle($el[0]).color).to.not.equal(initialColor);
    expect($el[0].innerHTML).to.equal(initialState);
  });
});
}


describe('Color Change using useRef', () => {
  beforeEach(()=>{
    cy.mount(<App/>)
  })
  it('checking everything is correct', testColorChange);
  it('checking everything is correct', testColorChange);
  
});
  
  