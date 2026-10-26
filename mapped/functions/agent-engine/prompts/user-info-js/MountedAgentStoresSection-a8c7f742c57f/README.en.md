# `MountedAgentStoresSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:639879-639913](../../../../../../reference/runtime/host-main.cjs#L639879-L639913) | `FunctionDeclaration` | no | `{ stores, dynamicMountEnabled }` |
| [evaluation:430493-430527](../../../../../../reference/runtime/sand-eval-runner.cjs#L430493-L430527) | `FunctionDeclaration` | no | `{ stores, dynamicMountEnabled }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639879-639913](../../../../../../reference/runtime/host-main.cjs#L639879-L639913) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430493-430527](../../../../../../reference/runtime/sand-eval-runner.cjs#L430493-L430527) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:639879

Calls written directly in this body: `.join`, `jsx`, `jsxs`, `stores.find`, `stores.map`, `stores.some`.

SHA-256 of the source span: `c16e7b82ad279e046181c1963d8d60c4233503ab8e11dbb07e8d7df442f30a4e`.

### evaluation:430493

Calls written directly in this body: `.join`, `jsx`, `jsxs`, `stores.find`, `stores.map`, `stores.some`.

SHA-256 of the source span: `c16e7b82ad279e046181c1963d8d60c4233503ab8e11dbb07e8d7df442f30a4e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
