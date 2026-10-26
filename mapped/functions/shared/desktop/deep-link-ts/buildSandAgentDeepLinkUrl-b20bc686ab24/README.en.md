# `buildSandAgentDeepLinkUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/desktop/deep-link.ts` · [Module README](../../../../../modules/shared/desktop/deep-link-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:489453-489460](../../../../../../reference/runtime/host-main.cjs#L489453-L489460) | `FunctionDeclaration` | no | `agentId` |
| [evaluation:475589-475596](../../../../../../reference/runtime/sand-eval-runner.cjs#L475589-L475596) | `FunctionDeclaration` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:489453-489460](../../../../../../reference/runtime/host-main.cjs#L489453-L489460) | 1 | 0 | 0 | 2 | 1 | 1 |
| [evaluation:475589-475596](../../../../../../reference/runtime/sand-eval-runner.cjs#L475589-L475596) | 1 | 0 | 0 | 2 | 1 | 1 |

### host:489453

Calls written directly in this body: `sandDeepLinks.buildUrl`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `17cc50a8b8576ff6689d58d8790e5f88216aaada1da7ac7383925c574cd139c6`.

### evaluation:475589

Calls written directly in this body: `sandDeepLinks.buildUrl`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `0bdb3175429a6eb0a8edaf7dba61cc39e37a53d06d33e3319920846cd61602a1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
