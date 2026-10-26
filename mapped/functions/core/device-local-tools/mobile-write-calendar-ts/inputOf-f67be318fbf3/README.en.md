# `inputOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/mobile-write-calendar.ts` · [Module README](../../../../../modules/core/device-local-tools/mobile-write-calendar-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759355-759377](../../../../../../reference/runtime/host-main.cjs#L759355-L759377) | `ArrowFunctionExpression` | no | `{     id,     currentTitle,     currentStart,     delete: remove,     title,     start,     end,     location: location2,     notes,     calendar   }` |
| [evaluation:549515-549537](../../../../../../reference/runtime/sand-eval-runner.cjs#L549515-L549537) | `ArrowFunctionExpression` | no | `{     id,     currentTitle,     currentStart,     delete: remove,     title,     start,     end,     location,     notes,     calendar   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759355-759377](../../../../../../reference/runtime/host-main.cjs#L759355-L759377) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:759355 uses an implicit arrow-function return.
| [evaluation:549515-549537](../../../../../../reference/runtime/sand-eval-runner.cjs#L549515-L549537) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:549515 uses an implicit arrow-function return.

### host:759355

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `a573a3da99a0b2806e87d1fa62981d183e002725545231947af2939b2fe1f1d6`.

### evaluation:549515

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `8d992e57589618e0c51ca3bf787809293aff55e0571b14cbe605321d87b28ba7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
