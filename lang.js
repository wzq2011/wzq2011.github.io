// 语言包
const lang = {
  zh: {
    "传照片": "传照片",
    "给站长留言": "给站长留言",
    "登录": "登录",
    "用户注册": "用户注册",
    "退出登录": "退出登录",
    "欢迎你": "欢迎你",
    "传图规则": "传图规则"
  },
  en: {
    "传照片": "Upload Photos",
    "给站长留言": "Leave Message",
    "登录": "Login",
    "用户注册": "Register",
    "退出登录": "Logout",
    "欢迎你": "Welcome",
    "传图规则": "Upload Rules"
  },
  ja: {
    "传照片": "写真アップロード",
    "给站长留言": "メッセージ",
    "登录": "ログイン",
    "用户注册": "登録",
    "退出登录": "ログアウト",
    "欢迎你": "ようこそ",
    "传图规则": "アップロードルール"
  },
  ko: {
    "传照片": "사진 업로드",
    "给站长留言": "메시지 남기기",
    "登录": "로그인",
    "用户注册": "회원가입",
    "退出登录": "로그아웃",
    "欢迎你": "환영합니다",
    "传图规则": "업로드 규칙"
  },
  es: {
    "传照片": "Subir Fotos",
    "给站长留言": "Dejar Mensaje",
    "登录": "Iniciar Sesión",
    "用户注册": "Registrarse",
    "退出登录": "Cerrar Sesión",
    "欢迎你": "Bienvenido",
    "传图规则": "Reglas de Subida"
  }
};

// 页面加载时自动应用语言
document.addEventListener('DOMContentLoaded', function () {
  const currentLang = localStorage.getItem('lang') || 'zh';
  document.querySelectorAll('[i18n]').forEach(el => {
    const key = el.getAttribute('i18n');
    if (lang[currentLang] && lang[currentLang][key]) {
      el.textContent = lang[currentLang][key];
    }
  });

  // 同步下拉框显示
  const select = document.getElementById('langSwitch');
  if (select) select.value = currentLang;
});

// 监听语言切换
document.addEventListener('DOMContentLoaded', function () {
  const select = document.getElementById('langSwitch');
  if (!select) return;

  select.addEventListener('change', function () {
    const selected = this.value;
    localStorage.setItem('lang', selected);
    location.reload();
  });
});

