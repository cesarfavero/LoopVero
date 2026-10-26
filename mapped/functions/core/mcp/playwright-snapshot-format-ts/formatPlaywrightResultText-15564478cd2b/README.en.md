# `formatPlaywrightResultText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-snapshot-format.ts` · [Module README](../../../../../modules/core/mcp/playwright-snapshot-format-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742891-742917](../../../../../../reference/runtime/host-main.cjs#L742891-L742917) | `FunctionDeclaration` | no | `text3` |
| [evaluation:515553-515579](../../../../../../reference/runtime/sand-eval-runner.cjs#L515553-L515579) | `FunctionDeclaration` | no | `text3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742891-742917](../../../../../../reference/runtime/host-main.cjs#L742891-L742917) | 3 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:515553-515579](../../../../../../reference/runtime/sand-eval-runner.cjs#L515553-L515579) | 3 | 1 | 0 | 2 | 0 | 0 |

### host:742891

Calls written directly in this body: `ELISION_LINE.test`, `FENCE.test`, `SECTION_HEADING.test`, `TREE_LINE.test`, `flush`, `originOf`, `out.join`, `out.push`, `run.push`, `text3.includes`, `text3.split`.

Assignment or increment targets: `inTreeSection`.

SHA-256 of the source span: `c3ec0dde316cc46060bc6863e37397c939d2a25757466f4b07aacffd823a0e38`.

### evaluation:515553

Calls written directly in this body: `ELISION_LINE.test`, `FENCE.test`, `SECTION_HEADING.test`, `TREE_LINE.test`, `flush`, `originOf`, `out.join`, `out.push`, `run.push`, `text3.includes`, `text3.split`.

Assignment or increment targets: `inTreeSection`.

SHA-256 of the source span: `c3ec0dde316cc46060bc6863e37397c939d2a25757466f4b07aacffd823a0e38`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
