# `hasRendition`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/media-rendition.ts` · [Module README](../../../../../../modules/host/extensions/attachments/media-rendition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497931-497934](../../../../../../../reference/runtime/host-main.cjs#L497931-L497934) | `FunctionDeclaration` | yes | `renditionPath, step` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497931-497934](../../../../../../../reference/runtime/host-main.cjs#L497931-L497934) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:497931

Calls written directly in this body: `stat26.isFile`, `step.attempt`.

SHA-256 of the source span: `ed5bf55e11b724bbb1a65399bc00db3d47bb094bae75326adbcdeaf83a9c1060`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
