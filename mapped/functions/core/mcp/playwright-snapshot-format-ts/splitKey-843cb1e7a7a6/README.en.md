# `splitKey`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-snapshot-format.ts` · [Module README](../../../../../modules/core/mcp/playwright-snapshot-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742729-742746](../../../../../../reference/runtime/host-main.cjs#L742729-L742746) | `FunctionDeclaration` | no | `body` |
| [evaluation:515391-515408](../../../../../../reference/runtime/sand-eval-runner.cjs#L515391-L515408) | `FunctionDeclaration` | no | `body` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742729-742746](../../../../../../reference/runtime/host-main.cjs#L742729-L742746) | 4 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:515391-515408](../../../../../../reference/runtime/sand-eval-runner.cjs#L515391-L515408) | 4 | 1 | 0 | 3 | 0 | 0 |

### host:742729

Calls written directly in this body: `.startsWith`, `body.slice`, `rest.search`, `rest.slice`, `rest.startsWith`.

Assignment or increment targets: `index`.

SHA-256 of the source span: `fe027bf1a7f8092e53fec90304e28bb375b8a6dd50abed3fa653c7550ed0c687`.

### evaluation:515391

Calls written directly in this body: `.startsWith`, `body.slice`, `rest.search`, `rest.slice`, `rest.startsWith`.

Assignment or increment targets: `index`.

SHA-256 of the source span: `fe027bf1a7f8092e53fec90304e28bb375b8a6dd50abed3fa653c7550ed0c687`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
