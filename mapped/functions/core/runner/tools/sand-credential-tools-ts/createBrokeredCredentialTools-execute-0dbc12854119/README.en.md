# `createBrokeredCredentialTools/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-credential-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-credential-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:751956-751977](../../../../../../../reference/runtime/host-main.cjs#L751956-L751977) | `ArrowFunctionExpression` | yes | `ctx, args, deps` |
| [evaluation:525022-525043](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525022-L525043) | `ArrowFunctionExpression` | yes | `ctx, args, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:751956-751977](../../../../../../../reference/runtime/host-main.cjs#L751956-L751977) | 8 | 0 | 2 | 5 | 0 | 0 |
| [evaluation:525022-525043](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525022-L525043) | 8 | 0 | 2 | 5 | 0 | 0 |

### host:751956

Calls written directly in this body: `broker.fill`, `broker.getStatus`, `noteToolTargetHost`.

SHA-256 of the source span: `811355e127ba0418c1a1b47941a1cbe8ca55b19830f8b791be9a57afb03666e1`.

### evaluation:525022

Calls written directly in this body: `broker.fill`, `broker.getStatus`, `noteToolTargetHost`.

SHA-256 of the source span: `811355e127ba0418c1a1b47941a1cbe8ca55b19830f8b791be9a57afb03666e1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
