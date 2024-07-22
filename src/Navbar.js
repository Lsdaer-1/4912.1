import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import GuideModal from './GuideModal';
import SignInModal from './SignInModal';
import CreateActivityModal from './CreateActivityModal';
import { FaCanadianMapleLeaf } from 'react-icons/fa';
import './Navbar.css';
import FAQModal from './FAQModal';

function Navbar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isCreateActivityOpen, setIsCreateActivityOpen] = useState(false);
  const [isFAQOpen, setIsFAQOpen] = useState(false);

  const openGuide = () => setIsGuideOpen(true);
  const closeGuide = () => setIsGuideOpen(false);

  const openSignIn = () => setIsSignInOpen(true);
  const closeSignIn = () => setIsSignInOpen(false);

  const openCreateActivity = () => setIsCreateActivityOpen(true);
  const closeCreateActivity = () => setIsCreateActivityOpen(false);

  const openFAQ = () => setIsFAQOpen(true);
  const closeFAQ = () => setIsFAQOpen(false);
  return (
    <div>
      <GuideModal isOpen={isGuideOpen} onRequestClose={closeGuide} />
      <SignInModal isOpen={isSignInOpen} onRequestClose={closeSignIn} />
      <CreateActivityModal isOpen={isCreateActivityOpen} onRequestClose={closeCreateActivity} />
      <FAQModal isOpen={isFAQOpen} onRequestClose={closeFAQ} />

      <nav className="navbar">
        <div className="navbar-logo"><FaCanadianMapleLeaf style={{ color: 'red', fontSize: '50px' }} />ConnectCanada</div>
        <ul className="navbar-links">
        <li className="navbar-item"><Link to="#" onClick={() => changeLanguage('en')}>English</Link></li>
        <li className="navbar-item"><Link to="#"  onClick={() => changeLanguage('fr')}>Français</Link></li>
          <li className="navbar-item"><Link to="#" onClick={openCreateActivity}>{t('createActivity')}</Link></li>
          <li className="navbar-item"><Link to="#" onClick={openGuide}>Guide</Link></li>
          <li className="navbar-item"><Link to="#" onClick={openSignIn}>{t('signIn')}</Link></li>
          <li className="navbar-item">
            <Link onClick={openFAQ}>{t('faq')}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
