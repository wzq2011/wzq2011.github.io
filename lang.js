// ==== 这是唯一的语言包，所有页面都用它 ====
const lang = {
  zh: {
    首页: "首页",
    上传照片: "上传照片",
    给站长留言: "给站长留言",
    登录: "登录",
    用户注册: "用户注册",
    公告: "欢迎来到航空摄影图库",
    提交留言: "提交留言",
    成功提示: "提交成功！",
    返回首页: "返回首页",
    功能未开放: "⚠️ 功能未开放",
    测试公告1: "本网站目前处于测试阶段，照片上传功能暂未开放",
    测试公告2: "敬请期待正式上线后开放此功能！",
    占位文字: "此处未来可上传照片"
  },
  en: {
    首页: "Home",
    上传照片: "Upload Photo",
    给站长留言: "Leave a Message",
    登录: "Login",
    用户注册: "Register",
    公告: "Welcome to Aviation Gallery",
    提交留言: "Submit",
    成功提示: "Submitted!",
    返回首页: "Back to Home",
    功能未开放: "⚠️ Feature Unavailable",
    测试公告1: "This website is in testing. Upload is temporarily disabled.",
    测试公告2: "Stay tuned for the official launch!",
    占位文字: "Upload area coming soon"
  },
  ja: {
    首页: "ホーム",
    上传照片: "写真アップロード",
    给站长留言: "メッセージ",
    登录: "ログイン",
    用户注册: "登録",
    公告: "航空ギャラリーへようこそ",
    提交留言: "送信",
    成功提示: "送信完了！",
    返回首页: "ホームに戻る",
    功能未开放: "⚠️ 機能は未開放",
    测试公告1: "現在テスト中で、アップロード機能は一時停止中です",
    测试公告2: "正式公開をお待ちください！",
    占位文字: "ここに写真をアップロード予定"
  },
  ko: {
    首页: "홈",
    上传照片: "사진 업로드",
    给站长留言: "메시지 남기기",
    登录: "로그인",
    用户注册: "회원가입",
    公告: "항공 갤러리에 오신 것을 환영합니다",
    提交留言: "제출",
    成功提示: "제출 완료!",
    返回首页: "홈으로 돌아가기",
    功能未开放: "⚠️ 기능 미개방",
    测试公告1: "현재 테스트 중이며, 업로드 기능은 일시 중단되었습니다",
    测试公告2: "정식 오픈을 기다려주세요!",
    占位文字: "곧 사진 업로드가 가능합니다"
  },
  es: {
    首页: "Inicio",
    上传照片: "Subir Foto",
    给站长留言: "Dejar Mensaje",
    登录: "Iniciar Sesión",
    用户注册: "Registrarse",
    公告: "Bienvenido a la Galería de Aviación",
    提交留言: "Enviar",
    成功提示: "Enviado!",
    返回首页: "Volver al Inicio",
    功能未开放: "⚠️ Función No Disponible",
    测试公告1: "El sitio está en pruebas. La subida está deshabilitada.",
    测试公告2: "¡Estén atentos al lanzamiento oficial!",
    占位文字: "Zona de subida pronto disponible"
  }
};

// ==== 自动翻译逻辑 ====
document.addEventListener('DOMContentLoaded', function() {
  const currentLang = localStorage.getItem('lang') || 'zh';
  
  // 替换页面文字
  document.querySelectorAll('[i18n]').forEach(el => {
    const key = el.getAttribute('i18n');
    el.textContent = lang[currentLang][key] || el.textContent;
  });
});
// 监听语言切换下拉框
document.getElementById('langSwitch').addEventListener('change', function(e) {
  const selectedLang = e.target.value;
  localStorage.setItem('lang', selectedLang);
  // 刷新页面，让新语言生效
  location.reload();
});
