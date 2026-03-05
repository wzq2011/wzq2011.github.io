// 语言包
var lang = {
  zh: {
    "传照片": "传照片",
    "传图规则": "传图规则",
    "给站长留言": "给站长留言",
    "退出登录": "退出登录",
    "登录": "登录",
    "用户注册": "用户注册"
  },
  en: {
    "传照片": "Upload Photos",
    "传图规则": "Upload Rules",
    "给站长留言": "Leave Message",
    "退出登录": "Logout",
    "登录": "Login",
    "用户注册": "Register"
  },
  ja: {
    "传照片": "写真アップロード",
    "传图规则": "アップロード規則",
    "给站长留言": "メッセージ",
    "退出登录": "ログアウト",
    "登录": "ログイン",
    "用户注册": "新規登録"
  },
  ko: {
    "传照片": "사진 업로드",
    "传图规则": "업로드 규칙",
    "给站长留言": "메시지 남기기",
    "退出登录": "로그아웃",
    "登录": "로그인",
    "用户注册": "회원가입"
  },
  es: {
    "传照片": "Subir Fotos",
    "传图规则": "Reglas de Subida",
    "给站长留言": "Dejar Mensaje",
    "退出登录": "Cerrar Sesión",
    "登录": "Iniciar Sesión",
    "用户注册": "Registrarse"
  }
};

// 页面加载后执行
window.onload = function () {
  var navBar = document.getElementById("navBar");
  var user = localStorage.getItem("currentUser");
  var currentLang = localStorage.getItem("lang") || "zh";

  // 翻译函数
  function t(key) {
    return lang[currentLang] && lang[currentLang][key]
      ? lang[currentLang][key]
      : key;
  }

  // 渲染导航栏
  if (user) {
    navBar.innerHTML =
      '<a href="upload.html" class="nav-btn">' + t("传照片") + '</a>' +
      '<a href="rules.html" class="nav-btn">' + t("传图规则") + '</a>' +
      '<a href="feedback.html" class="nav-btn">' + t("给站长留言") + '</a>' +
      '<a class="nav-btn welcome">欢迎你，' + user + '</a>' +
      '<a href="javascript:logout()" class="nav-btn">' + t("退出登录") + '</a>';
  } else {
    navBar.innerHTML =
      '<a href="upload.html" class="nav-btn">' + t("传照片") + '</a>' +
      '<a href="rules.html" class="nav-btn">' + t("传图规则") + '</a>' +
      '<a href="feedback.html" class="nav-btn">' + t("给站长留言") + '</a>' +
      '<a href="login.html" class="nav-btn">' + t("登录") + '</a>' +
      '<a href="register.html" class="nav-btn">' + t("用户注册") + '</a>';
  }
};

// 退出登录
function logout() {
  localStorage.removeItem("currentUser");
  location.href = "index.html";
}

