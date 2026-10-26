# `lexicalBoxFilePath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/media/box-file-path.ts` · [Module README](../../../../../modules/shared/media/box-file-path-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:497245-497263](../../../../../../reference/runtime/host-main.cjs#L497245-L497263) | `FunctionDeclaration` | no | `source` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497245-497263](../../../../../../reference/runtime/host-main.cjs#L497245-L497263) | 9 | 0 | 0 | 9 | 0 | 0 |

### host:497245

Calls written directly in this body: `.join`, `/^file:/i.test`, `BOX_FILE_ROOTS.some`, `fileUrlPath`, `getFilePreviewKind`, `hasPrivateStoreMarker`, `path33.includes`, `path33.split`, `path33.startsWith`, `segments.slice`, `segments.some`, `source.trim`, `trimmed.includes`.

SHA-256 of the source span: `0f327be6accfc02c7fd458d6335b9474cd5226ba26294bb88b382e3dcc97f5a2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
