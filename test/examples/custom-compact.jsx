// @flow
import React from "react";
import _ from "lodash";
import Responsive from '../../lib/ResponsiveReactGridLayout';
import WidthProvider from '../../lib/components/WidthProvider';
import type {CompactType, Layout} from '../../lib/utils';
const ResponsiveReactGridLayout = WidthProvider(Responsive);

type Props = {|
  className: string,
  cols: {[string]: number},
  onLayoutChange: Function,
  rowHeight: number,
|};
type State = {|
  currentBreakpoint: string,
  compactType: CompactType,
  mounted: boolean,
  layouts: {[string]: Layout}
|};

export default class ShowcaseLayout extends React.Component<Props, State> {
  static defaultProps = {
    className: "layout",
    rowHeight: 70,
    onLayoutChange: function() {},
    cols: { lg: 12, md: 12, sm: 6, xs: 4, xxs: 2 },
  };

  state = {
    currentBreakpoint: "lg",
    compactType: null,
    mounted: false,
    layouts: { lg: generateLayout() }
  };

  componentDidMount() {
    this.setState({ mounted: true });
  }

  generateDOM() {
    return _.map(this.state.layouts.lg, function(l, i) {
      return (
        <div key={l.i}>
          <span className="text">{l.i}</span>
        </div>
      );
    });
  }

  onBreakpointChange = (breakpoint: string) => {
    this.setState({
      currentBreakpoint: breakpoint
    });
  };

  onCompactTypeChange = () => {
    const { compactType: oldCompactType } = this.state;
    const compactType =
      oldCompactType === "horizontal"
        ? "vertical"
        : oldCompactType === "vertical"
        ? null
        : "horizontal";
    this.setState({ compactType });
  };

  onLayoutChange = (layout: Layout, layouts: {[string]: Layout}) => {
    this.props.onLayoutChange(layout, layouts);
  };

  onNewLayout = () => {
    this.setState({
      layouts: { lg: generateLayout() }
    });
  };

  onDrop = (elemParams: Object) => {
    alert(`Element parameters: ${JSON.stringify(elemParams)}`);
  };

