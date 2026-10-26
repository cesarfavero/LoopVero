# `toCloudAgentWorker`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:512751-512769](../../../../../../reference/runtime/host-main.cjs#L512751-L512769) | `FunctionDeclaration` | no | `worker` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512751-512769](../../../../../../reference/runtime/host-main.cjs#L512751-L512769) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:512751

Calls written directly in this body: `nonEmpty2`, `repos.push`, `worker.labels.find`, `worker.repos.map`.

SHA-256 of the source span: `6b5115ceebb3a8379dffab797f72d2ab7b5a6efd7ed01a630987f7e3dc276891`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
