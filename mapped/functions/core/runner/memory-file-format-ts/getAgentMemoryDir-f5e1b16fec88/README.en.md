# `getAgentMemoryDir`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-file-format.ts` · [Module README](../../../../../modules/core/runner/memory-file-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:702735-702737](../../../../../../reference/runtime/host-main.cjs#L702735-L702737) | `FunctionDeclaration` | no | `agentDir` |
| [evaluation:536470-536472](../../../../../../reference/runtime/sand-eval-runner.cjs#L536470-L536472) | `FunctionDeclaration` | no | `agentDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:702735-702737](../../../../../../reference/runtime/host-main.cjs#L702735-L702737) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:536470-536472](../../../../../../reference/runtime/sand-eval-runner.cjs#L536470-L536472) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:702735

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `220ddc7b3c44c2e5914bafa7db7c380042f1384226acbbc60d07a82426bef979`.

### evaluation:536470

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `392af01ac18b3ce7783c23a46fd769a53a880f2fdadfc9b11c8a1c07df1d4959`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