  render() {
    // eslint-disable-next-line no-unused-vars
    return (
      <div>
        <div>
          Current Breakpoint: {this.state.currentBreakpoint} (
          {this.props.cols[this.state.currentBreakpoint]} columns)
        </div>
        <div>
          Compaction type:{" "}
          {_.capitalize(this.state.compactType) || "No Compaction"}
        </div>
        <button onClick={this.onNewLayout}>Generate New Layout</button>
        <button onClick={this.onCompactTypeChange}>
          Change Compaction Type
        </button>
        <ResponsiveReactGridLayout
          {...this.props}
          layouts={this.state.layouts}
          onBreakpointChange={this.onBreakpointChange}
          onLayoutChange={this.onLayoutChange}
          onDrop={this.onDrop}
          // WidthProvider option
          measureBeforeMount={false}
          // I like to have it animate on mount. If you don't, delete `useCSSTransforms` (it's default `true`)
          // and set `measureBeforeMount={true}`.
          useCSSTransforms={this.state.mounted}
          compactType={this.state.compactType}
          preventCollision={false}
        >
          {this.generateDOM()}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

function generateLayout() {
  const tiles = [{"id":"0209b236-85da-4ba4-b987-c980ccb109f5","x":0,"y":0,"width":0,"height":0,"order":4,"size":"ms"},{"id":"7475d5bf-6d67-478f-8f1b-1c11779ac30d","x":0.49997820580500496,"y":0,"width":0,"height":0,"order":22,"size":"ms"},{"id":"589e8b93-64ce-43ff-b37a-03d760f954f9","x":0,"y":0,"width":0,"height":0,"order":21,"size":"ms"},{"id":"c767a188-9fb9-47b4-849a-8dbfc76e56ee","x":0,"y":0,"width":0,"height":0,"order":18,"size":"ls"},{"id":"bdabfb7e-50a9-4ea9-b06e-6e06250ef736","x":0.7499673087075075,"y":0,"width":0,"height":0,"order":3,"size":"xs"},{"id":"10500bc2-68cd-48ea-8b2f-2ef826e01198","x":0.49997820580500496,"y":0,"width":0,"height":0,"order":11,"size":"ms"},{"id":"e0e7c53e-09da-46d4-835b-f2b7821c5db6","x":0,"y":0,"width":0,"height":0,"order":27,"size":"m"},{"id":"2f2afda7-b763-4414-a52b-e285a8f2a5f7","x":0.49997820580500496,"y":0,"width":0,"height":0,"order":28,"size":"m"},{"id":"650ffe53-30f1-41db-bf0c-34b7d9d68173","x":0,"y":0,"width":0,"height":0,"order":19,"size":"ms"},{"id":"5fb4dee5-712b-428b-93b7-5b2832d11992","x":0.24998910290250248,"y":0,"width":0,"height":0,"order":1,"size":"xs"},{"id":"a74d7a5d-4a1c-42b2-a728-8a2c5b1f7a8e","x":0,"y":0,"width":0,"height":0,"order":0,"size":"xs"},{"id":"a190ba6e-9dde-453c-b594-6198524f8900","x":0,"y":0,"width":0,"height":0,"order":9,"size":"ls"},{"id":"42697149-d1f3-48aa-bfb8-1f1388cd048c","x":0.49997820580500496,"y":0,"width":0,"height":0,"order":26,"size":"m"},{"id":"5b1d60f4-4987-44df-8195-f9edc530fd9c","x":0.49997820580500496,"y":0,"width":0,"height":0,"order":20,"size":"ms"},{"id":"467dbfc5-5d58-4dc1-b9ca-5e4f0bfb51f4","x":0,"y":0,"width":0,"height":0,"order":30,"size":"l"},{"id":"e62ddfdb-5595-40a3-8eb4-1ba5c6272dc2","x":0,"y":0,"width":0,"height":0,"order":31,"size":"ls"},{"id":"b4539f37-4c55-4c40-bfd4-270deecbc4e6","x":0,"y":0,"width":0,"height":0,"order":12,"size":"ls"},{"id":"da19c27c-ee53-43e9-af35-ed68bee1796a","x":0,"y":0,"width":0,"height":0,"order":10,"size":"ms"},{"id":"1d71ccb7-a262-4cee-b4d9-87110336786a","x":0,"y":0,"width":0,"height":0,"order":13,"size":"ls"},{"id":"600aa5ec-57fe-437a-9844-0eae1b2ae6a1","x":0,"y":0,"width":0,"height":0,"order":29,"size":"ls"},{"id":"4a133680-9957-4d3b-84d6-86af91bb4b8d","x":0,"y":0,"width":0,"height":0,"order":17,"size":"ls"},{"id":"623e2e4b-1803-4cf1-bff9-eb66388e9d9e","x":0.49997820580500496,"y":0,"width":0,"height":0,"order":24,"size":"m"},{"id":"b4c0cc26-97b5-4b35-a5d4-285ea0a32980","x":0,"y":0,"width":0,"height":0,"order":23,"size":"m"},{"id":"78037390-23f2-4737-b44d-a610b7a2087f","x":0.49997820580500496,"y":0,"width":0,"height":0,"order":5,"size":"ms"},{"id":"5e780fd0-4886-4d23-b0e5-e61466dc5a36","x":0,"y":0,"width":0,"height":0,"order":32,"size":"l"},{"id":"6467513a-6090-4d4b-a5b1-c8f3514a5ee3","x":0,"y":0,"width":0,"height":0,"order":25,"size":"m"},{"id":"72bac515-1483-4a72-87d0-16344f113a6b","x":0,"y":0,"width":0,"height":0,"order":14,"size":"ls"},{"id":"d9353611-266f-4add-b229-c35c9b58e63e","x":0,"y":0,"width":0,"height":0,"order":15,"size":"ls"},{"id":"a35faaa2-b365-4811-9e36-95e825bd8a32","x":0,"y":0,"width":0,"height":0,"order":16,"size":"ls"},{"id":"a948036f-c422-4bb9-bd1a-d38f60d67a1e","x":0.49997820580500496,"y":0,"width":0,"height":0,"order":2,"size":"xs"},{"id":"5793e648-66a7-489e-b215-339d52b60cd9","x":0,"y":0,"width":0,"height":0,"order":7,"size":"ms"},{"id":"fe25ebb2-ae06-42e4-aeba-e75af4ec8ca4","x":0.49997820580500496,"y":0,"width":0,"height":0,"order":8,"size":"ms"},{"id":"78358993-a547-4052-a09b-5326950e5572","x":0,"y":0,"width":0,"height":0,"order":6,"size":"l"}];

  const numOfCols = 12;
  const tileMap = {
    xs: {w: numOfCols/4, h: numOfCols/6},
    s: {w: numOfCols/4, h: numOfCols/3},
    ms: {w: numOfCols/2, h:numOfCols/3},
    ls: {w: numOfCols/1, h: numOfCols/3},
    m: {w: numOfCols/2, h:numOfCols/2},
    l: {w:numOfCols/1, h:numOfCols/2}
  }

  function getLayout(tiles) {
    let xCont = 0;
    let yCont = 0;
    return tiles.sort((a,b) => a.order - b.order).map((tile,i) => {
      const newTile = {
        id: tile.id,
        x: xCont,
        y: yCont,
        i: i.toString(),
        ...tileMap[tile.size]
      };
      xCont += newTile.w;
      if(xCont === numOfCols) {
        xCont = 0;
        yCont += newTile.h
      }
      return newTile;
    });
  }
  // console.log(getLayout(tiles));
  return getLayout(tiles);
}

if (process.env.STATIC_EXAMPLES === true) {
  import("../test-hook.jsx").then(fn => fn.default(ShowcaseLayout));
}
