# `defineAgentTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tool-policy/agent-tools.ts` · [Module README](../../../../../../modules/core/runner/tool-policy/agent-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756590-756631](../../../../../../../reference/runtime/host-main.cjs#L756590-L756631) | `FunctionDeclaration` | no | `spec` |
| [evaluation:542510-542551](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542510-L542551) | `FunctionDeclaration` | no | `spec` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756590-756631](../../../../../../../reference/runtime/host-main.cjs#L756590-L756631) | 6 | 1 | 0 | 1 | 3 | 0 |
| [evaluation:542510-542551](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542510-L542551) | 6 | 1 | 0 | 1 | 3 | 0 |

### host:756590

Calls written directly in this body: `.flatMap`, `agentTools`, `groupReasons`, `hints.keys`, `includedByGroup.has`, `named2.has`, `namedOmissions.get`, `new Error`, `new Map`, `new Set`, `offered.add`, `omitted.set`, `omittedByGroup.get`, `omittedByGroup.has`, `requireOffered`, `toolStrings`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `e63eba75da8c2b12472df91e1ce1dd6b7df8e4561b289486489c81ba42c743e6`.

### evaluation:542510

Calls written directly in this body: `.flatMap`, `agentTools`, `groupReasons`, `hints.keys`, `includedByGroup.has`, `named2.has`, `namedOmissions.get`, `new Error`, `new Map`, `new Set`, `offered.add`, `omitted.set`, `omittedByGroup.get`, `omittedByGroup.has`, `requireOffered`, `toolStrings`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `e63eba75da8c2b12472df91e1ce1dd6b7df8e4561b289486489c81ba42c743e6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
