# `newNeedsAuthRows`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779899-779911](../../../../../../../reference/runtime/host-main.cjs#L779899-L779911) | `FunctionDeclaration` | no | `before, after` |
| [evaluation:580144-580156](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580144-L580156) | `FunctionDeclaration` | no | `before, after` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779899-779911](../../../../../../../reference/runtime/host-main.cjs#L779899-L779911) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:580144-580156](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580144-L580156) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:779899

Calls written directly in this body: `.map`, `before.map`, `beforeIdentifiers.has`, `connectCardServerId`, `new Map`, `new Set`, `rows.entries`, `rows.set`, `stdioSignInOf`.

SHA-256 of the source span: `c4deacb0df6fb29de1117f8702d41647cdfbb2d3f3f0055abc67a71a58504e64`.

### evaluation:580144

Calls written directly in this body: `.map`, `before.map`, `beforeIdentifiers.has`, `connectCardServerId`, `new Map`, `new Set`, `rows.entries`, `rows.set`, `stdioSignInOf`.

SHA-256 of the source span: `c4deacb0df6fb29de1117f8702d41647cdfbb2d3f3f0055abc67a71a58504e64`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
