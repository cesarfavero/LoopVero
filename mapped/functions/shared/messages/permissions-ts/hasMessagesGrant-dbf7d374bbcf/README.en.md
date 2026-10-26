# `hasMessagesGrant`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/messages/permissions.ts` · [Module README](../../../../../modules/shared/messages/permissions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:487321-487330](../../../../../../reference/runtime/host-main.cjs#L487321-L487330) | `FunctionDeclaration` | no | `permissions, grant` |
| [evaluation:577533-577542](../../../../../../reference/runtime/sand-eval-runner.cjs#L577533-L577542) | `FunctionDeclaration` | no | `permissions, grant` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487321-487330](../../../../../../reference/runtime/host-main.cjs#L487321-L487330) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:577533-577542](../../../../../../reference/runtime/sand-eval-runner.cjs#L577533-L577542) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:487321

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `0c4469d5146cb48c484ce57f8d32cb9b962931a627a1e885929d83448ffbf42e`.

### evaluation:577533

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `0c4469d5146cb48c484ce57f8d32cb9b962931a627a1e885929d83448ffbf42e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
