# `SandSkillPublishService.unpublishPlugin`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/skills/README.en.md).

**Module:** `host/extensions/mcp/skill-publish.ts` · [Module README](../../../../../../modules/host/extensions/mcp/skill-publish-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702216-702228](../../../../../../../reference/runtime/host-main.cjs#L702216-L702228) | `method` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702216-702228](../../../../../../../reference/runtime/host-main.cjs#L702216-L702228) | 0 | 1 | 3 | 1 | 0 | 0 |

### host:702216

Calls written directly in this body: `BigInt`, `new UnpublishPluginRequest`, `this.options.client.unpublishPlugin`, `this.ownPluginRecords`, `this.restoreToLibrary`, `this.syncBestEffort`.

Assignment or increment targets: `restoredWorkflowId`.

SHA-256 of the source span: `40b53a41a78c5bccfc08251f978bb1b7722568a1a6ccb64e43737e516f3685a6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
