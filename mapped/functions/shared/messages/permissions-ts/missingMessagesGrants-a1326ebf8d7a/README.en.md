# `missingMessagesGrants`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/messages/permissions.ts` · [Module README](../../../../../modules/shared/messages/permissions-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:487331-487333](../../../../../../reference/runtime/host-main.cjs#L487331-L487333) | `FunctionDeclaration` | no | `permissions, grants` |
| [evaluation:577543-577545](../../../../../../reference/runtime/sand-eval-runner.cjs#L577543-L577545) | `FunctionDeclaration` | no | `permissions, grants` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487331-487333](../../../../../../reference/runtime/host-main.cjs#L487331-L487333) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:577543-577545](../../../../../../reference/runtime/sand-eval-runner.cjs#L577543-L577545) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:487331

Calls written directly in this body: `grants.filter`.

SHA-256 of the source span: `d0bd3f1e79a96b50eb17358e2e3e90546d79f32c48c73203f232050f8d34ab92`.

### evaluation:577543

Calls written directly in this body: `grants.filter`.

SHA-256 of the source span: `d0bd3f1e79a96b50eb17358e2e3e90546d79f32c48c73203f232050f8d34ab92`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
