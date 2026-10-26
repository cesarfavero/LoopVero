# `start/report`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/content-search/extension.ts` · [Module README](../../../../../../modules/host/extensions/content-search/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542563-542563](../../../../../../../reference/runtime/host-main.cjs#L542563-L542563) | `ArrowFunctionExpression` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542563-542563](../../../../../../../reference/runtime/host-main.cjs#L542563-L542563) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:542563 uses an implicit arrow-function return.

### host:542563

Calls written directly in this body: `context2.deps.telemetry.logs.reportSearchIndexHealth`.

SHA-256 of the source span: `e99c40dc0da82446caf4432e99341f4020896425de8a616603b61aedc41ad44b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
