# `SandSourceMap.load`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/source-map/source-map-service.ts` · [Module README](../../../../../../modules/host/extensions/source-map/source-map-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454420-454423](../../../../../../../reference/runtime/host-main.cjs#L454420-L454423) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454420-454423](../../../../../../../reference/runtime/host-main.cjs#L454420-L454423) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:454420

Calls written directly in this body: `this.file.read`.

SHA-256 of the source span: `6fceaff7039393a20bc4cc77fc3536c056e4dda61d090c7adfe16a39226f00c3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
