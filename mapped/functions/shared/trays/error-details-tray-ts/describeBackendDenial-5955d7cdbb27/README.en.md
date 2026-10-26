# `describeBackendDenial`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/trays/error-details-tray.ts` · [Module README](../../../../../modules/shared/trays/error-details-tray-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736678-736687](../../../../../../reference/runtime/host-main.cjs#L736678-L736687) | `FunctionDeclaration` | no | `custom4` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736678-736687](../../../../../../reference/runtime/host-main.cjs#L736678-L736687) | 3 | 1 | 0 | 2 | 0 | 0 |

### host:736678

Calls written directly in this body: `actions2.push`, `actions2.some`, `backendDenialOf`, `custom4.detail.matchAll`, `custom4.detail.replace`, `isCursorWebsiteUrl`, `mapErrorDetailButtons`, `withCursorWebsiteLinksOnly`.

SHA-256 of the source span: `6baacca34b9a2216a44ad631cd0092d78139e966bd91ab952ae7e60c42bb18d3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
