# `showCard`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/secure-values/vault-tool.ts` · [Module README](../../../../../../../modules/core/runner/tools/secure-values/vault-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768004-768011](../../../../../../../../reference/runtime/host-main.cjs#L768004-L768011) | `FunctionDeclaration` | yes | `deps, args, form` |
| [evaluation:563520-563527](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563520-L563527) | `FunctionDeclaration` | yes | `deps, args, form` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768004-768011](../../../../../../../../reference/runtime/host-main.cjs#L768004-L768011) | 1 | 0 | 1 | 1 | 1 | 0 |
| [evaluation:563520-563527](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563520-L563527) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:768004

Calls written directly in this body: `deps.formCard.show`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `597b4ab88ac161e51fd9265c1b06ff1246c781a2da566e53409bd31e217a87df`.

### evaluation:563520

Calls written directly in this body: `deps.formCard.show`, `new SandToolInputError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `597b4ab88ac161e51fd9265c1b06ff1246c781a2da566e53409bd31e217a87df`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
