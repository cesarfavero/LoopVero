# `delayWith/<callback>/onAbort`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/async.ts` · [Module README](../../../../../modules/shared/node/async-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:494341-494344](../../../../../../reference/runtime/host-main.cjs#L494341-L494344) | `ArrowFunctionExpression` | no | `(none)` |
| [evaluation:474710-474713](../../../../../../reference/runtime/sand-eval-runner.cjs#L474710-L474713) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:494341-494344](../../../../../../reference/runtime/host-main.cjs#L494341-L494344) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:474710-474713](../../../../../../reference/runtime/sand-eval-runner.cjs#L474710-L474713) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:494341

Calls written directly in this body: `resolve31`, `scheduled.dispose`.

SHA-256 of the source span: `a1846df83c93f5bf88d980e1c391c174b320a57720726cb05233f1cf7199c38f`.

### evaluation:474710

Calls written directly in this body: `resolve19`, `scheduled.dispose`.

SHA-256 of the source span: `1d6dccd935a3b473be00efb3dc4c77385a3503b6323a956ba73bdfd2170763f5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
