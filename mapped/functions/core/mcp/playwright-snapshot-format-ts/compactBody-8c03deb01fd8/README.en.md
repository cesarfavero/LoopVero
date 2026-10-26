# `compactBody`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-snapshot-format.ts` · [Module README](../../../../../modules/core/mcp/playwright-snapshot-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742848-742860](../../../../../../reference/runtime/host-main.cjs#L742848-L742860) | `FunctionDeclaration` | no | `node2, origin` |
| [evaluation:515510-515522](../../../../../../reference/runtime/sand-eval-runner.cjs#L515510-L515522) | `FunctionDeclaration` | no | `node2, origin` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742848-742860](../../../../../../reference/runtime/host-main.cjs#L742848-L742860) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:515510-515522](../../../../../../reference/runtime/sand-eval-runner.cjs#L515510-L515522) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:742848

Calls written directly in this body: `.replace`, `CLICKABLE_ROLES.has`, `body.slice`, `sameOriginPath`.

Assignment or increment targets: `body`.

SHA-256 of the source span: `2cfcf97225404f135f7b30540a8827ec907e89affa5bb4a1db3603e3f239c685`.

### evaluation:515510

Calls written directly in this body: `.replace`, `CLICKABLE_ROLES.has`, `body.slice`, `sameOriginPath`.

Assignment or increment targets: `body`.

SHA-256 of the source span: `2cfcf97225404f135f7b30540a8827ec907e89affa5bb4a1db3603e3f239c685`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
