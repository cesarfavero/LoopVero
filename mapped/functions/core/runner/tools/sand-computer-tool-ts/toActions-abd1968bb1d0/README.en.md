# `toActions`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777114-777119](../../../../../../../reference/runtime/host-main.cjs#L777114-L777119) | `FunctionDeclaration` | no | `args` |
| [evaluation:576759-576764](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576759-L576764) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777114-777119](../../../../../../../reference/runtime/host-main.cjs#L777114-L777119) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:576759-576764](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576759-L576764) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:777114

Calls written directly in this body: `heldClickActions`, `toAction`.

SHA-256 of the source span: `cb2a9d6549e49f9b8048ef7c038e60f33653b0744d2b77c2fb6ba90c06f4e567`.

### evaluation:576759

Calls written directly in this body: `heldClickActions`, `toAction`.

SHA-256 of the source span: `cb2a9d6549e49f9b8048ef7c038e60f33653b0744d2b77c2fb6ba90c06f4e567`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
