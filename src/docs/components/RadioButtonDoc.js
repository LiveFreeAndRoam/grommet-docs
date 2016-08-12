// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import RadioButton from 'grommet/components/RadioButton';
import Box from 'grommet/components/Box';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';

export default class RadioButtonDoc extends Component {

  constructor () {
    super();
    this._onChange = this._onChange.bind(this);
    this.state = { choice: 'choice-1' };
  }

  _onChange (choice) {
    this.setState({choice: choice});
  }

  render () {
    return (
      <DocsArticle title="RadioButton" colorIndex="neutral-3">

        <section>
          <p>A radio button in a web form. We have a separate component from the
            browser base so we can style it.</p>
          <Box direction="row" wrap={true} align="center"
            pad={{ between: 'medium' }}>
            <RadioButton id="choice1-1" name="choice1" label="Choice 1"
              checked={this.state.choice === 'choice-1'}
              onChange={this._onChange.bind(this, 'choice-1')} />
            <RadioButton id="choice1-2" name="choice1" label="Choice 2"
              checked={this.state.choice === 'choice-2'}
              onChange={this._onChange.bind(this, 'choice-2')} />
          </Box>
        </section>

        <section>
          <h2>Options</h2>
          <dl>
          <dt><code>checked         true|false</code></dt>
          <dd>Same as React {"<input checked= >"}.</dd>
          <dt><code>defaultChecked  true|false</code></dt>
          <dd>Same as React {"<input defaultChecked= >"}.</dd>
          <dt><code>disabled        true|false</code></dt>
          <dd>Same as React {"<input disabled= >"}.</dd>
          <dt><code>id              {"{string}"}</code></dt>
          <dd>The DOM id attribute value to use for the underlying
            {"<input>"} element.</dd>
          <dt><code>label           {"{string|node}"}</code></dt>
          <dd>Label text to place next to the control.</dd>
          <dt><code>name            {"{string}"}</code></dt>
          <dd>The DOM name attribute value to use for the underlying
            {"<input>"} element.</dd>
          <dt><code>onChange        {"{function}"}</code></dt>
          <dd>Same as React {"<input onChange= >"}.</dd>
          </dl>
        </section>

        <section>
          <h2>Example</h2>

          <Example name="Basic" code={
            <div>
              <RadioButton id="choice1-1" name="choice1" label="Choice 1"
                checked={this.state.choice === 'choice-1'}
                onChange={this._onChange.bind(this, 'choice-1')} />
              <RadioButton id="choice1-2" name="choice1" label="Choice 2"
                checked={this.state.choice === 'choice-2'}
                onChange={this._onChange.bind(this, 'choice-2')} />
            </div>
          } />

          <Example name="Disabled" code={
            <div>
              <RadioButton id="choice2-1" name="choice2" label="Choice 1"
                checked={this.state.choice === 'choice-1'} disabled={true}
                onChange={this._onChange.bind(this, 'choice-1')} />
              <RadioButton id="choice2-2" name="choice2" label="Choice 2"
                checked={this.state.choice === 'choice-2'} disabled={true}
                onChange={this._onChange.bind(this, 'choice-2')} />
            </div>
          } />
        </section>

      </DocsArticle>
    );
  }
};
