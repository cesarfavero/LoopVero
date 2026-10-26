# `executeBoxCopyInFromEnv/getAccessToken`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-copy-in.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:483348-483356](../../../../../../../reference/runtime/host-main.cjs#L483348-L483356) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:483348-483356](../../../../../../../reference/runtime/host-main.cjs#L483348-L483356) | 1 | 0 | 1 | 3 | 0 | 1 |

### host:483348

Calls written directly in this body: `accessToken`, `reportTelemetryTokenUnavailable`.

SHA-256 of the source span: `c88a76ab211f3b760cf449bc0dfeec99e5917bdd6bf17290ebc43a6e4ee898e2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
