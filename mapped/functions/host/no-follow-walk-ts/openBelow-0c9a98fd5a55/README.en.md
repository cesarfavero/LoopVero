# `openBelow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/no-follow-walk.ts` · [Module README](../../../../modules/host/no-follow-walk-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453561-453574](../../../../../reference/runtime/host-main.cjs#L453561-L453574) | `FunctionDeclaration` | yes | `root, segments, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453561-453574](../../../../../reference/runtime/host-main.cjs#L453561-L453574) | 1 | 1 | 5 | 1 | 1 | 1 |

### host:453561

Calls written directly in this body: `directory.handle.close`, `openDirectoryNoFollow2`, `openOrCreateDirectoryNoFollow`, `openRootDirectory`.

Assignment or increment targets: `directory`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `618098577af8ee3ce52f839ce164dc960acb47e00f33b6cc83fb84dc3a50009a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
