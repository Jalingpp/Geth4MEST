# Geth4MEST
This is a go-ethereum version changed for MEST experiments. Geth4MEST is based on go-ethereum@v1.9.20 and change the transaction structure for non-primary key queries.

## Build Geth4MEST

### Build from exe
Download `build/bin/geth`.

### Build from source code
Download source code and build by `make geth`.

## Configure the execution path
`cd go-ethereum-1.9.2`

`cp ./build/bin/geth /usr/local/bin/`

## Build Private Blockchain
New a folder for blockchain nodes: `mkdir ethnodes`.

Generate `genesis.json` File in `ethnodes`. Copy the following content into the file.

```json:genesis.json
{
    "config": {
      "chainId": 200,
      "homesteadBlock": 0,
      "eip150Block": 0,
      "eip155Block": 0,
      "eip158Block": 0
    },
    "alloc": {},
    "coinbase": "0x0000000000000000000000000000000000000000",
    "difficulty": "0x20000",
    "extraData": "",
    "gasLimit": "0x2fefd8",
    "mixhash": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "nonce": "0x0000000000000042",
    "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
    "timestamp": "0x00"
}
```

Initialize a node: `cd ethnodes` and then `geth --datadir ./ init ./genesis.json`.

Start node and go into the console: `geth --networkid 200 --datadir "./" --nodiscover --rpcapi personal console`. Note that the networkid is the same as the chainId in `genesis.json`. `--rpcapi personal` allows usage of rpc methods of personal module.

## Run MEST Experiments
Change **siMode(meht,mbt,mpt)** located in line 203 of `miner/worker.go`.

Start mining and send transactions in console: `loadScript("run.js")`.

Wait for the program to execute and obtain the complete result. (maybe a long time)

Then execute `ethnodes/parseResult.py` to parse the execution result.
