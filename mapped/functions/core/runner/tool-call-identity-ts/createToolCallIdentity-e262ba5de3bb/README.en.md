# `createToolCallIdentity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tool-call-identity.ts` · [Module README](../../../../../modules/core/runner/tool-call-identity-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:553782-553817](../../../../../../reference/runtime/sand-eval-runner.cjs#L553782-L553817) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:553782-553817](../../../../../../reference/runtime/sand-eval-runner.cjs#L553782-L553817) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:553782

Calls written directly in this body: `new Map`.

SHA-256 of the source span: `f01cafaced9c23476190b6b059bf27ecddad0cc2138b978289406c8058cf878a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
