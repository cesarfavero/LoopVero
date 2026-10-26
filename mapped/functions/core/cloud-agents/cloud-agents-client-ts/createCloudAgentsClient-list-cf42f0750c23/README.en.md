# `createCloudAgentsClient/list`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:513033-513043](../../../../../../reference/runtime/host-main.cjs#L513033-L513043) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513033-513043](../../../../../../reference/runtime/host-main.cjs#L513033-L513043) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:513033

Calls written directly in this body: `.listBackgroundComposers`, `.map`, `client`, `new ListBackgroundComposersRequest`, `projectFilterForKind`, `response.composers.filter`.

SHA-256 of the source span: `09cae383720b4eaa8aa55648496790028609dcbf0a05ff78564dfbf295a4c634`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
