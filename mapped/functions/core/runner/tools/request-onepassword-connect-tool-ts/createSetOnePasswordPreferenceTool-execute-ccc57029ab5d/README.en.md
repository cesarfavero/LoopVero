# `createSetOnePasswordPreferenceTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/request-onepassword-connect-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/request-onepassword-connect-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751703-751718](../../../../../../../reference/runtime/host-main.cjs#L751703-L751718) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:524770-524785](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524770-L524785) | `ArrowFunctionExpression` | yes | `ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751703-751718](../../../../../../../reference/runtime/host-main.cjs#L751703-L751718) | 5 | 0 | 1 | 3 | 0 | 0 |
| [evaluation:524770-524785](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524770-L524785) | 5 | 0 | 1 | 3 | 0 | 0 |

### host:751703

Calls written directly in this body: `.then`, `connectOffer.setDeclined`, `credentialLoginRoutingTool`, `preferenceSet.increment`.

SHA-256 of the source span: `4b0bc9fcfb8d24937c99cb85b03df223b82876bde81c098bc88f6c35e242886c`.

### evaluation:524770

Calls written directly in this body: `.then`, `connectOffer.setDeclined`, `credentialLoginRoutingTool`, `preferenceSet.increment`.

SHA-256 of the source span: `4b0bc9fcfb8d24937c99cb85b03df223b82876bde81c098bc88f6c35e242886c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
