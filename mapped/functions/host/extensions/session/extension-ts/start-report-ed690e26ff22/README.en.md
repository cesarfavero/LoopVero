# `start/report`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/extension.ts` · [Module README](../../../../../../modules/host/extensions/session/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:728445-728445](../../../../../../../reference/runtime/host-main.cjs#L728445-L728445) | `ArrowFunctionExpression` | no | `report` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728445-728445](../../../../../../../reference/runtime/host-main.cjs#L728445-L728445) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:728445 uses an implicit arrow-function return.

### host:728445

Calls written directly in this body: `context2.deps.telemetry.logs.reportAgentMediaRoot`.

SHA-256 of the source span: `a64dcbeedde914c5659e8ac2de73f70c4a363183c6abfa878a2f7593824e63db`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
