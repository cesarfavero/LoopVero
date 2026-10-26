# `configuredLimitBytes`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/conversation-size-limits.ts` · [Module README](../../../../../../modules/host/extensions/session/conversation-size-limits-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719307-719311](../../../../../../../reference/runtime/host-main.cjs#L719307-L719311) | `FunctionDeclaration` | no | `field` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719307-719311](../../../../../../../reference/runtime/host-main.cjs#L719307-L719311) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:719307

Calls written directly in this body: `Math.floor`, `Number.isFinite`, `pinnedSizeLimitsReader`.

SHA-256 of the source span: `e80e83015794a5cc09294e69b394b0c6b00714fab4cd629c39ee3acb8671dbaa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
