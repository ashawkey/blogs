import React, {PureComponent} from 'react';
import ReactMarkdown from "react-markdown"
import MathJax from 'react-mathjax';
import RemarkMathPlugin from 'remark-math';
import PropTypes from "prop-types";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {dark} from "react-syntax-highlighter/dist/esm/styles/prism";



class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  };

  static defaultProps = {
    language: null
  };

  render() {
    const { language, value } = this.props;
    return (
      <SyntaxHighlighter language={language} style={dark}>
        {value}
      </SyntaxHighlighter>
    );
  }
}

function MarkdownRender(props) {
  const newProps = {
      ...props,
      plugins: [
        RemarkMathPlugin,
      ],
      renderers: {
        ...props.renderers,
        code: CodeBlock,
        math: (props) => 
          <MathJax.Node formula={props.value} />,
        inlineMath: (props) =>
          <MathJax.Node inline formula={props.value} />
      }
    };
    return (
      <MathJax.Provider input="tex">
          <ReactMarkdown {...newProps} />
      </MathJax.Provider>
    );
}

export default MarkdownRender;