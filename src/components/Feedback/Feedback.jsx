import { Component } from 'react';
import ButtonItem from './ButtonItem';
import StatisticItem from './StatisticItem';

import {
  Container,
  Title,
  ButtonBlock,
  TitleStatistic,
  StatisticList,
} from './Feedback.styled';

const data = [{ label: 'good' }, { label: 'neutral' }, { label: 'bad' }];

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = value => {
    this.setState(prev => ({
      [value]: prev[value] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return (this.state.good * 100) / this.countTotalFeedback();
  };

  render() {
    return (
      <Container>
        <Title>Please Leave feedback</Title>
        <ButtonBlock>
          {data.map(({ label }, index) => {
            return (
              <ButtonItem
                key={label}
                title={label}
                onClick={() => this.handleIncrement(label)}
              />
            );
          })}
        </ButtonBlock>
        <TitleStatistic>Statistic</TitleStatistic>

        {this.countTotalFeedback() ? (
          <div>
            <StatisticList>
              <StatisticItem data={data} feedbackState={this.state} />
            </StatisticList>
            <p>Total:{this.countTotalFeedback()}</p>
            <p>Total:{this.countPositiveFeedbackPercentage().toFixed(2)}%</p>
          </div>
        ) : (
          <span>No feedback given </span>
        )}
      </Container>
    );
  }
}

export default Feedback;
