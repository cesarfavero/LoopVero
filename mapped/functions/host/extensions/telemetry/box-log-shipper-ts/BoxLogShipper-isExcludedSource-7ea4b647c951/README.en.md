# `BoxLogShipper.isExcludedSource`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/telemetry/box-log-shipper.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/box-log-shipper-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:730974-730976](../../../../../../../reference/runtime/host-main.cjs#L730974-L730976) | `method` | no | `leaf` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:730974-730976](../../../../../../../reference/runtime/host-main.cjs#L730974-L730976) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:730974

Calls written directly in this body: `this.excludeSourcePrefixes.some`.

SHA-256 of the source span: `a5c2eb0249aeb570cd8f07d9f1bb5aeac7c00c806a457540dcd85293b242226e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
