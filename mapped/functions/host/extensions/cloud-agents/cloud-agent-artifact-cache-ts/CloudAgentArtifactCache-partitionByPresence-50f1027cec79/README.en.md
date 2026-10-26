# `CloudAgentArtifactCache.partitionByPresence`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/cloud-agents/cloud-agent-artifact-cache.ts` · [Module README](../../../../../../modules/host/extensions/cloud-agents/cloud-agent-artifact-cache-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:538270-538284](../../../../../../../reference/runtime/host-main.cjs#L538270-L538284) | `method` | yes | `planned` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:538270-538284](../../../../../../../reference/runtime/host-main.cjs#L538270-L538284) | 1 | 1 | 1 | 1 | 0 | 0 |

### host:538270

Calls written directly in this body: `Promise.all`, `missing.push`, `planned.entries`, `planned.map`, `present.push`.

SHA-256 of the source span: `664bfce5f5c74f2baef955fd7dee022597762c642e2d931493d545d17f27e2c1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
