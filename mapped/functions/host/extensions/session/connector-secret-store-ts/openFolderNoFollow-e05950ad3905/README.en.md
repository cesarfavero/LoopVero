# `openFolderNoFollow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/connector-secret-store.ts` · [Module README](../../../../../../modules/host/extensions/session/connector-secret-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719271-719280](../../../../../../../reference/runtime/host-main.cjs#L719271-L719280) | `FunctionDeclaration` | no | `parent, shown` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719271-719280](../../../../../../../reference/runtime/host-main.cjs#L719271-L719280) | 1 | 0 | 0 | 2 | 1 | 1 |

### host:719271

Calls written directly in this body: `isMissingPathError`, `refusedParentOr3`.

Explicit throw targets: `refused4`.

SHA-256 of the source span: `25d381112d4727e7bc7bc3ff40cb67ddb958c86826d6392399ba5f418b369d80`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
