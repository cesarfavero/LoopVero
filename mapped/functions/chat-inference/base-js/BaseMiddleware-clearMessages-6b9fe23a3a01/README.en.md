# `BaseMiddleware.clearMessages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/inference/README.en.md).

**Module:** `chat-inference/base.js` · [Module README](../../../../modules/chat-inference/base-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:617362-617364](../../../../../reference/runtime/host-main.cjs#L617362-L617364) | `method` | no | `(none)` |
| [evaluation:286064-286066](../../../../../reference/runtime/sand-eval-runner.cjs#L286064-L286066) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617362-617364](../../../../../reference/runtime/host-main.cjs#L617362-L617364) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:286064-286066](../../../../../reference/runtime/sand-eval-runner.cjs#L286064-L286066) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:617362

Calls written directly in this body: `this.innerExecutor.clearMessages`.

SHA-256 of the source span: `4b65a029b551c6fc25d9944d01b60f7b7e5407774872709a273b393db307169a`.

### evaluation:286064

Calls written directly in this body: `this.innerExecutor.clearMessages`.

SHA-256 of the source span: `4b65a029b551c6fc25d9944d01b60f7b7e5407774872709a273b393db307169a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
