# `gatedSignOutReasonNote`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/sign-out-reason-notes.ts` · [Module README](../../../../../modules/core/mcp/sign-out-reason-notes-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779262-779265](../../../../../../reference/runtime/host-main.cjs#L779262-L779265) | `FunctionDeclaration` | no | `reason, surface, gate` |
| [evaluation:579436-579439](../../../../../../reference/runtime/sand-eval-runner.cjs#L579436-L579439) | `FunctionDeclaration` | no | `reason, surface, gate` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779262-779265](../../../../../../reference/runtime/host-main.cjs#L779262-L779265) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579436-579439](../../../../../../reference/runtime/sand-eval-runner.cjs#L579436-L579439) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:779262

Calls written directly in this body: `gate`, `signOutReasonNote`.

SHA-256 of the source span: `be754afbc73641ff69ea21c5489a485929b884657c2bf0282911d0717e1b8422`.

### evaluation:579436

Calls written directly in this body: `gate`, `signOutReasonNote`.

SHA-256 of the source span: `be754afbc73641ff69ea21c5489a485929b884657c2bf0282911d0717e1b8422`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
