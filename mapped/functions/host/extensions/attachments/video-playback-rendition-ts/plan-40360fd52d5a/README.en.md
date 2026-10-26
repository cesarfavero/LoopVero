# `plan`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/attachments/video-playback-rendition.ts` · [Module README](../../../../../../modules/host/extensions/attachments/video-playback-rendition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:498489-498540](../../../../../../../reference/runtime/host-main.cjs#L498489-L498540) | `FunctionExpression` | yes | `{ ioPath }, step` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:498489-498540](../../../../../../../reference/runtime/host-main.cjs#L498489-L498540) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:498489

Calls written directly in this body: `.toLowerCase`, `probe.trim`, `step.attempt`.

SHA-256 of the source span: `70161245eb6e0d4bd0c86abf4a672f6509c4ef144a20aa125749503241b8c24c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
