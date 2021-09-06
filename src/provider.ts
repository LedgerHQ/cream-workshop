import config from "./config.json";
import { ethers } from "ethers";

export const provider = new ethers.providers.WebSocketProvider(config.network.wsRPC);
