# `partsOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/secure-values/user-form-vault-kinds.ts` · [Module README](../../../../../../modules/core/runner/secure-values/user-form-vault-kinds-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:724697-724706](../../../../../../../reference/runtime/host-main.cjs#L724697-L724706) | `FunctionDeclaration` | no | `kind, allowed, parts` |
| [evaluation:560256-560265](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560256-L560265) | `FunctionDeclaration` | no | `kind, allowed, parts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:724697-724706](../../../../../../../reference/runtime/host-main.cjs#L724697-L724706) | 2 | 0 | 0 | 2 | 1 | 0 |
| [evaluation:560256-560265](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560256-L560265) | 2 | 0 | 0 | 2 | 1 | 0 |

### host:724697

Calls written directly in this body: `.join`, `JSON.stringify`, `allowed.filter`, `allowed.map`, `new SandToolInputError`, `parts.find`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `685d73390bf572253fd9a694912065db517808c09c75c98ca660f363be09ff72`.

### evaluation:560256

Calls written directly in this body: `.join`, `JSON.stringify`, `allowed.filter`, `allowed.map`, `new SandToolInputError`, `parts.find`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `ca4605193662c4666df2c6f3aced4cbdc1202f8b202d341c2e2bf24f37038b8e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
