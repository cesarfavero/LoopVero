# `boxAgentWindowIndex`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-capabilities.ts` · [Module README](../../../../../modules/core/box/box-capabilities-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:546674-546676](../../../../../../reference/runtime/host-main.cjs#L546674-L546676) | `FunctionDeclaration` | no | `box, agentId` |
| [evaluation:475778-475780](../../../../../../reference/runtime/sand-eval-runner.cjs#L475778-L475780) | `FunctionDeclaration` | no | `box, agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546674-546676](../../../../../../reference/runtime/host-main.cjs#L546674-L546676) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475778-475780](../../../../../../reference/runtime/sand-eval-runner.cjs#L475778-L475780) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:546674

Calls written directly in this body: `box.getAgentWindowIndex`.

SHA-256 of the source span: `aaeebad73608c88aeab5a87cdaedfb9c9261669fa5fbdb2ac7d278be16ee732a`.

### evaluation:475778

Calls written directly in this body: `box.getAgentWindowIndex`.

SHA-256 of the source span: `aaeebad73608c88aeab5a87cdaedfb9c9261669fa5fbdb2ac7d278be16ee732a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
