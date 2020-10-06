const LocalStorageService = (function () {
  var _service;
  function _getService() {
    if (!_service) {
      _service = this;
      return _service;
    }
    return _service;
  }
  function _setAccessToken(tokenObj) {
    localStorage.setItem("accessToken", tokenObj.access);
  }
  function _setRefreshToken(tokenObj) {
    localStorage.setItem("refreshToken", tokenObj.refresh);
  }
  function _getAccessToken() {
    return localStorage.getItem("accessToken");
  }
  function _getRefreshToken() {
    return localStorage.getItem("refreshToken");
  }
  function _clearToken() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }
  return {
    getService: _getService,
    setAccessToken: _setAccessToken,
    setRefreshToken: _setRefreshToken,
    getAccessToken: _getAccessToken,
    getRefreshToken: _getRefreshToken,
    clearToken: _clearToken,
  };
})();
export default LocalStorageService;
