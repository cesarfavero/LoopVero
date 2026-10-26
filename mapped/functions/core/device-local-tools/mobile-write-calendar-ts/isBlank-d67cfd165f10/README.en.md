# `isBlank`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/mobile-write-calendar.ts` · [Module README](../../../../../modules/core/device-local-tools/mobile-write-calendar-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759335-759337](../../../../../../reference/runtime/host-main.cjs#L759335-L759337) | `FunctionDeclaration` | no | `value` |
| [evaluation:549495-549497](../../../../../../reference/runtime/sand-eval-runner.cjs#L549495-L549497) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759335-759337](../../../../../../reference/runtime/host-main.cjs#L759335-L759337) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:549495-549497](../../../../../../reference/runtime/sand-eval-runner.cjs#L549495-L549497) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:759335

Calls written directly in this body: `value.trim`.

SHA-256 of the source span: `01f708ad5cd274817ec59725d8b35683632c600c8bd47615103e3465734da4f5`.

### evaluation:549495

Calls written directly in this body: `value.trim`.

SHA-256 of the source span: `01f708ad5cd274817ec59725d8b35683632c600c8bd47615103e3465734da4f5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
