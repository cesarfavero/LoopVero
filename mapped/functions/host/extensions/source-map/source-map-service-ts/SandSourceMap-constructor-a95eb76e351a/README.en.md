# `SandSourceMap.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/source-map/source-map-service.ts` · [Module README](../../../../../../modules/host/extensions/source-map/source-map-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:454386-454392](../../../../../../../reference/runtime/host-main.cjs#L454386-L454392) | `method` | no | `owner, path33 = getSourceMapPath()` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:454386-454392](../../../../../../../reference/runtime/host-main.cjs#L454386-L454392) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:454386

Calls written directly in this body: `openDurableFileSync`, `sandDataNoFollowRoot`.

Assignment or increment targets: `this.file`.

SHA-256 of the source span: `ec7b4e52251cca51d4a89fc10bc9c2692590c9036655a09777b64a1f66a5058e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
