# `isCollapsibleWrapper`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-snapshot-format.ts` · [Module README](../../../../../modules/core/mcp/playwright-snapshot-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742803-742810](../../../../../../reference/runtime/host-main.cjs#L742803-L742810) | `FunctionDeclaration` | no | `node2` |
| [evaluation:515465-515472](../../../../../../reference/runtime/sand-eval-runner.cjs#L515465-L515472) | `FunctionDeclaration` | no | `node2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742803-742810](../../../../../../reference/runtime/host-main.cjs#L742803-L742810) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:515465-515472](../../../../../../reference/runtime/sand-eval-runner.cjs#L515465-L515472) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:742803

Calls written directly in this body: `WRAPPER_ROLES.has`, `only.role.startsWith`, `shownChildren`.

SHA-256 of the source span: `86e999c8266f560b95e646de0a0467e8c3dd31ea5f8a021a2383b2066ae04d34`.

### evaluation:515465

Calls written directly in this body: `WRAPPER_ROLES.has`, `only.role.startsWith`, `shownChildren`.

SHA-256 of the source span: `86e999c8266f560b95e646de0a0467e8c3dd31ea5f8a021a2383b2066ae04d34`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
