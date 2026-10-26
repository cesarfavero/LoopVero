# `createCloudAgentsClient/listInstallationUnits/collectInstallations`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:513337-513358](../../../../../../reference/runtime/host-main.cjs#L513337-L513358) | `FunctionDeclaration` | yes | `target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513337-513358](../../../../../../reference/runtime/host-main.cjs#L513337-L513358) | 3 | 1 | 1 | 1 | 0 | 1 |

### host:513337

Calls written directly in this body: `accessDenied.push`, `connected2.add`, `dashboard.getGithubInstallations`, `inlineUnits.push`, `installationsRequest`, `pagedUnits.push`, `unreachable3.add`.

SHA-256 of the source span: `8276ad31f19702f3c4e8bcdc67e32f732cc36a483962d61e6a8a48a9cd1bf5dd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
