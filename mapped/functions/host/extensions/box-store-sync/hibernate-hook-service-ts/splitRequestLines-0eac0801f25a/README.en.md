# `splitRequestLines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/hibernate-hook-service.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/hibernate-hook-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:481930-481934](../../../../../../../reference/runtime/host-main.cjs#L481930-L481934) | `FunctionDeclaration` | no | `pending, chunk` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:481930-481934](../../../../../../../reference/runtime/host-main.cjs#L481930-L481934) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:481930

Calls written directly in this body: `.split`, `parts.filter`, `parts.pop`.

SHA-256 of the source span: `feb8fd41ebcfb8fe722ee93c918ebbb3fdcec4c970aeb033dab9d70b1c601666`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
