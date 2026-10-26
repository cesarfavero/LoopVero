# `rebuildWorkerError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/isolation/README.en.md).

**Module:** `host/agent-isolation/agent-worker-pool.ts` · [Module README](../../../../../modules/host/agent-isolation/agent-worker-pool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:715128-715135](../../../../../../reference/runtime/host-main.cjs#L715128-L715135) | `FunctionDeclaration` | no | `response` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:715128-715135](../../../../../../reference/runtime/host-main.cjs#L715128-L715135) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:715128

Calls written directly in this body: `new Error`.

Assignment or increment targets: `error64.code`, `error64.name`.

SHA-256 of the source span: `e88966f38f84820ff33d38a059a6b150fc04e4bfbbe613bfa911fec048bc01c9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
