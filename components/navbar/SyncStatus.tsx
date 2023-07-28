'use client'

import React, { useEffect, useState } from 'react';
import OnlineIcon from '@mui/icons-material/WifiOutlined';
import OfflineIcon from '@mui/icons-material/WifiOffOutlined';
import SyncData from '@/utils/sync/SyncData';

const SyncStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    if(navigator.onLine) SyncData();
    const handleOnline = () => {
      setIsOnline(true);
      SyncData();
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <div>
      {isOnline ? (
        <OnlineIcon sx={{ width: 36, height: 36 }} />
      ) : (
        <OfflineIcon sx={{ width: 36, height: 36 }} />
      )}
    </div>
  );
};

export default SyncStatus;