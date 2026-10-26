# `normalizeCloudAgentSecretNames`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-secret-forward.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-secret-forward-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:510035-510039](../../../../../../reference/runtime/host-main.cjs#L510035-L510039) | `FunctionDeclaration` | no | `names3` |
| [evaluation:567127-567131](../../../../../../reference/runtime/sand-eval-runner.cjs#L567127-L567131) | `FunctionDeclaration` | no | `names3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:510035-510039](../../../../../../reference/runtime/host-main.cjs#L510035-L510039) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:567127-567131](../../../../../../reference/runtime/sand-eval-runner.cjs#L567127-L567131) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:510035

Calls written directly in this body: `.filter`, `names3.map`, `new Set`, `unique.sort`.

SHA-256 of the source span: `a8f8677d37cabfd51b8f1f37d87e1d6ea1a49de888e7d8361f99704736b4f731`.

### evaluation:567127

Calls written directly in this body: `.filter`, `names3.map`, `new Set`, `unique.sort`.

SHA-256 of the source span: `a8f8677d37cabfd51b8f1f37d87e1d6ea1a49de888e7d8361f99704736b4f731`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
