import React, { PureComponent, Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

class Foldable extends PureComponent {
  static defaultProps = {
    duration: 1000,
  };

  componentDidUpdate(prevProps) {
    const { onCompleteFolding } = this.props;

    if (!prevProps.toFold && this.props.toFold && this.finalFoldNode) {
      this.finalFoldNode.addEventListener('animationend', onCompleteFolding);
    }
  }

  componentWillUnmount() {
    const { onCompleteFolding } = this.props;

    if (this.finalFoldNode) {
      this.finalFoldNode.removeEventListener('animationend', onCompleteFolding);
    }
  }

  renderOriginal() {
    const { front, folding } = this.props;

    return (
      <div className="original" style={{ opacity: 0 }}>
        <div ref={(node) => (this.node = node)}>{front}</div>
      </div>
    );
  }

  renderFoldedCopy() {
    const { back, duration, time } = this.props;
    const { node } = this;

    if (!node) return null;

    const height = window.innerHeight * 0.7;

    const foldHeights = [height * 0.35, height * 0.35, height * 0.3];

    return (
      <div className="wrapper" style={{ height }}>
        <TopFold
          innerRef={(node) => (this.finalFoldNode = node)}
          duration={duration}
          foldHeight={foldHeights[0]}
          style={{ animationDelay: `${-(duration * 0.33) - time * 1000}ms` }}
        >
          <div className="hide-overflow">
            <TopFoldContents
              foldHeight={foldHeights[0]}
              dangerouslySetInnerHTML={{ __html: node.outerHTML }}
            />
          </div>
          <div className="topfold back">{back}</div>
        </TopFold>

        <MiddleFold foldHeight={foldHeights[1]} offsetTop={foldHeights[0]}>
          <div className="hide-overflow">
            <MiddleFoldContents
              offsetTop={foldHeights[0]}
              dangerouslySetInnerHTML={{ __html: node.outerHTML }}
            />
          </div>
        </MiddleFold>

        <BottomFold
          duration={duration}
          foldHeight={foldHeights[2]}
          offsetTop={foldHeights[0] + foldHeights[1]}
          style={{ animationDelay: `${-(time * 1000)}ms` }}
        >
          <div className="hide-overflow">
            <BottomFoldContents
              offsetTop={foldHeights[0] + foldHeights[1]}
              dangerouslySetInnerHTML={{ __html: node.outerHTML }}
            />
          </div>
          <div className="bottomfold back" />
        </BottomFold>
      </div>
    );
  }

  render() {
    return (
      <Fragment>
        {this.renderOriginal()}
        {this.props.folding && this.renderFoldedCopy()}
      </Fragment>
    );
  }
}

Foldable.propTypes = {
  folding: PropTypes.bool,
  open: PropTypes.bool,
  front: PropTypes.element,
  back: PropTypes.element,
  duration: PropTypes.number,
  onCompleteFolding: PropTypes.func,
};

const foldBottomUp = keyframes`
  from {
    transform-origin: top center;
    transform: perspective(1000px) rotateX(0deg);
  }
  to {
    transform-origin: top center;
    transform: perspective(1000px) rotateX(180deg);
  }
`;

const foldTopDown = keyframes`
  from {
    transform-origin: bottom center;
    transform: perspective(1000px) rotateX(0deg);
  }
  to {
    transform-origin: bottom center;
    transform: perspective(1000px) rotateX(-180deg);
  }
`;

const FoldBase = styled.div`
  position: absolute;
  left: 0;
  right: 0;
`;

const TopFold = styled(FoldBase)`
  z-index: 3;
  top: 0;
  height: ${(props) => Math.round(props.foldHeight)}px;
  animation: ${foldTopDown} ${(props) =>
    props.duration * 0.8}ms forwards reverse};
  animation-play-state: paused;
  transform-style: preserve-3d;
`;

const MiddleFold = styled(FoldBase)`
  z-index: 1;
  top: ${(props) => Math.round(props.offsetTop)}px;
  height: ${(props) => Math.round(props.foldHeight)}px;
`;

const BottomFold = styled(FoldBase)`
  z-index: 2;
  top: ${(props) => Math.round(props.offsetTop)}px;
  height: ${(props) => Math.round(props.foldHeight)}px;
  animation: ${foldBottomUp} ${(props) => props.duration}ms forwards reverse};
  animation-play-state: paused;
  transform-style: preserve-3d;
`;

const TopFoldContents = styled.div`
  backface-visibility: hidden;
`;
const MiddleFoldContents = styled.div`
  position: relative;
  z-index: 2;
  height: ${(props) => props.height}px;
  transform: translateY(${(props) => Math.round(props.offsetTop) * -1}px);
`;
const BottomFoldContents = styled.div`
  position: relative;
  z-index: 2;
  height: ${(props) => props.height}px;
  transform: translateY(${(props) => Math.round(props.offsetTop) * -1}px);
  backface-visibility: hidden;
`;

export default Foldable;
