"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{ /* wallets */ }
<div>
        <p>Wallets</p>
        <VscodeSingleSelect value={currentWallet.toString()} onChange={(event) => {
        setCurrentWallet(parseInt(event.target.value));
    }}>
          {wallets.map((account, index) => (<VscodeOption key={`${account.publicKey}-${account.balance}`} value={index.toString()} selected={index === currentWallet}>
              {`${account.publicKey.slice(0, 6)}...${account.publicKey.slice(-6)}  (${account.balance} ETH)`}
            </VscodeOption>))}
        </VscodeSingleSelect>
      </div>;
{ /* deployable contract  */ }
<div>
        <p>Deployable Contract</p>
        <VscodeSingleSelect onChange={(event) => {
        setCurrentContractFileIndex(JSON.parse(event.target.value));
    }} style={{ marginBottom: "10px" }}>
          {contractFiles.length !== 0 &&
        contractFiles.map((file, index) => (<VscodeOption key={index} value={index.toString()}>
                {file.basename + ":" + file.contractName}
              </VscodeOption>))}
        </VscodeSingleSelect>
      </div>;
{ /* eth value  */ }
<div>
        <p>ETH Value</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <VscodeTextfield type="number" value={ethValue} placeholder="ETH Value" style={{ width: "20%" }} onChange={(event) => {
        setEthValue(event.target.value);
    }}/>

          <VscodeSingleSelect onChange={(event) => {
        setEthFormat(event.target.value);
    }}>
            {ETHFormat.map((format, index) => {
        return (<VscodeOption key={index} value={format}>
                  {format.toLocaleUpperCase()}
                </VscodeOption>);
    })}
          </VscodeSingleSelect>
        </div>
      </div>;
{ /* constructor inputs */ }
{
    constructorInputs !== undefined &&
        constructorInputs.inputs.length > 0 && (<div>
            <p>Constructor Input</p>
            {constructorInputs.inputs.map((input, index) => {
            return (<div style={{ display: "flex", flexDirection: "column" }}>
                  <p>{input.name} : </p>
                  <VscodeTextfield key={index} value={input.value} placeholder={input.type} onChange={(event) => {
                    handleInputChange(index, event.target.value);
                }}/>
                </div>);
        })}
          </div>);
}
{ /* deploy button */ }
<div>
        <VscodeButton onClick={handleDeploy} style={{
        backgroundColor: constructorInputs?.stateMutability === "payable"
            ? "#cb0303"
            : undefined,
        marginBottom: "8px",
        marginTop: "4px",
        width: "20%",
    }}>
          Deploy
        </VscodeButton>
      </div>;
//# sourceMappingURL=temp.js.map