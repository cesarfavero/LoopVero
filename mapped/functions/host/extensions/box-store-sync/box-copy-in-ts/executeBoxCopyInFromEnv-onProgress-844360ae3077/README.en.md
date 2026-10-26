# `executeBoxCopyInFromEnv/onProgress`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-copy-in.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:483483-483497](../../../../../../../reference/runtime/host-main.cjs#L483483-L483497) | `ArrowFunctionExpression` | no | `progress` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:483483-483497](../../../../../../../reference/runtime/host-main.cjs#L483483-L483497) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:483483

Calls written directly in this body: `writeStatus`.

Assignment or increment targets: `lastProgress`, `progressEvents`.

SHA-256 of the source span: `0b1536d8894277ea936e22d58470996d9cd1a951779a2812b5740e9e0b77b666`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
