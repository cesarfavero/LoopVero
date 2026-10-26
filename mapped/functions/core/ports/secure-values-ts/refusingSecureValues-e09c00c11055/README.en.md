# `refusingSecureValues`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/ports/secure-values.ts` · [Module README](../../../../../modules/core/ports/secure-values-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724111-724122](../../../../../../reference/runtime/host-main.cjs#L724111-L724122) | `FunctionDeclaration` | no | `options2 = {}` |
| [evaluation:479400-479411](../../../../../../reference/runtime/sand-eval-runner.cjs#L479400-L479411) | `FunctionDeclaration` | no | `options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724111-724122](../../../../../../reference/runtime/host-main.cjs#L724111-L724122) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479400-479411](../../../../../../reference/runtime/sand-eval-runner.cjs#L479400-L479411) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:724111

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `66d0474c8b0ef996d408eff2f5cedf8de2176ca8906e0b6cf74e82a8a3bcb1bd`.

### evaluation:479400

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `66d0474c8b0ef996d408eff2f5cedf8de2176ca8906e0b6cf74e82a8a3bcb1bd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
