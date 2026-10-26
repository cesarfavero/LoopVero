# `sandStatsigNetworkUrlAllowed`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/statsig-bootstrap.ts` · [Module README](../../../../../../modules/shared/node/experiments/statsig-bootstrap-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552355-552357](../../../../../../../reference/runtime/host-main.cjs#L552355-L552357) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552355-552357](../../../../../../../reference/runtime/host-main.cjs#L552355-L552357) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:552355

Calls written directly in this body: `url2.includes`.

SHA-256 of the source span: `6a90257ed8cd0ebf3e1ec0ad8a68f9f8bd8b04fa3d90d693610db240209b3e0e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
