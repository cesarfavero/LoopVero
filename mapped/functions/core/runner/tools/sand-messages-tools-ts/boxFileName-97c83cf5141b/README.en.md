# `boxFileName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-messages-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777957-777960](../../../../../../../reference/runtime/host-main.cjs#L777957-L777960) | `FunctionDeclaration` | no | `filename` |
| [evaluation:577692-577695](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577692-L577695) | `FunctionDeclaration` | no | `filename` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777957-777960](../../../../../../../reference/runtime/host-main.cjs#L777957-L777960) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:577692-577695](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577692-L577695) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:777957

Calls written directly in this body: `.replace`, `Date.now`, `import_node_path170.posix.basename`.

SHA-256 of the source span: `6e300a9c0952f7e84e51178bd805b529e08faa7b9a1054b33c0b81ed73b7dd34`.

### evaluation:577692

Calls written directly in this body: `.replace`, `Date.now`, `import_node_path41.posix.basename`.

SHA-256 of the source span: `3fbbb35357dd30b0ee12a0d5c27490e9e65b10c260045202a6963fbeb2ba28c9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
