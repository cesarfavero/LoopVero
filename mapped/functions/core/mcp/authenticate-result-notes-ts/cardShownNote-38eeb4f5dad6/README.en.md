# `cardShownNote`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/authenticate-result-notes.ts` · [Module README](../../../../../modules/core/mcp/authenticate-result-notes-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779273-779285](../../../../../../reference/runtime/host-main.cjs#L779273-L779285) | `FunctionDeclaration` | no | `outcome, gatedResume` |
| [evaluation:579447-579459](../../../../../../reference/runtime/sand-eval-runner.cjs#L579447-L579459) | `FunctionDeclaration` | no | `outcome, gatedResume` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779273-779285](../../../../../../reference/runtime/host-main.cjs#L779273-L779285) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:579447-579459](../../../../../../reference/runtime/sand-eval-runner.cjs#L579447-L579459) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:779273

Calls written directly in this body: `describeCardFollowUp`, `describeConnectCardFollowUp`.

SHA-256 of the source span: `ea5013a853059cae42c82b77e7ca46a862f6e21a3d9f5e4ee96b6aa1d7edbce4`.

### evaluation:579447

Calls written directly in this body: `describeCardFollowUp`, `describeConnectCardFollowUp`.

SHA-256 of the source span: `ea5013a853059cae42c82b77e7ca46a862f6e21a3d9f5e4ee96b6aa1d7edbce4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
