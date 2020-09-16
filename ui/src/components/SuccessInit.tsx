import React from "react";
import { LiffStatus } from "@src/constants";

export default function SuccessInit({
  status,
  children,
}: {
  status: LiffStatus;
  children: JSX.Element;
}) {
  switch (status) {
    case LiffStatus.Success:
      return children;
    case LiffStatus.Failed:
      return <div>Liff failed Initialization</div>;
    case LiffStatus.Initializing:
      return <div>Initializing....</div>;
  }
}
