# `createRequestOnePasswordConnectTool/showCard2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/request-onepassword-connect-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/request-onepassword-connect-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751656-751668](../../../../../../../reference/runtime/host-main.cjs#L751656-L751668) | `ArrowFunctionExpression` | no | `ctx, taskId` |
| [evaluation:524723-524735](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524723-L524735) | `ArrowFunctionExpression` | no | `ctx, taskId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751656-751668](../../../../../../../reference/runtime/host-main.cjs#L751656-L751668) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:524723-524735](../../../../../../../reference/runtime/sand-eval-runner.cjs#L524723-L524735) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:751656

Calls written directly in this body: `Date.now`, `cardOffered.increment`, `deps.onSendMessage`.

Assignment or increment targets: `cardSent`.

SHA-256 of the source span: `42323ecc2cff051b28297a536d1f217f2d95af0f5b7be7703db4fdaf465a729b`.

### evaluation:524723

Calls written directly in this body: `Date.now`, `cardOffered.increment`, `deps.onSendMessage`.

Assignment or increment targets: `cardSent`.

SHA-256 of the source span: `42323ecc2cff051b28297a536d1f217f2d95af0f5b7be7703db4fdaf465a729b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
