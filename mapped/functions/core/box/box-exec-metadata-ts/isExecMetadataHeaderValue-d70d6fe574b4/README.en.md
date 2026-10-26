# `isExecMetadataHeaderValue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-exec-metadata.ts` · [Module README](../../../../../modules/core/box/box-exec-metadata-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:678942-678944](../../../../../../reference/runtime/host-main.cjs#L678942-L678944) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:678942-678944](../../../../../../reference/runtime/host-main.cjs#L678942-L678944) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:678942

Calls written directly in this body: `EXEC_METADATA_HEADER_VALUE_PATTERN.test`.

SHA-256 of the source span: `d2ca93dff4d188361165b9a81340c1ce64919d649e2c60fa7bae1faa5e9ae622`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
