# `tabSweepCommand`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/computer-use.ts` · [Module README](../../../../../modules/core/runner/computer-use-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:525241-525245](../../../../../../reference/runtime/sand-eval-runner.cjs#L525241-L525245) | `FunctionDeclaration` | no | `display` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525241-525245](../../../../../../reference/runtime/sand-eval-runner.cjs#L525241-L525245) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:525241

Calls written directly in this body: `.toString`, `JSON.stringify`, `import_node_buffer5.Buffer.from`.

SHA-256 of the source span: `6d722207b5019acce754e024abf11ccd6bc3c0a44f7a1fc0d4fb4f2b703bd18f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
