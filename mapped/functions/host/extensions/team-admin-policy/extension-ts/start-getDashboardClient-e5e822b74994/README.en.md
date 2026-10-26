# `start/getDashboardClient`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/team-admin-policy/extension.ts` · [Module README](../../../../../../modules/host/extensions/team-admin-policy/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:729863-729868](../../../../../../../reference/runtime/host-main.cjs#L729863-L729868) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:729863-729868](../../../../../../../reference/runtime/host-main.cjs#L729863-L729868) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:729863 uses an implicit arrow-function return.

### host:729863

Calls written directly in this body: `createSandCursorBackendClient`.

Assignment or increment targets: `dashboardClient`.

SHA-256 of the source span: `8c4ef51cb49bfff2637f440b7abcc280bea3dadaf6ac368eec07b2fe0cde59ce`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
