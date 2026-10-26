# `AgentWorkerPool.walkExportClosure`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/agent-worker-pool.ts` · [Module README](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715411-715434](../../../../../../reference/runtime/host-main.cjs#L715411-L715434) | `method` | yes | `{     agentId,     blobDbPath,     retainedRootIdHex,     legacyBlobDbPath,     maxClosureBytes,     maxClosureBlobs,     onProgress   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715411-715434](../../../../../../reference/runtime/host-main.cjs#L715411-L715434) | 0 | 0 | 2 | 1 | 0 | 0 |

### host:715411

Calls written directly in this body: `connection.walkExportClosure`, `this.ensure`, `this.release`, `this.retain`.

SHA-256 of the source span: `a60f07c0b041f67878e6b60fa7c8dc3487720e9b87755bd7612347fc6f4abaee`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
