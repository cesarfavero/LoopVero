# `createCloudAgentsClient/listRepositories`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:513429-513538](../../../../../../reference/runtime/host-main.cjs#L513429-L513538) | `FunctionDeclaration` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513429-513538](../../../../../../reference/runtime/host-main.cjs#L513429-L513538) | 10 | 3 | 4 | 1 | 0 | 0 |

### host:513429

Calls written directly in this body: `Math.floor`, `decodeRepositoriesCursor`, `deps.getDashboardClient`, `deps.getOriginClient`, `encodeRepositoriesCursor`, `fetchUnitPage`, `listInstallationUnits`, `page.repos.slice`, `rehydrateInlineUnits`, `repos.push`, `state.units.slice`, `unlistableInstallations.push`, `walkOriginRepositories`.

Assignment or increment targets: `fetches`, `index`, `nextCursor`, `offset2`, `page`.

SHA-256 of the source span: `23ef5f622ed671390f2304d7524109e49aac752d912c0cbd51cf81b81eeb987a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
