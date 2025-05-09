import { LogData } from "../../utils/Types";
import { useState } from "react";

type LogProps = {
  logData: LogData[];
};

function Log({ logData }: LogProps) {
  const [openLogIndex, setOpenLogIndex] = useState<number | null>(null);

  const handleToggleDetails = (index: number) => {
    // Toggle the visibility of the log details
    setOpenLogIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {logData.map((log, index) => (
        <div key={index} style={{ marginBottom: "12px" }}>
          <div
            onClick={() => handleToggleDetails(index)}
            style={{ cursor: "pointer" }}
          >
            {log.heading}
          </div>
          {/* Display log details only if the log is clicked */}
          {openLogIndex === index && (
            <div style={{ marginTop: "8px", fontSize: "12px", gap: "4px" }}>
              <div>status: {log.status}</div>
              <div>transaction hash: {log.transactionHash}</div>
              <div>blockhash: {log.blockHash}</div>
              <div>blocknumber: {log.blockNumber}</div>
              <div>from: {log.from}</div>
              <div>to: {log.to}</div>
              <div>gas: {log.gas}</div>
              <div>transaction ost: {log.transactionCost}</div>
              <div>execution Cost: {log.executionCost}</div>
              <div>input: {log.input}</div>
              <div>
                decodedInput: {JSON.stringify(log.decodedInput, null, 2)}
              </div>
              <div>output: {log.output}</div>
              <div>
                decodedOutput: {JSON.stringify(log.decodedOutput, null, 2)}
              </div>
              <div>logs: {JSON.stringify(log.logs, null, 2)}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Log;
