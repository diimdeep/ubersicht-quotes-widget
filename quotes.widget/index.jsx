import { css } from "uebersicht"
const yaml = require('./lib/js-yaml.js')

const quote_block = css`
  background: rgba(0, 0, 0, .2);
  padding: 10px 20px;
`

const quote__text = css`
  font-size: 24px;
  font-weight: 300;
  font-smoothing: antialiased;
  padding-bottom: 3%;
`

const quote__author = css`
  text-align: right;
  font-size: 18px;
`

export const className = `
  left: 40px;
  top: 200px;
  width: 800px;
  white-space: pre-line;
  color: #fff;
  font-family: Helvetica Neue;
`

export const refreshFrequency = 60000;

export const initialState = { output: `
- a: Mark Berry
  q: |
    Programmers don't burn out on hard work,
    they burn out on change-with-the-wind directives and not 'shipping'.
- a: Steve McConnell
  q: |
    It’s no sin to be a beginner or an intermediate.
    It’s no sin to be a competent programmer instead of a leader.
    The sin is in how long you remain a beginner or an intermediate after you know what you have to do to improve.` };

//export const command = "cat /Users/wolf/D/Notes/notebook/Quotes.yaml";

export const render = ({ output, error }) => {
  try {
    console.log(output);
    var doc = yaml.safeLoad(output);
    var max = doc.length;
    var quoteN = Math.floor(Math.random() * max ) + 0;
    var quote = doc[quoteN];
    console.log(quote.q);
  } catch (e) {
    console.log(e);
  }
  return (
    <div className={quote_block}>
      <div className={quote__text}>{quote.q}</div>
      <div className={quote__author}>{quote.a}</div>
    </div>
  );
}