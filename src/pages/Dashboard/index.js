import React from 'react'

import api from '~/services/api'

const Dashboard = () => {
  api.get('appointments')
  return <div>Dash</div>
}

export default Dashboard
