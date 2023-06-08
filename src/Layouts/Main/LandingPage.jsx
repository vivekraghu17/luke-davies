import React from 'react'
import styles from "../../Stylesheets/Layouts/Main/landingPage.module.scss"
import companyImage from "../../Assets/Images/company-name.png"
import Button from '@mui/material/Button';
export default function LandingPage() {
  return (
    <div className={styles['main-div']}>
      <img src={companyImage} className={styles['company-name-image']} alt="davies-construction"/>
      <Button className={styles['start-button']}>Let's Start</Button>
    </div>
  )
}
