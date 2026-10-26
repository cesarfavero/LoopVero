# `resolveLaunchCustomMode`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:512886-512913](../../../../../../reference/runtime/host-main.cjs#L512886-L512913) | `FunctionDeclaration` | yes | `dashboard, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512886-512913](../../../../../../reference/runtime/host-main.cjs#L512886-L512913) | 4 | 0 | 1 | 4 | 1 | 0 |

### host:512886

Calls written directly in this body: `buildCloudAgentCustomModeMessageFields`, `canListRepoSkillsForCustomMode`, `cloudAgentCustomModeCandidates`, `defaultBranchListingSettlesUnknownMode`, `describeUnknownCloudAgentCustomMode`, `listRepoSkillsBounded`, `new SandCloudAgentCustomModeError`, `passThroughCustomMode`, `resolveCloudAgentCustomMode`.

Explicit throw targets: `SandCloudAgentCustomModeError`.

SHA-256 of the source span: `c1a2170ebe73d1bb4bcd0c9c157e961124bede7a49b24bb7bbe9500f5186f347`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
