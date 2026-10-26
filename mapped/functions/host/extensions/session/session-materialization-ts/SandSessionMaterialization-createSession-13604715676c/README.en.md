# `SandSessionMaterialization.createSession`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-materialization.ts` · [Module README](../../../../../../modules/host/extensions/session/session-materialization-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:721449-721454](../../../../../../../reference/runtime/host-main.cjs#L721449-L721454) | `method` | yes | `profile, origin = "user", options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721449-721454](../../../../../../../reference/runtime/host-main.cjs#L721449-L721454) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:721449

Calls written directly in this body: `this.mintAgent`.

SHA-256 of the source span: `4462ad2b61d2fa54f9cf4f6e32dd8ca21dbe1f5f68ac8d5db075199fe867cd0f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
