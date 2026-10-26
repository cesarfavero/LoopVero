# `start/subscribeToUserTimeZone`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-timezone/extension.ts` · [Module README](../../../../../../modules/host/extensions/box-timezone/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:506497-506497](../../../../../../../reference/runtime/host-main.cjs#L506497-L506497) | `ArrowFunctionExpression` | no | `listener` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506497-506497](../../../../../../../reference/runtime/host-main.cjs#L506497-L506497) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:506497 uses an implicit arrow-function return.

### host:506497

Calls written directly in this body: `settings.subscribeToUserTimeZone`.

SHA-256 of the source span: `1b187f6691a1edee2b1c7c17a77563daf6d979fda336ba9a8de7e44197d17ad2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
