import { Component } from 'react';
import { GlobalStyles } from './GlobalStyles';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  getStateProperties = Object.keys(this.state);

  handleChange = prp => {
    const statePropertie = this.getStateProperties.find(e => e === prp);
    this.setState(p => ({
      [statePropertie]: p[statePropertie] + 1,
    }));
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, n) => acc + n, 0);

  countPositiveFeedbackPercentage = () =>
    Math.round(
      (this.state.good /
        Object.values(this.state).reduce((acc, n) => acc + n, 0)) *
        100
    );

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.getStateProperties}
            onLeaveFeedback={this.handleChange}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
        <GlobalStyles />
      </>
    );
  }
}
