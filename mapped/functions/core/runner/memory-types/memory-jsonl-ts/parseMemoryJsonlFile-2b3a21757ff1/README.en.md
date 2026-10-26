# `parseMemoryJsonlFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/memory/README.en.md).

**Module:** `core/runner/memory-types/memory-jsonl.ts` · [Module README](../../../../../../modules/core/runner/memory-types/memory-jsonl-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:754619-754621](../../../../../../../reference/runtime/host-main.cjs#L754619-L754621) | `FunctionDeclaration` | no | `raw` |
| [evaluation:537586-537588](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537586-L537588) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:754619-754621](../../../../../../../reference/runtime/host-main.cjs#L754619-L754621) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:537586-537588](../../../../../../../reference/runtime/sand-eval-runner.cjs#L537586-L537588) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:754619

Calls written directly in this body: `.filter`, `.map`, `raw.split`.

SHA-256 of the source span: `ac4432fe234b10c373ea0f76b1dc563e0b9fdf03a3de6ce03ebcf86ac67db7a4`.

### evaluation:537586

Calls written directly in this body: `.filter`, `.map`, `raw.split`.

SHA-256 of the source span: `ac4432fe234b10c373ea0f76b1dc563e0b9fdf03a3de6ce03ebcf86ac67db7a4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
