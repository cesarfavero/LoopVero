# `clampLine`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `shared/sand-text.ts` · [Module README](../../../../modules/shared/sand-text-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:227867-227869](../../../../../reference/runtime/host-main.cjs#L227867-L227869) | `FunctionDeclaration` | no | `raw, maxLength` |
| [evaluation:474403-474405](../../../../../reference/runtime/sand-eval-runner.cjs#L474403-L474405) | `FunctionDeclaration` | no | `raw, maxLength` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:227867-227869](../../../../../reference/runtime/host-main.cjs#L227867-L227869) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:474403-474405](../../../../../reference/runtime/sand-eval-runner.cjs#L474403-L474405) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:227867

Calls written directly in this body: `.slice`, `.trim`, `raw.replace`.

SHA-256 of the source span: `0bd3aae6f2f938e403ddc6717c9525e458bda2cbaf10a49278d87f6fc382c72a`.

### evaluation:474403

Calls written directly in this body: `.slice`, `.trim`, `raw.replace`.

SHA-256 of the source span: `0bd3aae6f2f938e403ddc6717c9525e458bda2cbaf10a49278d87f6fc382c72a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
