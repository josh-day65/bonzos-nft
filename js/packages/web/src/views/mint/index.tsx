import { Layout } from 'antd';
import React from 'react';
import { useStore } from '@oyster/common';
import { useMeta } from '../../contexts';


export const MintView = () => {
  const { isLoading, store } = useMeta();
  const { isConfigured } = useStore();

  const showAuctions = (store && isConfigured) || isLoading;

  return (
    <Layout style={{ margin: 0, marginTop: 30, alignItems: 'center' }}>
      <strong>Mint Centre</strong>
      <p>A Self Servince Minting Service</p>
      <p>Coming Soon!</p>
    </Layout>
  );
};
