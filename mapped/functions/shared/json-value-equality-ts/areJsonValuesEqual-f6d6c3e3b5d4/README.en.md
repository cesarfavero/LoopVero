# `areJsonValuesEqual`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `shared/json-value-equality.ts` · [Module README](../../../../modules/shared/json-value-equality-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552007-552021](../../../../../reference/runtime/host-main.cjs#L552007-L552021) | `FunctionDeclaration` | no | `a, b2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552007-552021](../../../../../reference/runtime/host-main.cjs#L552007-L552021) | 6 | 0 | 0 | 7 | 0 | 0 |

### host:552007

Calls written directly in this body: `.filter`, `Array.isArray`, `Object.is`, `Object.keys`, `a.every`, `hasPlainPrototype`, `isUnknownRecord2`, `keysA.every`.

SHA-256 of the source span: `f8a8127ec43a75d1af140495e13c706be5006fd4b7f50454e713f72a497b645e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
