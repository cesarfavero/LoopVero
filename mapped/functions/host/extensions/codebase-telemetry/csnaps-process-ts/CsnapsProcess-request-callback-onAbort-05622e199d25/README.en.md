# `_CsnapsProcess.request/<callback>/onAbort`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/csnaps-process.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/csnaps-process-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:541520-541528](../../../../../../../reference/runtime/host-main.cjs#L541520-L541528) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541520-541528](../../../../../../../reference/runtime/host-main.cjs#L541520-L541528) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:541520

Calls written directly in this body: `new CsnapsProcessError`, `response.reject`, `this.fail`, `this.pendingRequests.delete`.

SHA-256 of the source span: `8278a17ffae4244d12e420fb990c53e6217afcee6471a30ee9a677aeefcca05b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
