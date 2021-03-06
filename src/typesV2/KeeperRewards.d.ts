/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface KeeperRewardsInterface extends ethers.utils.Interface {
  functions: {
    "BASE_TIP()": FunctionFragment;
    "BLOCK_TIME()": FunctionFragment;
    "FIXED_GAS_OVERHEAD()": FunctionFragment;
    "FIXED_POINT()": FunctionFragment;
    "MAX_TIP()": FunctionFragment;
    "TIP_DELTA_PER_BLOCK()": FunctionFragment;
    "keeper()": FunctionFragment;
    "keeperGas(uint256,uint256,uint256)": FunctionFragment;
    "keeperReward(uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    "keeperTip(uint256,uint256)": FunctionFragment;
    "payKeeper(address,address,uint256,uint256,uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "BASE_TIP", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "BLOCK_TIME",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FIXED_GAS_OVERHEAD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "FIXED_POINT",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "MAX_TIP", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "TIP_DELTA_PER_BLOCK",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "keeper", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "keeperGas",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "keeperReward",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "keeperTip",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "payKeeper",
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(functionFragment: "BASE_TIP", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "BLOCK_TIME", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "FIXED_GAS_OVERHEAD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FIXED_POINT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MAX_TIP", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "TIP_DELTA_PER_BLOCK",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "keeper", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "keeperGas", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "keeperReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "keeperTip", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payKeeper", data: BytesLike): Result;

  events: {
    "PoolUpkeepError(address,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PoolUpkeepError"): EventFragment;
}

export class KeeperRewards extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: KeeperRewardsInterface;

  functions: {
    BASE_TIP(overrides?: CallOverrides): Promise<[BigNumber]>;

    BLOCK_TIME(overrides?: CallOverrides): Promise<[BigNumber]>;

    FIXED_GAS_OVERHEAD(overrides?: CallOverrides): Promise<[BigNumber]>;

    FIXED_POINT(overrides?: CallOverrides): Promise<[string]>;

    MAX_TIP(overrides?: CallOverrides): Promise<[BigNumber]>;

    TIP_DELTA_PER_BLOCK(overrides?: CallOverrides): Promise<[BigNumber]>;

    keeper(overrides?: CallOverrides): Promise<[string]>;

    keeperGas(
      _gasPrice: BigNumberish,
      _gasSpent: BigNumberish,
      _settlementTokenPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    keeperReward(
      _gasPrice: BigNumberish,
      _gasSpent: BigNumberish,
      _savedPreviousUpdatedTimestamp: BigNumberish,
      _poolInterval: BigNumberish,
      _settlementTokenPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    keeperTip(
      _savedPreviousUpdatedTimestamp: BigNumberish,
      _poolInterval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    payKeeper(
      _keeper: string,
      _pool: string,
      _gasPrice: BigNumberish,
      _gasSpent: BigNumberish,
      _savedPreviousUpdatedTimestamp: BigNumberish,
      _updateInterval: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  BASE_TIP(overrides?: CallOverrides): Promise<BigNumber>;

  BLOCK_TIME(overrides?: CallOverrides): Promise<BigNumber>;

  FIXED_GAS_OVERHEAD(overrides?: CallOverrides): Promise<BigNumber>;

  FIXED_POINT(overrides?: CallOverrides): Promise<string>;

  MAX_TIP(overrides?: CallOverrides): Promise<BigNumber>;

  TIP_DELTA_PER_BLOCK(overrides?: CallOverrides): Promise<BigNumber>;

  keeper(overrides?: CallOverrides): Promise<string>;

  keeperGas(
    _gasPrice: BigNumberish,
    _gasSpent: BigNumberish,
    _settlementTokenPrice: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  keeperReward(
    _gasPrice: BigNumberish,
    _gasSpent: BigNumberish,
    _savedPreviousUpdatedTimestamp: BigNumberish,
    _poolInterval: BigNumberish,
    _settlementTokenPrice: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  keeperTip(
    _savedPreviousUpdatedTimestamp: BigNumberish,
    _poolInterval: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  payKeeper(
    _keeper: string,
    _pool: string,
    _gasPrice: BigNumberish,
    _gasSpent: BigNumberish,
    _savedPreviousUpdatedTimestamp: BigNumberish,
    _updateInterval: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    BASE_TIP(overrides?: CallOverrides): Promise<BigNumber>;

    BLOCK_TIME(overrides?: CallOverrides): Promise<BigNumber>;

    FIXED_GAS_OVERHEAD(overrides?: CallOverrides): Promise<BigNumber>;

    FIXED_POINT(overrides?: CallOverrides): Promise<string>;

    MAX_TIP(overrides?: CallOverrides): Promise<BigNumber>;

    TIP_DELTA_PER_BLOCK(overrides?: CallOverrides): Promise<BigNumber>;

    keeper(overrides?: CallOverrides): Promise<string>;

    keeperGas(
      _gasPrice: BigNumberish,
      _gasSpent: BigNumberish,
      _settlementTokenPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    keeperReward(
      _gasPrice: BigNumberish,
      _gasSpent: BigNumberish,
      _savedPreviousUpdatedTimestamp: BigNumberish,
      _poolInterval: BigNumberish,
      _settlementTokenPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    keeperTip(
      _savedPreviousUpdatedTimestamp: BigNumberish,
      _poolInterval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    payKeeper(
      _keeper: string,
      _pool: string,
      _gasPrice: BigNumberish,
      _gasSpent: BigNumberish,
      _savedPreviousUpdatedTimestamp: BigNumberish,
      _updateInterval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    PoolUpkeepError(
      pool?: string | null,
      reason?: null
    ): TypedEventFilter<[string, string], { pool: string; reason: string }>;
  };

  estimateGas: {
    BASE_TIP(overrides?: CallOverrides): Promise<BigNumber>;

    BLOCK_TIME(overrides?: CallOverrides): Promise<BigNumber>;

    FIXED_GAS_OVERHEAD(overrides?: CallOverrides): Promise<BigNumber>;

    FIXED_POINT(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_TIP(overrides?: CallOverrides): Promise<BigNumber>;

    TIP_DELTA_PER_BLOCK(overrides?: CallOverrides): Promise<BigNumber>;

    keeper(overrides?: CallOverrides): Promise<BigNumber>;

    keeperGas(
      _gasPrice: BigNumberish,
      _gasSpent: BigNumberish,
      _settlementTokenPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    keeperReward(
      _gasPrice: BigNumberish,
      _gasSpent: BigNumberish,
      _savedPreviousUpdatedTimestamp: BigNumberish,
      _poolInterval: BigNumberish,
      _settlementTokenPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    keeperTip(
      _savedPreviousUpdatedTimestamp: BigNumberish,
      _poolInterval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    payKeeper(
      _keeper: string,
      _pool: string,
      _gasPrice: BigNumberish,
      _gasSpent: BigNumberish,
      _savedPreviousUpdatedTimestamp: BigNumberish,
      _updateInterval: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BASE_TIP(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    BLOCK_TIME(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    FIXED_GAS_OVERHEAD(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    FIXED_POINT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_TIP(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TIP_DELTA_PER_BLOCK(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    keeper(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    keeperGas(
      _gasPrice: BigNumberish,
      _gasSpent: BigNumberish,
      _settlementTokenPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    keeperReward(
      _gasPrice: BigNumberish,
      _gasSpent: BigNumberish,
      _savedPreviousUpdatedTimestamp: BigNumberish,
      _poolInterval: BigNumberish,
      _settlementTokenPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    keeperTip(
      _savedPreviousUpdatedTimestamp: BigNumberish,
      _poolInterval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    payKeeper(
      _keeper: string,
      _pool: string,
      _gasPrice: BigNumberish,
      _gasSpent: BigNumberish,
      _savedPreviousUpdatedTimestamp: BigNumberish,
      _updateInterval: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
