# `src/shared/locale/locale.ts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/locale/locale.ts` · [Module README](../../../../../modules/shared/locale/locale-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:227813-227863](../../../../../../reference/runtime/host-main.cjs#L227813-L227863) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:227813-227863](../../../../../../reference/runtime/host-main.cjs#L227813-L227863) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:227813

Calls written directly in this body: `SUPPORTED_LOCALE_ROWS.map`, `init_invariant`.

Assignment or increment targets: `DEFAULT_LOCALE`, `DEFAULT_SAND_LANGUAGE_PREFERENCE`, `SAND_LANGUAGE_PREFERENCES`, `SUPPORTED_LOCALES`, `SUPPORTED_LOCALE_ROWS`.

SHA-256 of the source span: `f934f403f08dd954f0d9a7044e550d2c6eba9d2c385fa47d2e3738e38f0bd91e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
