# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/content-search/extension.ts` · [Module README](../../../../../../modules/host/extensions/content-search/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:542555-542584](../../../../../../../reference/runtime/host-main.cjs#L542555-L542584) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:542555-542584](../../../../../../../reference/runtime/host-main.cjs#L542555-L542584) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:542555

Calls written directly in this body: `context2.onStop`, `createDeadlinePolicy`, `getSandAgentsRootDir`, `getSandRootDir`, `index.start`, `new SandSearchIndexService`, `subscribeTranscriptMutations`.

SHA-256 of the source span: `89840442c2670ea9d94b77e522748352ba8e835124eb5ebec372043ab675d422`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
