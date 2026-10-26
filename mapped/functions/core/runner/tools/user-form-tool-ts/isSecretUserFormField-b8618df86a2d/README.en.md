# `isSecretUserFormField`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726098-726100](../../../../../../../reference/runtime/host-main.cjs#L726098-L726100) | `FunctionDeclaration` | no | `field` |
| [evaluation:560716-560718](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560716-L560718) | `FunctionDeclaration` | no | `field` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726098-726100](../../../../../../../reference/runtime/host-main.cjs#L726098-L726100) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:560716-560718](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560716-L560718) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:726098

Calls written directly in this body: `ALWAYS_SECRET_TYPES.has`.

SHA-256 of the source span: `737ae30b7fd8349076ac2c5cfddcbbe82ab9d58ed61775b8cf743047ae0ef7fb`.

### evaluation:560716

Calls written directly in this body: `ALWAYS_SECRET_TYPES.has`.

SHA-256 of the source span: `737ae30b7fd8349076ac2c5cfddcbbe82ab9d58ed61775b8cf743047ae0ef7fb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
