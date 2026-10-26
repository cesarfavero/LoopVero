# `switchModeApproved`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-queries.js` · [Module README](../../../../modules/agent-core/interaction-queries-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475644-475657](../../../../../reference/runtime/host-main.cjs#L475644-L475657) | `FunctionExpression` | no | `queryId` |
| [evaluation:254868-254881](../../../../../reference/runtime/sand-eval-runner.cjs#L254868-L254881) | `FunctionExpression` | no | `queryId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475644-475657](../../../../../reference/runtime/host-main.cjs#L475644-L475657) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254868-254881](../../../../../reference/runtime/sand-eval-runner.cjs#L254868-L254881) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475644

Calls written directly in this body: `new InteractionResponse`, `new SwitchModeRequestResponse`, `new SwitchModeRequestResponse_Approved`.

SHA-256 of the source span: `87b18901d8a3b577e4fe28671a9515c4b95eb7af2a3b6bee3c32c30b431a9bf9`.

### evaluation:254868

Calls written directly in this body: `new InteractionResponse`, `new SwitchModeRequestResponse`, `new SwitchModeRequestResponse_Approved`.

SHA-256 of the source span: `87b18901d8a3b577e4fe28671a9515c4b95eb7af2a3b6bee3c32c30b431a9bf9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
