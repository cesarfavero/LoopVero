# `redactCopyInErrorForTelemetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/box-store-sync/box-copy-in.ts` · [Module README](../../../../../../modules/host/extensions/box-store-sync/box-copy-in-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:483591-483593](../../../../../../../reference/runtime/host-main.cjs#L483591-L483593) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:483591-483593](../../../../../../../reference/runtime/host-main.cjs#L483591-L483593) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:483591

Calls written directly in this body: `.replace`, `.slice`, `.trim`, `raw.replace`.

SHA-256 of the source span: `c9bfaec8dea562e20d41c461a69c0561965c9ad485b956d2f6855ca0ad102566`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
