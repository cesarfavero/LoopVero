# `writeSandDataFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453732-453737](../../../../../reference/runtime/host-main.cjs#L453732-L453737) | `FunctionDeclaration` | yes | `path33, data2, options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453732-453737](../../../../../reference/runtime/host-main.cjs#L453732-L453737) | 0 | 0 | 2 | 0 | 0 | 0 |

### host:453732

Calls written directly in this body: `keptMode`, `sandDataNoFollowRoot`, `writeFileAtomic`.

SHA-256 of the source span: `92632a8a242468ea2d937279af9ca4b7784bf5b5cbf12608caece72992519568`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
