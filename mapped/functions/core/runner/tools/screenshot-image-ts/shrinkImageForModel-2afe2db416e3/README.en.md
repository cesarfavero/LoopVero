# `shrinkImageForModel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/screenshot-image.ts` · [Module README](../../../../../../modules/core/runner/tools/screenshot-image-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776855-776861](../../../../../../../reference/runtime/host-main.cjs#L776855-L776861) | `FunctionDeclaration` | yes | `ctx, bytes, options2` |
| [evaluation:576500-576506](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576500-L576506) | `FunctionDeclaration` | yes | `ctx, bytes, options2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776855-776861](../../../../../../../reference/runtime/host-main.cjs#L776855-L776861) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:576500-576506](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576500-L576506) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:776855

Calls written directly in this body: `.toString`, `boundInlineImageForModel`, `import_node_buffer7.Buffer.from`.

SHA-256 of the source span: `53dc9f0546210d856c5057d817416d003a4d6ed5ffa71791254c8039a4c2a938`.

### evaluation:576500

Calls written directly in this body: `.toString`, `boundInlineImageForModel`, `import_node_buffer11.Buffer.from`.

SHA-256 of the source span: `607440b9bd41630038ee23d1958b7c1adadf47f1e3f23b3f89b7ef9a9b11f630`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
