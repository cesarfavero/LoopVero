# `unwrap`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/arg-coercion/coerce-tool-args.ts` · [Module README](../../../../../../../modules/core/runner/tools/arg-coercion/coerce-tool-args-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724834-724853](../../../../../../../../reference/runtime/host-main.cjs#L724834-L724853) | `FunctionDeclaration` | no | `schema3` |
| [evaluation:479797-479816](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479797-L479816) | `FunctionDeclaration` | no | `schema3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724834-724853](../../../../../../../../reference/runtime/host-main.cjs#L724834-L724853) | 6 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:479797-479816](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L479797-L479816) | 6 | 1 | 0 | 1 | 0 | 0 |

### host:724834

Calls written directly in this body: `current2.innerType`, `current2.removeCatch`, `current2.removeDefault`, `current2.unwrap`.

Assignment or increment targets: `current2`.

SHA-256 of the source span: `c240c7980b505b52c9b69c8819d1753510b192ac995cf5e30c57911f679ee512`.

### evaluation:479797

Calls written directly in this body: `current2.innerType`, `current2.removeCatch`, `current2.removeDefault`, `current2.unwrap`.

Assignment or increment targets: `current2`.

SHA-256 of the source span: `efa228581ed60db23b10cfb17a79af24c7d6680f0f71893eca76978c594118b8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
