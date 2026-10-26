# `start/startProxy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/orbit/extension.ts` · [Module README](../../../../../../modules/host/extensions/orbit/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706434-706439](../../../../../../../reference/runtime/host-main.cjs#L706434-L706439) | `ArrowFunctionExpression` | no | `signal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706434-706439](../../../../../../../reference/runtime/host-main.cjs#L706434-L706439) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:706434 uses an implicit arrow-function return.

### host:706434

Calls written directly in this body: `startOrbitDaemonProxy`.

SHA-256 of the source span: `bf69c0666e54c038c3cc76c7d996f42d88c474e9dbb439e788bf73b7a1bca432`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
