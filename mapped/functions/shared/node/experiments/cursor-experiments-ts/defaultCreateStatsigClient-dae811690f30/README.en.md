# `defaultCreateStatsigClient`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552584-552584](../../../../../../../reference/runtime/host-main.cjs#L552584-L552584) | `ArrowFunctionExpression` | no | `key, user, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552584-552584](../../../../../../../reference/runtime/host-main.cjs#L552584-L552584) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:552584 uses an implicit arrow-function return.

### host:552584

Calls written directly in this body: `new import_js_client.StatsigClient`, `statsigClientPort`.

SHA-256 of the source span: `bcf6cb1743e68f08206c706616d8ea002342e63ce1196b5432b0e0e54a5d27a3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
