# `buildSandAgentShareLinkUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/desktop/deep-link.ts` · [Module README](../../../../../modules/shared/desktop/deep-link-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:489462-489465](../../../../../../reference/runtime/host-main.cjs#L489462-L489465) | `FunctionDeclaration` | no | `agentId` |
| [evaluation:475598-475601](../../../../../../reference/runtime/sand-eval-runner.cjs#L475598-L475601) | `FunctionDeclaration` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:489462-489465](../../../../../../reference/runtime/host-main.cjs#L489462-L489465) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:475598-475601](../../../../../../reference/runtime/sand-eval-runner.cjs#L475598-L475601) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:489462

Calls written directly in this body: `buildSandAgentDeepLinkUrl`.

SHA-256 of the source span: `420287f7264a9d5e0706afd9cea94250df6e9919bb120e084d02a9138163a104`.

### evaluation:475598

Calls written directly in this body: `buildSandAgentDeepLinkUrl`.

SHA-256 of the source span: `420287f7264a9d5e0706afd9cea94250df6e9919bb120e084d02a9138163a104`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
