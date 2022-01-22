/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ERC721Interface,
  ERC721InterfaceInterface,
} from "../ERC721Interface";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ERC721Interface__factory {
  static readonly abi = _abi;
  static createInterface(): ERC721InterfaceInterface {
    return new utils.Interface(_abi) as ERC721InterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Interface {
    return new Contract(address, _abi, signerOrProvider) as ERC721Interface;
  }
}