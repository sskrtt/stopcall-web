import './App.css'

function App() {
  const lastModifiedDate = import.meta.env.VITE_APP_LAST_MODIFIED_DATE || 'N/A';

  return (
    <>
      <h1>스탑콜 테스트 앱</h1>
      <p className="last-modified">최근 앱 수정 날짜: {lastModifiedDate}</p>
      <div className="app-download-buttons">
        <a 
          href="itms-services://?action=download-manifest&url=https://sskrtt.github.io/stopcall-web/manifest.plist"
          className="download-button ios-button"
        >
          <span className="button-icon">📱</span>
          <span className="button-text">
            <span className="button-small-text">Download on the</span>
            <span className="button-large-text">App Store</span>
          </span>
        </a>
        <a 
          href="./app-debug.apk" 
          download="stopcall-app.apk"
          className="download-button android-button"
        >
          <span className="button-icon">🤖</span>
          <span className="button-text">
            <span className="button-small-text">Get it on</span>
            <span className="button-large-text">Google Play</span>
          </span>
        </a>
      </div>
    </>
  )
}

export default App