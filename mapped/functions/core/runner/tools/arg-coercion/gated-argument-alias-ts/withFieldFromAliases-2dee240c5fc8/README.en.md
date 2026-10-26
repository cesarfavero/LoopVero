# `withFieldFromAliases`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/arg-coercion/gated-argument-alias.ts` · [Module README](../../../../../../../modules/core/runner/tools/arg-coercion/gated-argument-alias-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777571-777577](../../../../../../../../reference/runtime/host-main.cjs#L777571-L777577) | `FunctionDeclaration` | no | `entries, spec, aliases, sent` |
| [evaluation:577266-577272](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577266-L577272) | `FunctionDeclaration` | no | `entries, spec, aliases, sent` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777571-777577](../../../../../../../../reference/runtime/host-main.cjs#L777571-L777577) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:577266-577272](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L577266-L577272) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:777571

Calls written directly in this body: `Object.fromEntries`, `entries.filter`, `new Set`.

SHA-256 of the source span: `11adcc3aa000508ddd51bb9398dcdfbe488d0db32a1ce602b89c3342fd77191d`.

### evaluation:577266

Calls written directly in this body: `Object.fromEntries`, `entries.filter`, `new Set`.

SHA-256 of the source span: `11adcc3aa000508ddd51bb9398dcdfbe488d0db32a1ce602b89c3342fd77191d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
