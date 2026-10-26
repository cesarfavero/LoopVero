# `describeOriginAccessBlocker`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/scm-connect-cards.ts` · [Module README](../../../../../../modules/core/runner/tools/scm-connect-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509284-509299](../../../../../../../reference/runtime/host-main.cjs#L509284-L509299) | `FunctionDeclaration` | no | `blocker, blockedAction, readPortalBaseUrl` |
| [evaluation:557009-557024](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557009-L557024) | `FunctionDeclaration` | no | `blocker, blockedAction, readPortalBaseUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509284-509299](../../../../../../../reference/runtime/host-main.cjs#L509284-L509299) | 6 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:557009-557024](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557009-L557024) | 6 | 0 | 0 | 4 | 0 | 0 |

### host:509284

Calls written directly in this body: `originPortalBaseUrl`.

SHA-256 of the source span: `fc53087c3014139a5c90ced4c7c05e5a1e5fe3f431d36bf919dfc2e7b8de1a0b`.

### evaluation:557009

Calls written directly in this body: `originPortalBaseUrl`.

SHA-256 of the source span: `fc53087c3014139a5c90ced4c7c05e5a1e5fe3f431d36bf919dfc2e7b8de1a0b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
