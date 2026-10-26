# `switchModeRejected`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/interaction-queries.js` · [Module README](../../../../modules/agent-core/interaction-queries-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475658-475673](../../../../../reference/runtime/host-main.cjs#L475658-L475673) | `FunctionExpression` | no | `queryId, reason` |
| [evaluation:254882-254897](../../../../../reference/runtime/sand-eval-runner.cjs#L254882-L254897) | `FunctionExpression` | no | `queryId, reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475658-475673](../../../../../reference/runtime/host-main.cjs#L475658-L475673) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254882-254897](../../../../../reference/runtime/sand-eval-runner.cjs#L254882-L254897) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475658

Calls written directly in this body: `new InteractionResponse`, `new SwitchModeRequestResponse`, `new SwitchModeRequestResponse_Rejected`.

SHA-256 of the source span: `ee01a2e7de3111944a0b1db505029f1c19e0c39fcc318ebed20ca43dd24140da`.

### evaluation:254882

Calls written directly in this body: `new InteractionResponse`, `new SwitchModeRequestResponse`, `new SwitchModeRequestResponse_Rejected`.

SHA-256 of the source span: `ee01a2e7de3111944a0b1db505029f1c19e0c39fcc318ebed20ca43dd24140da`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
