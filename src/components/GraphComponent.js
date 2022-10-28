import React from 'react'
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup,VictoryLine } from 'victory'

class GraphComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = { difficulty: true, fun: true, isButtonClicked: true }
    this.showDifficulty = this.showDifficulty.bind(this)
    this.showLineGraph = this.showLineGraph.bind(this)
  }

  showDifficulty () {
    this.setState({ difficulty: !this.state.difficulty })
  }

  showFun () {
    this.setState({ fun: !this.state.fun })
  }

  showLineGraph () {
    this.setState({ isButtonClicked: !this.state.isButtonClicked })
  }

  render () {
    const graphData = this.props.averageData
    return (
      <div className='Graph'>
        <VictoryChart
          height={175}
          maxDomain={{ x: 40 }}
          padding={{ left: 25, top: 25, right: 10, bottom: 75 }}
        >
          <VictoryAxis
            dependentAxis
            domain={{ y: [0, 5.2] }}
            style={{
              tickLabels: {
                fontSize: 5
              }
            }}
          />
          <VictoryAxis
            independentAxis
            style={{
              tickLabels: {
                fontSize: 5,
                textAnchor: 'end',
                angle: -45
              }
            }}
          />
          {this.state.isButtonClicked ? (
            <VictoryGroup offset={4} style={{ data: { width: 8 } }}>
              {this.state.difficulty ? (
                <VictoryBar
                  data={graphData}
                  x='name'
                  y='level'
                  barWidth={3}
                  style={{ data: { fill: 'rgb(0, 143, 199)' } }}
                />
              ) : (
                <VictoryBar
                  data={graphData}
                  x='name'
                  y='level'
                  barWidth={3}
                  style={{ data: { opacity: 0 } }}
                />
              )}
              {this.state.fun ? (
                <VictoryBar
                  data={graphData}
                  x='name'
                  y='fun'
                  barWidth={3}
                  style={{ data: { fill: 'rgb(209, 143, 0)' } }}
                />
              ) : (
                <VictoryBar
                  data={graphData}
                  x='name'
                  y='fun'
                  barWidth={3}
                  style={{ data: { opacity: 0 } }}
                />
              )}
            </VictoryGroup>
          ) : (
            <VictoryGroup
              colorScale={['rgb(0, 143, 199)', 'rgb(209, 143, 0)']}
              offset={4}
              style={{ data: { width: 8 } }}
            >
              {this.state.difficulty ? (
                <VictoryLine data={graphData} x='name' y='level' barWidth={3} />
              ) : (
                <VictoryLine
                  data={graphData}
                  x='name'
                  y='level'
                  barWidth={3}
                  style={{ data: { opacity: 0 } }}
                />
              )}
              {this.state.fun ? (
                <VictoryLine data={graphData} x='name' y='fun' barWidth={3} />
              ) : (
                <VictoryLine
                  data={graphData}
                  x='name'
                  y='fun'
                  barWidth={3}
                  style={{ data: { opacity: 0 } }}
                />
              )}
            </VictoryGroup>
          )}
        </VictoryChart>
        <button onClick={() => this.showDifficulty()}>
          {this.state.difficulty ? "Don't show difficulty" : 'Show difficulty'}
        </button>
        <button onClick={() => this.showFun(this.state.fun)}>
          {this.state.fun ? "Don't show fun" : 'Show fun'}
        </button>
        <button onClick={() => this.showLineGraph(this.state.difficulty)}>
          {this.state.isButtonClicked ? 'Show line graph' : 'Show bar graph'}
        </button>
      </div>
    )
  }
}

export default GraphComponent
