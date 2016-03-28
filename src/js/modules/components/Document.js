import React, { PropTypes, Component } from 'react'

const { arrayOf, string, node, object } = React.PropTypes

class Document extends Component {
  render () {
    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <title>{title}</title>
          {styles}
        </head>
        <body>
          <div id='the__root' dangerouslySetInnerHTML={{ __html: content }}></div>
          <script dangerouslySetInnerHTML={{ __html: shims }}></script>
          {scripts}
        </body>
      </html>
    )
  }
}

Document.propTypes = {
  styles: arrayOf(node),
  scripts: arrayOf(node),
  content: string,
  title: string,
  initialState: object
}

export default Document
