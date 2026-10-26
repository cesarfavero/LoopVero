# `describePluginSignIn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779791-779804](../../../../../../../reference/runtime/host-main.cjs#L779791-L779804) | `FunctionDeclaration` | no | `plugin, installed` |
| [evaluation:580029-580042](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580029-L580042) | `FunctionDeclaration` | no | `plugin, installed` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779791-779804](../../../../../../../reference/runtime/host-main.cjs#L779791-L779804) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:580029-580042](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580029-L580042) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:779791

Calls written directly in this body: `.join`, `.map`, `installed.filter`, `new Set`, `rows.filter`, `signedOut.map`.

SHA-256 of the source span: `781a690171cefaf9bffc8b34f32488df51020458d2cc1cf43002667b9288b422`.

### evaluation:580029

Calls written directly in this body: `.join`, `.map`, `installed.filter`, `new Set`, `rows.filter`, `signedOut.map`.

SHA-256 of the source span: `781a690171cefaf9bffc8b34f32488df51020458d2cc1cf43002667b9288b422`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
