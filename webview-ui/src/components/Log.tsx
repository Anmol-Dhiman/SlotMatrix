import { short } from "../../utils/HelperFunc";
import { LogData } from "../../utils/Types";
import { useState } from "react";

type LogProps = {
  logData: LogData[];
};

function Log({ logData }: LogProps) {
  const [openLogIndex, setOpenLogIndex] = useState<number | null>(null);

  const handleToggleDetails = (index: number) => {
    setOpenLogIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const renderLogField = (
    label: string,
    displayValue: any,
    copyValue?: string
  ) => {
    if (
      displayValue === undefined ||
      displayValue === null ||
      (typeof displayValue === "object" &&
        Object.keys(displayValue).length === 0)
    ) {
      return null;
    }

    const display =
      typeof displayValue === "object"
        ? JSON.stringify(displayValue, null, 2)
        : displayValue.toString();

    const toCopy =
      copyValue !== undefined
        ? copyValue
        : typeof displayValue === "object"
        ? JSON.stringify(displayValue)
        : displayValue.toString();

    const handleCopy = () => {
      navigator.clipboard.writeText(toCopy);
    };

    return (
      <div
        key={label}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: "14px",
          marginBottom: "6px",
        }}
      >
        <div
          style={{ minWidth: "180px", fontWeight: "bold", color: "#9cdcfe" }}
        >
          {label}:
        </div>
        <div
          style={{
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            flex: 1,
          }}
        >
          {display}
        </div>

        <div
          className="icon "
          style={{ marginLeft: "4px", cursor: "pointer" }}
          onClick={handleCopy}
        >
          <i className="codicon codicon-copy icon"></i>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        color: "#d4d4d4",

        backgroundColor: "#1e1e1e",
        padding: "16px",
      }}
    >
      {logData.map((log, index) => (
        <div
          key={index}
          style={{
            marginBottom: "16px",
            backgroundColor: "#252526",
            border: "1px solid #3c3c3c",
            borderRadius: "6px",
            padding: "12px",
          }}
        >
          <div
            onClick={() => handleToggleDetails(index)}
            style={{
              cursor: "pointer",
              fontWeight: "bold",

              marginBottom: "8px",
            }}
          >
            {log.heading}
          </div>

          {openLogIndex === index && (
            <div
              style={{
                fontSize: "13px",
                display: "grid",
                gap: "6px",
                backgroundColor: "#1e1e1e",
                padding: "8px",
                borderRadius: "4px",
              }}
            >
              {renderLogField("status", log.status)}
              {renderLogField("transactionHash", log.transactionHash)}
              {renderLogField("blockHash", log.blockHash)}
              {renderLogField("blockNumber", log.blockNumber)}
              {renderLogField("contractAddress", log.contractAddress)}
              {renderLogField("from", log.from)}
              {renderLogField("to", log.to)}
              {renderLogField("value", log.value)}
              {renderLogField("gas", log.gas)}
              {renderLogField(
                "input",
                log.input.length > 15 ? short(log.input) : log.input,
                log.input
              )}
              {renderLogField("output", log.output)}
              {renderLogField("decodedInput", log.decodedInput)}
              {renderLogField("decodedOutput", log.decodedOutput)}
              {renderLogField("eventLogs", log.eventLogs)}
              {renderLogField("reason", log.reason)}
              {renderLogField("error", log.error)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Log;
