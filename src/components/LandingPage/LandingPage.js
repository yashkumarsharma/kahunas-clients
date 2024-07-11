import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { clients } from '../../data/clientList'
import './styles.css'

const LandingPage = () => {
  const { t } = useTranslation()

  return (
    <div className='clients-landing-page'>
      <div className='client-list-page'>
        <div className='title'>{t('Client List')}</div>
        <ul className='client-list'>
          {clients.map(client => (
            <li key={client.id}>
              <Link to={`/${client.id}`}>{client.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LandingPage
