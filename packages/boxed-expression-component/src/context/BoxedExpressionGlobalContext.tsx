/*
 * Copyright 2021 Red Hat, Inc. and/or its affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as React from "react";
import { PMMLParams } from "../api";
import { useContext } from "react";

export interface BoxedExpressionGlobalContextProps {
  decisionNodeId: string;
  pmmlParams?: PMMLParams;
  supervisorHash: string;
  setSupervisorHash: (hash: string) => void;
  editorRef: React.RefObject<HTMLDivElement>;
  currentlyOpenedHandlerCallback: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentlyOpenedHandlerCallback: React.Dispatch<
    React.SetStateAction<React.Dispatch<React.SetStateAction<boolean>>>
  >;
}

export const BoxedExpressionGlobalContext = React.createContext<BoxedExpressionGlobalContextProps>(
  {} as BoxedExpressionGlobalContextProps
);

export function useBoxedExpression() {
  return useContext(BoxedExpressionGlobalContext);
}