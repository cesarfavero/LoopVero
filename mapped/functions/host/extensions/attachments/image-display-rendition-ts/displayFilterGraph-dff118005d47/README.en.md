# `displayFilterGraph`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/image-display-rendition.ts` · [Module README](../../../../../../modules/host/extensions/attachments/image-display-rendition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498210-498232](../../../../../../../reference/runtime/host-main.cjs#L498210-L498232) | `FunctionDeclaration` | no | `layout, transform3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498210-498232](../../../../../../../reference/runtime/host-main.cjs#L498210-L498232) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:498210

Calls written directly in this body: `.join`, `filters.join`, `filters.push`, `fitLongEdge`, `tiles.map`, `transformFilters`.

Assignment or increment targets: `inputs`, `presented`.

SHA-256 of the source span: `965715fa03ffed53d6f28abc3f2ba89c7b6d9d2d6c657230e63c07138151d29b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
