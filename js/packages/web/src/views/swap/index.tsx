import { Layout } from 'antd';
import React from 'react';
import { useStore } from '@oyster/common';
import { useMeta } from '../../contexts';

import { ExchangeView } from '../../../../oyster-swap-master/src/components/exchange'

export const SwapView = () => {
  const { isLoading, store } = useMeta();
  const { isConfigured } = useStore();

  const showAuctions = (store && isConfigured) || isLoading;

  return (
    <Layout style={{ margin: 0, marginTop: 30, alignItems: 'center' }}>
        <strong>Swap Centre</strong>
        <p>A Self Service Swapping Service</p>
        <p>Coming Soon!</p>

        <ExchangeView />

    </Layout>
  );
};
