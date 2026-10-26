# `createLogger/log5`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `context/logger.js` · [Module README](../../../../modules/context/logger-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225713-225717](../../../../../reference/runtime/host-main.cjs#L225713-L225717) | `FunctionDeclaration` | no | `ctx, entry` |
| [evaluation:2201-2205](../../../../../reference/runtime/sand-eval-runner.cjs#L2201-L2205) | `FunctionDeclaration` | no | `ctx, entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225713-225717](../../../../../reference/runtime/host-main.cjs#L225713-L225717) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:2201-2205](../../../../../reference/runtime/sand-eval-runner.cjs#L2201-L2205) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:225713

Calls written directly in this body: `getLoggerBackend`, `logger132.log`, `new Date`.

SHA-256 of the source span: `5a286549a792e4c4514d0dc998a5f4f63896e7fcd641d2847531bea3b2f091ed`.

### evaluation:2201

Calls written directly in this body: `getLoggerBackend`, `logger132.log`, `new Date`.

SHA-256 of the source span: `e29107193e4a5602c24832c4c72a414184d885439c7e7dc5371cc247fe05aa34`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
