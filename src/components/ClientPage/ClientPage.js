import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

// In real world, this would be picked from api
import { clients } from '../../data/clientList'

import './styles.css'

const ClientPage = (props) => {
  const { t } = useTranslation()
  const { id } = useParams()

  const selectedClient = clients.find((client) => client.id === id)

  return (
    <div className='client-page'>
      <div className='client-content'>
        <p className='title'>{t('Client Information')}</p>
        <div>
          <span>{t('Name')}</span><span>{selectedClient.name}</span>
        </div>
        <div>
          <span>{t('Slug')}</span><span>{selectedClient.id}</span>
        </div>
        <div>
          <span>{t('Age')}</span><span>{Math.floor(Math.random() * (70 - 10 + 1) + 10)}</span>
        </div>
      </div>
    </div>
  )
}

export default ClientPage
