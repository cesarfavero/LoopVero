# `parseStatsigBootstrap`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/statsig-bootstrap.ts` · [Module README](../../../../../../modules/shared/node/experiments/statsig-bootstrap-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552364-552371](../../../../../../../reference/runtime/host-main.cjs#L552364-L552371) | `FunctionDeclaration` | no | `config2, appVersion` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552364-552371](../../../../../../../reference/runtime/host-main.cjs#L552364-L552371) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:552364

Calls written directly in this body: `JSON.parse`, `JSON.stringify`, `isUnknownRecord2`.

SHA-256 of the source span: `cf89811be14f4a39f676582cca30577f5424b1618e64ab1f843391c6e9f59b83`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
