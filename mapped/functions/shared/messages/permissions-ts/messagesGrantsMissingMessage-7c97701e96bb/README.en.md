# `messagesGrantsMissingMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/messages/permissions.ts` · [Module README](../../../../../modules/shared/messages/permissions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:487347-487350](../../../../../../reference/runtime/host-main.cjs#L487347-L487350) | `FunctionDeclaration` | no | `grants` |
| [evaluation:577557-577560](../../../../../../reference/runtime/sand-eval-runner.cjs#L577557-L577560) | `FunctionDeclaration` | no | `grants` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487347-487350](../../../../../../reference/runtime/host-main.cjs#L487347-L487350) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:577557-577560](../../../../../../reference/runtime/sand-eval-runner.cjs#L577557-L577560) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:487347

Calls written directly in this body: `listMessagesGrantNames`.

SHA-256 of the source span: `216b210965237b1b7e258afeb29ed6b73a21476e27aaeb7affaac9a0bb673554`.

### evaluation:577557

Calls written directly in this body: `listMessagesGrantNames`.

SHA-256 of the source span: `216b210965237b1b7e258afeb29ed6b73a21476e27aaeb7affaac9a0bb673554`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
