# `recordDelegationCompleted`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/action-audit/delegation-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/delegation-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770032-770034](../../../../../../../reference/runtime/host-main.cjs#L770032-L770034) | `FunctionDeclaration` | no | `ctx, settled` |
| [evaluation:566716-566718](../../../../../../../reference/runtime/sand-eval-runner.cjs#L566716-L566718) | `FunctionDeclaration` | no | `ctx, settled` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770032-770034](../../../../../../../reference/runtime/host-main.cjs#L770032-L770034) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:566716-566718](../../../../../../../reference/runtime/sand-eval-runner.cjs#L566716-L566718) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:770032

Calls written directly in this body: `.completed`, `ctx.get`.

SHA-256 of the source span: `cff8a560cc36d5b68ea5db69017d136c93951a14041e81bde4c9144474e0269e`.

### evaluation:566716

Calls written directly in this body: `.completed`, `ctx.get`.

SHA-256 of the source span: `cff8a560cc36d5b68ea5db69017d136c93951a14041e81bde4c9144474e0269e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
