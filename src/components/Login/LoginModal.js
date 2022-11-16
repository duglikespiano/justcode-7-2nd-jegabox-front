import React, { useEffect, useRef, useState } from 'react';
import css from './LoginModal.module.scss';
import { useCookies } from 'react-cookie';
import WrongLoginAlert from './WrongLoginAlert/WrongLoginAlert';

const LoginModal = ({ closeLogin }) => {
  //아이디 저장 상태값
  const [saveId, setSaveId] = useState(false);

  //로그인 버튼 disabled 상태값
  const [disabled, setDisabled] = useState(true);

  //로그인 여부 상태값
  const [isLogin, setIsLogin] = useState(false);

  //아이디,비밀번호 현재값 저장
  const [idValue, setIdValue] = useState();
  const [pwValue, setPwValue] = useState();
  const idInput = useRef();
  const pwInput = useRef();
  const getIdValue = e => {
    setIdValue(e.target.value);
  };
  const getPwValue = e => {
    setPwValue(e.target.value);
  };

  //아이디,비밀번호 둘 다 값이 존재해야 로그인 버튼 활성화
  useEffect(() => {
    if (idValue && pwValue) {
      setDisabled(false);
    } else if (!idValue || !pwValue) {
      setDisabled(true);
    }
  }, [idValue, pwValue]);

  //로그인 함수(로그인버튼 onclick)
  const login = () => {
    // fetch('http://localhost:8000/user/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ id: idValue, pw: pwValue }),
    // })
    //   .then(res => res.json())
    //   .then(json => {
    //     if (json.token) {
    //       localStorage.setItem('token', json.token);
    //       setIsLogin(true);
    //     }
    //   });
    if (isLogin) {
      closeLogin();
    } else {
      idInput.current.value = '';
      pwInput.current.value = '';
      openLoginAlert();
      setDisabled(true);
      return;
    }
  };
  //알림 모달창 상태값
  const [openLoginAlertModal, setOpenLoginAlertModal] = useState(false);
  const openLoginAlert = () => {
    setOpenLoginAlertModal(true);
  };
  const closeLoginAlert = () => {
    setOpenLoginAlertModal(false);
  };
  return (
    <div className={css.loginBackground}>
      {openLoginAlertModal && (
        <WrongLoginAlert closeLoginAlert={closeLoginAlert} />
      )}
      <div className={css.loginContainer}>
        <div className={css.loginTop}>
          <div className={css.loginTopTitle}>
            <h3>로그인</h3>
            <button className={css.closeLoginBtn} onClick={closeLogin} />
          </div>
        </div>
        <div className={css.loginMain}>
          <div className={css.loginElements}>
            <div className={css.loginInputs}>
              <input
                type="text"
                placeholder="아이디"
                className={css.loginInputStyle}
                ref={idInput}
                onChange={getIdValue}
              />
              <input
                type="password"
                placeholder="비밀번호"
                className={css.loginInputStyle}
                ref={pwInput}
                onChange={getPwValue}
              />
            </div>
            <label htmlFor="saveIdRadio" className={css.loginCheckboxArea}>
              <input
                type="checkbox"
                name="saveIdRadio"
                className={css.loginChekboxStyle}
              />
              아이디 저장
            </label>
            <button
              className={
                !disabled ? `${css.loginBtn}` : `${css.disabledLoginBtn}`
              }
              disabled={disabled}
              onClick={login}
            >
              로그인
            </button>
            <div className={css.loginFindInfo}>
              <div className={css.loginFIndInfoCenter}>
                <span className={css.goToFindLoginInfo}>ID / PW 찾기</span>
                <div className={css.loginFindBoundary} />
                <span className={css.goToJoin}>회원가입</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
