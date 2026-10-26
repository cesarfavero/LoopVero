# `pluginLinkIdsIn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/mcp-auth-wait.ts` · [Module README](../../../../../../modules/core/runner/tools/mcp-auth-wait-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765331-765339](../../../../../../../reference/runtime/host-main.cjs#L765331-L765339) | `FunctionDeclaration` | no | `content` |
| [evaluation:558698-558706](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558698-L558706) | `FunctionDeclaration` | no | `content` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765331-765339](../../../../../../../reference/runtime/host-main.cjs#L765331-L765339) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:558698-558706](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558698-L558706) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:765331

Calls written directly in this body: `content.matchAll`, `new Set`, `pluginIds.add`, `sandDeepLinks.parse`.

SHA-256 of the source span: `710e9e19d3a98fac7df9311689f5d701613d6ac5f08ba4e9d186f150f11f1f3e`.

### evaluation:558698

Calls written directly in this body: `content.matchAll`, `new Set`, `pluginIds.add`, `sandDeepLinks.parse`.

SHA-256 of the source span: `0bc60be371b12cc061a2935aa05cd78e31e21fcc32d60d8a5946e9f13bb032b6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
