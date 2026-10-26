# `start/stopCloudSyncPoll`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/automations/README.en.md).

**Module:** `host/extensions/automations/extension.ts` · [Module README](../../../../../../modules/host/extensions/automations/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:505970-505973](../../../../../../../reference/runtime/host-main.cjs#L505970-L505973) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:505970-505973](../../../../../../../reference/runtime/host-main.cjs#L505970-L505973) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:505970

Calls written directly in this body: `cloudSyncPoll.dispose`.

Assignment or increment targets: `cloudSyncPoll`.

SHA-256 of the source span: `64dd1920ee223eb63ff428ee94867e4b7e5fbf9235b8d5a7676dafafa5f55d2d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
