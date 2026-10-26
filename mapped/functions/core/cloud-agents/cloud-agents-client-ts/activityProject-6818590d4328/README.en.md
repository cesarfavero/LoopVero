# `activityProject`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:512532-512551](../../../../../../reference/runtime/host-main.cjs#L512532-L512551) | `FunctionDeclaration` | no | `detailed, projectNamesById` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512532-512551](../../../../../../reference/runtime/host-main.cjs#L512532-L512551) | 5 | 0 | 0 | 4 | 0 | 0 |

### host:512532

Calls written directly in this body: `boundedSingleLine`, `coordinatorProjectName`, `projectNamesById.get`, `userMessage`.

SHA-256 of the source span: `f12357c4e6670f9fc80e5b93e13b6be7ada86c5efdcd1ab4f78e0bea8c0f2a60`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
