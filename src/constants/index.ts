import { WatchQueryFetchPolicy } from '@apollo/client';
import { hethers } from '@hashgraph/hethers';
import BigNumber from 'bignumber.js';
import { AnalyticsViews, PageViews } from '../interfaces/common';
import { ICreatePairData, ISwapTokenData, ITokenData, ITokensData } from '../interfaces/tokens';
import { NATIVE_TOKEN } from '../utils/tokenUtils';

export const MAX_UINT_ERC20 = hethers.constants.MaxUint256;
//Maximum value for a 64-bit signed integer
export const MAX_UINT_HTS = new BigNumber('9223372036854775807');
export const POOLS_FEE = '0.3%';
export const HUNDRED_BN = new BigNumber('100');
export const REFRESH_TIME = 10000;
export const REFRESH_TIME_PROVIDE_SWAP_REMOVE = 10000;
export const REFRESH_TIME_POOLS_FARMS = 30000;
export const HEALTH_CHECK_INTERVAL = 10000;
export const BALLANCE_FETCH_INTERVAL = 60000;
export const SLIDER_INITIAL_VALUE = '100';
export const MAX_SLIPPAGE_VALUE = 50;
export const MAX_EXPIRATION_VALUE = 4000;

export const TRANSACTION_MAX_FEES = {
  APPROVE_HTS: 1000000,
  APPROVE_ERC20: 72000,
  PROVIDE_LIQUIDITY: 300000,
  CREATE_POOL: 2760000,
  REMOVE_NATIVE_LIQUIDITY: 2160000,
  REMOVE_LIQUIDITY: 192000,
  BASE_SWAP: 144000,
  BASE_SWAP_NATIVE: 240000,
  EXTRA_SWAP: 60000,
  TOKEN_OUT_EXACT_SWAP: 24000,
  WRAP_HBAR: 72000,
  UNWRAP_WHBAR: 96000,
  TRANSFER_ERC20: 72000,
  STAKE_LP_TOKEN: 276000,
  COLLECT_REWARDS: 360000,
  EXIT_CAMPAIGN: 360000,
};

export enum SORT_OPTIONS_ENUM {
  TVL = 'tvl',
  VOL_7 = 'volume7',
  VOL_24 = 'volume24',
  TOTAL_STAKED = 'totalStakedUSD',
  APR = 'APR',
}

export type SORT_OPTIONS =
  | SORT_OPTIONS_ENUM.TVL
  | SORT_OPTIONS_ENUM.VOL_7
  | SORT_OPTIONS_ENUM.VOL_24
  | SORT_OPTIONS_ENUM.TOTAL_STAKED
  | SORT_OPTIONS_ENUM.APR;

export enum SORT_DIRECTION {
  ASC = 'asc',
  DESC = 'desc',
}

export const ASYNC_SEARCH_THRESHOLD = 2;

export const initialTokensDataCreate = {
  tokenA: {} as ITokenData,
  tokenB: {} as ITokenData,
};

export const initialTokensDataSwap: ITokensData = {
  tokenA: NATIVE_TOKEN,
  tokenB: {} as ITokenData,
};

export const initialCreateData: ICreatePairData = {
  tokenAAmount: '',
  tokenBAmount: '',
  tokenAId: '',
  tokenBId: '',
  tokenADecimals: 18,
  tokenBDecimals: 18,
};

export const initialSwapData: ISwapTokenData = {
  amountIn: '',
  amountOut: '',
};

export const initialApproveData = {
  tokenA: false,
  tokenB: false,
};

export const initialNeedApprovalData = {
  tokenA: true,
  tokenB: true,
};

export const initialPoolsAnalyticsData = {
  tvl: 0,
  volume24h: 0,
  volume7d: 0,
};

export const poolsPageInitialCurrentView: PageViews = PageViews.ALL_POOLS;

export const analyticsPageInitialCurrentView: AnalyticsViews = AnalyticsViews.OVERVIEW;

export const useQueryOptions = {
  fetchPolicy: 'network-only' as WatchQueryFetchPolicy,
};

export const useQueryOptionsProvideSwapRemove = {
  fetchPolicy: 'network-only' as WatchQueryFetchPolicy,
  pollInterval: REFRESH_TIME_PROVIDE_SWAP_REMOVE,
};

export const useQueryOptionsPoolsFarms = {
  fetchPolicy: 'network-only' as WatchQueryFetchPolicy,
  pollInterval: REFRESH_TIME_POOLS_FARMS,
};

export const HASHSCAN_ROOT_DOMAIN = 'https://bscscan.com';

export const POOLS_PER_PAGE = 10;
export const TOKENS_PER_PAGE = 10;

export enum INITIAL_CHART_LABELS {
  TVL_LINE_CHART = 'TVL',
  VOLUME_BAR_CHART = 'Volume 24H',
}

export const C14URL = 'https://pay.c14.money/';
