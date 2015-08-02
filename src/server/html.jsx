import React from 'react'

export default React.createClass({

  render() {
    // Only for production. For dev, it's handled by webpack with livereload.
    const linkStyles = this.props.isProduction &&
      <link
        href={`/build/app.css?v=${this.props.version}`}
        rel="stylesheet"
      />

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <title>{this.props.title}</title>
          {linkStyles}
        </head>
        <body dangerouslySetInnerHTML={{__html: this.props.bodyHtml}} />
      </html>
    )
  }

})
