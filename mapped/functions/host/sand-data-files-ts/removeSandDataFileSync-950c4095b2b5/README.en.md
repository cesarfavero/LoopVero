# `removeSandDataFileSync`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453890-453892](../../../../../reference/runtime/host-main.cjs#L453890-L453892) | `FunctionDeclaration` | no | `path33` |
| [state-worker:543-545](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L543-L545) | `FunctionDeclaration` | no | `path` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453890-453892](../../../../../reference/runtime/host-main.cjs#L453890-L453892) | 0 | 0 | 0 | 0 | 0 | 0 |
| [state-worker:543-545](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L543-L545) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:453890

Calls written directly in this body: `removeNoFollowSync`, `sandDataNoFollowRoot`.

SHA-256 of the source span: `9a5315069a93bd9150fcbec9e58df0e455a054245f028e5c17897774a4406e43`.

### state-worker:543

Calls written directly in this body: `removeNoFollowSync`, `sandDataNoFollowRoot`.

SHA-256 of the source span: `d741be0c2766ed1981a0ec42d7584aac9acd7219bbc7f8f8aa5ae0cc694ab72a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
