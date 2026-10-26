# `computeNegationReach`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/workspace-ignore.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/workspace-ignore-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:482323-482332](../../../../../../../reference/runtime/host-main.cjs#L482323-L482332) | `FunctionDeclaration` | no | `pattern, anchored` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:482323-482332](../../../../../../../reference/runtime/host-main.cjs#L482323-L482332) | 3 | 1 | 0 | 3 | 0 | 0 |

### host:482323

Calls written directly in this body: `/[*?[]/.test`, `literal4.join`, `literal4.push`, `pattern.split`.

SHA-256 of the source span: `9bdfabd79168d4b8e568e6616f0075fbe43fc567d7ba8ce3cbe3d30f189f6bad`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
