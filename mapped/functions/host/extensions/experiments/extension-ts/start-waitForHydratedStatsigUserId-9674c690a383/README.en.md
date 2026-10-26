# `start/waitForHydratedStatsigUserId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/experiments/extension.ts` · [Module README](../../../../../../modules/host/extensions/experiments/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553593-553593](../../../../../../../reference/runtime/host-main.cjs#L553593-L553593) | `ArrowFunctionExpression` | no | `timeoutMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553593-553593](../../../../../../../reference/runtime/host-main.cjs#L553593-L553593) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:553593 uses an implicit arrow-function return.

### host:553593

Calls written directly in this body: `service.waitForHydratedStatsigUserId`.

SHA-256 of the source span: `edff8e6dcefbaa0f025348d6c28c524c868c49eb2d09cdad076bc1b55e0b8c8b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
