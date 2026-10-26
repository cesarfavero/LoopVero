# `rethrowAsScmConnectRefusal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/scm-connect-refusal.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/scm-connect-refusal-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505365-505368](../../../../../../../reference/runtime/host-main.cjs#L505365-L505368) | `FunctionDeclaration` | no | `error64` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505365-505368](../../../../../../../reference/runtime/host-main.cjs#L505365-L505368) | 1 | 0 | 0 | 0 | 1 | 0 |

### host:505365

Calls written directly in this body: `connectRefusalTitle`, `new SandScmConnectRefusedError`.

Explicit throw targets: `ConditionalExpression`.

SHA-256 of the source span: `f9dce89df3e1180f21608df87ecb6ffb621afec79c0903db3feb3613ecc7f8d7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
