import ReactDOMServer from 'react-dom/server'

export const scrollTop = (duration = 500) => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
    duration
  })
}

export const setStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value))

export const getStorage = (key) => JSON.parse(localStorage.getItem(key))

export const removeStorage = (key) => localStorage.removeItem(key)

export const clearStorage = () => localStorage.clear()

export const exportHTMLToFile = (templateTypesComponent, contentComponent, filename) => {
  const html = `
    <html>
      <head>
        <title>Exported Content</title>
      </head>
      <body>
        ${ReactDOMServer.renderToString(templateTypesComponent)}
        ${ReactDOMServer.renderToString(contentComponent)}
      </body>
    </html>
  `
  const blob = new Blob([html], { type: 'text/html' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}
