import './Terminal.css'

function Terminal() {
  const lines = [
    { prompt: true, text: 'whoami' },
    { prompt: false, text: 'Software Engineer' },
    { prompt: true, text: 'cat interests.txt' },
    { prompt: false, text: 'python, sql, ai_tools' },
    { prompt: true, text: '', cursor: true }
  ]

  return (
    <div className="terminal">
      <div className="terminal-header">
        <span className="terminal-dot red"></span>
        <span className="terminal-dot yellow"></span>
        <span className="terminal-dot green"></span>
      </div>
      <div className="terminal-body">
        {lines.map((line, index) => (
          <div key={index} className="terminal-line" style={{ animationDelay: `${0.3 + index * 0.3}s` }}>
            {line.prompt && <span className="terminal-prompt">$ </span>}
            <span className={line.cursor ? 'terminal-cursor' : 'terminal-text'}>
              {line.cursor ? '█' : line.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Terminal
