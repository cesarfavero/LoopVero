# `ownDataValue`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/heap-metrics.ts` · [Module README](../../../../../modules/shared/observability/heap-metrics-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:487536-487539](../../../../../../reference/runtime/host-main.cjs#L487536-L487539) | `FunctionDeclaration` | no | `value, key` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:487536-487539](../../../../../../reference/runtime/host-main.cjs#L487536-L487539) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:487536

Calls written directly in this body: `Object.getOwnPropertyDescriptor`.

SHA-256 of the source span: `9cd02177e96a793ea664564ac380247f2a20db35e1700902e82f8738c5c9807d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
