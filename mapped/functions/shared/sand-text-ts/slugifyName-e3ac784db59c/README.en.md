# `slugifyName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `shared/sand-text.ts` · [Module README](../../../../modules/shared/sand-text-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:227880-227883](../../../../../reference/runtime/host-main.cjs#L227880-L227883) | `FunctionDeclaration` | no | `name18, fallbackPrefix` |
| [evaluation:474416-474419](../../../../../reference/runtime/sand-eval-runner.cjs#L474416-L474419) | `FunctionDeclaration` | no | `name18, fallbackPrefix` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:227880-227883](../../../../../reference/runtime/host-main.cjs#L227880-L227883) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:474416-474419](../../../../../reference/runtime/sand-eval-runner.cjs#L474416-L474419) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:227880

Calls written directly in this body: `.replace`, `.slice`, `Date.now`, `name18.toLowerCase`.

SHA-256 of the source span: `ef8d4243c0beb3076f69371e3f37ccac1c9a086e56e3d040512ad6ff0a555299`.

### evaluation:474416

Calls written directly in this body: `.replace`, `.slice`, `Date.now`, `name18.toLowerCase`.

SHA-256 of the source span: `ef8d4243c0beb3076f69371e3f37ccac1c9a086e56e3d040512ad6ff0a555299`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
