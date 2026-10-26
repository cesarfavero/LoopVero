# `SharedDesktopSandBox.uploadFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/shared-desktop-sand-box.ts` · [Module README](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:555188-555190](../../../../../../reference/runtime/host-main.cjs#L555188-L555190) | `method` | yes | `ctx, _agentId, boxPath, data2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:555188-555190](../../../../../../reference/runtime/host-main.cjs#L555188-L555190) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:555188

Calls written directly in this body: `this.inner.uploadFile`.

SHA-256 of the source span: `35f136e45c74e993d69edafecdae9544f95a962f5491567d3a5b5a8b8f8f9dde`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
