# `inputOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/ios-control-home.ts` · [Module README](../../../../../modules/core/device-local-tools/ios-control-home-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:758806-758824](../../../../../../reference/runtime/host-main.cjs#L758806-L758824) | `ArrowFunctionExpression` | no | `{ home, room, accessory, service, kind, all, control, value, changes }` |
| [evaluation:548966-548984](../../../../../../reference/runtime/sand-eval-runner.cjs#L548966-L548984) | `ArrowFunctionExpression` | no | `{ home, room, accessory, service, kind, all, control, value, changes }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758806-758824](../../../../../../reference/runtime/host-main.cjs#L758806-L758824) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:758806 uses an implicit arrow-function return.
| [evaluation:548966-548984](../../../../../../reference/runtime/sand-eval-runner.cjs#L548966-L548984) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:548966 uses an implicit arrow-function return.

### host:758806

Calls written directly in this body: `changes.map`.

SHA-256 of the source span: `fd19655bb7f06b644fdf90fe912b140b2d3abb9fe1bb55f59fb656589f18b3e9`.

### evaluation:548966

Calls written directly in this body: `changes.map`.

SHA-256 of the source span: `fd19655bb7f06b644fdf90fe912b140b2d3abb9fe1bb55f59fb656589f18b3e9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
