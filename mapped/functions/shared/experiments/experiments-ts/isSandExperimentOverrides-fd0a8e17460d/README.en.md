# `isSandExperimentOverrides`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/experiments/experiments.ts` · [Module README](../../../../../modules/shared/experiments/experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:451406-451410](../../../../../../reference/runtime/host-main.cjs#L451406-L451410) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451406-451410](../../../../../../reference/runtime/host-main.cjs#L451406-L451410) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:451406

Calls written directly in this body: `.every`, `Object.values`, `isUnknownRecord2`.

SHA-256 of the source span: `0d289471a92661ff5fcee041e630f2077353abfc185eb31181872410d00f0a20`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
