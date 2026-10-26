# `playwrightSnapshotSkipped`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-telemetry.ts` · [Module README](../../../../../modules/core/mcp/playwright-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700361-700363](../../../../../../reference/runtime/host-main.cjs#L700361-L700363) | `FunctionDeclaration` | no | `text3` |
| [evaluation:514150-514152](../../../../../../reference/runtime/sand-eval-runner.cjs#L514150-L514152) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700361-700363](../../../../../../reference/runtime/host-main.cjs#L700361-L700363) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:514150-514152](../../../../../../reference/runtime/sand-eval-runner.cjs#L514150-L514152) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:700361

Calls written directly in this body: `SNAPSHOT_SKIPPED_HEADING.test`.

SHA-256 of the source span: `5d5471fbfcedb834b44ed007a5aa5bc534e74f6e8cb7fc0e2bb63e052342059f`.

### evaluation:514150

Calls written directly in this body: `SNAPSHOT_SKIPPED_HEADING.test`.

SHA-256 of the source span: `5d5471fbfcedb834b44ed007a5aa5bc534e74f6e8cb7fc0e2bb63e052342059f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
