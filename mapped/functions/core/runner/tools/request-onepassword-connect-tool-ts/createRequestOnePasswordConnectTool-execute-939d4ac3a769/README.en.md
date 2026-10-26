# `createRequestOnePasswordConnectTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/request-onepassword-connect-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/request-onepassword-connect-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751679-751686](../../../../../../../reference/runtime/host-main.cjs#L751679-L751686) | `ArrowFunctionExpression` | yes | `ctx, args, d` |
| [evaluation:524746-524753](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524746-L524753) | `ArrowFunctionExpression` | yes | `ctx, args, d` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751679-751686](../../../../../../../reference/runtime/host-main.cjs#L751679-L751686) | 1 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:524746-524753](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524746-L524753) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:751679

Calls written directly in this body: `cardOffered.increment`, `cardShownResult`, `resolveCardTaskThread`, `showCard2`.

SHA-256 of the source span: `0529008b5f6123ae5fcdcca3b7c9064890d89e2416a090cb3cd19303c67037c7`.

### evaluation:524746

Calls written directly in this body: `cardOffered.increment`, `cardShownResult`, `resolveCardTaskThread`, `showCard2`.

SHA-256 of the source span: `0529008b5f6123ae5fcdcca3b7c9064890d89e2416a090cb3cd19303c67037c7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
