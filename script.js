//your JS code here. If required.
const div = document.getElementById("browser-info");


      const browserName = navigator.userAgent;
      const browserVersion = navigator.appVersion;
      
      const message = `You are using ${browserName} (version ${browserVersion}).`;
      
      document.getElementById("browser-info").textContent = message;
div.append(message);