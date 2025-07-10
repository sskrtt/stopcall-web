import './App.css'

function App() {
  const lastModifiedDate = import.meta.env.VITE_APP_LAST_MODIFIED_DATE || 'N/A';

  return (
    <>
      <h1>스탑콜 테스트 앱</h1>
      <p className="last-modified">최근 앱 수정 날짜: {lastModifiedDate}</p>
      
      <div className="app-store-section">
        <h2>정식 앱 다운로드</h2>
        <div className="app-download-buttons">
          <a 
            href="https://apps.apple.com/kr/app/stopcall/id6746296953"
            target="_blank"
            rel="noopener noreferrer"
            className="download-button ios-button"
          >
            <span className="button-icon">📱</span>
            <span className="button-text">
              <span className="button-small-text">Download on the</span>
              <span className="button-large-text">App Store</span>
            </span>
          </a>
          <a 
            href="https://play.google.com/store/apps/details?id=kr.co.stopcall.app"
            target="_blank"
            rel="noopener noreferrer"
            className="download-button android-button"
          >
            <span className="button-icon">🤖</span>
            <span className="button-text">
              <span className="button-small-text">Get it on</span>
              <span className="button-large-text">Google Play</span>
            </span>
          </a>
        </div>
      </div>

      <div className="test-app-section">
        <h2>테스트 앱 다운로드</h2>
        <div className="test-download-buttons">
          <a 
            href="itms-services://?action=download-manifest&url=https://sskrtt.github.io/stopcall-web/manifest.plist"
            className="download-button ios-test-button"
          >
            <span className="button-icon">📱</span>
            <span className="button-text">
              <span className="button-small-text">iOS TestFlight</span>
              <span className="button-large-text">다운로드</span>
            </span>
          </a>
          <a 
            href="./app-release.apk" 
            download="stopcall-release.apk"
            className="download-button android-test-button"
          >
            <span className="button-icon">🤖</span>
            <span className="button-text">
              <span className="button-small-text">Android Release</span>
              <span className="button-large-text">다운로드</span>
            </span>
          </a>
        </div>
      </div>
    </>
  )
}

export default App