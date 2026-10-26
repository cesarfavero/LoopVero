# `listConnectedPrivateWorkers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:512770-512789](../../../../../../reference/runtime/host-main.cjs#L512770-L512789) | `FunctionDeclaration` | yes | `client` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512770-512789](../../../../../../reference/runtime/host-main.cjs#L512770-L512789) | 1 | 1 | 1 | 1 | 0 | 0 |

### host:512770

Calls written directly in this body: `client.listPrivateWorkers`, `new ListPrivateWorkersRequest`, `workers.map`, `workers.push`.

Assignment or increment targets: `page`, `pageToken`.

SHA-256 of the source span: `0cab7d9c8fe0771e52e1da7c7b1d945b96ce471691dac03457dc7d32b6072e64`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
