# `resolveAvatarPathWithinDir`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/agents/agent-avatar.ts` · [Module README](../../../../../modules/host/agents/agent-avatar-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716773-716791](../../../../../../reference/runtime/host-main.cjs#L716773-L716791) | `FunctionDeclaration` | no | `agentDir, candidate` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716773-716791](../../../../../../reference/runtime/host-main.cjs#L716773-L716791) | 6 | 0 | 0 | 6 | 0 | 1 |

### host:716773

Calls written directly in this body: `candidate.trim`, `isPathWithin4`, `reanchorSandPath`, `reportFallbackUnlessAbsent`.

Assignment or increment targets: `realDir`, `realFile`.

SHA-256 of the source span: `c3135df1fe5bf738105017e9d0f6ed1c50a222e7cf4a7f3538bb6437062111ac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
