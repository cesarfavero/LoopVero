# `boxAssignedWindowIndexes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-capabilities.ts` · [Module README](../../../../../modules/core/box/box-capabilities-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:546677-546679](../../../../../../reference/runtime/host-main.cjs#L546677-L546679) | `FunctionDeclaration` | no | `box` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546677-546679](../../../../../../reference/runtime/host-main.cjs#L546677-L546679) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:546677

Calls written directly in this body: `box.getAssignedWindowIndexes`.

SHA-256 of the source span: `f4fb7b489a267b2b00e09c66c93fa9e31d8e14e34e23e800bbabddf5abdbd6ab`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
