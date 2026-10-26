# `listMessagesGrantNames`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/messages/permissions.ts` · [Module README](../../../../../modules/shared/messages/permissions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:487341-487346](../../../../../../reference/runtime/host-main.cjs#L487341-L487346) | `FunctionDeclaration` | no | `grants` |
| [evaluation:577551-577556](../../../../../../reference/runtime/sand-eval-runner.cjs#L577551-L577556) | `FunctionDeclaration` | no | `grants` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487341-487346](../../../../../../reference/runtime/host-main.cjs#L487341-L487346) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:577551-577556](../../../../../../reference/runtime/sand-eval-runner.cjs#L577551-L577556) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:487341

Calls written directly in this body: `grants.map`, `names3.join`, `names3.pop`.

SHA-256 of the source span: `a6ff40f2b643cba0aa4393bf7f20b7fd88a94fff8cc507be14824a4066f4ee54`.

### evaluation:577551

Calls written directly in this body: `grants.map`, `names3.join`, `names3.pop`.

SHA-256 of the source span: `a6ff40f2b643cba0aa4393bf7f20b7fd88a94fff8cc507be14824a4066f4ee54`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
