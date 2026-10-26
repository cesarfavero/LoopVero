# `readHtml`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-email-html.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732518-732530](../../../../../../../reference/runtime/host-main.cjs#L732518-L732530) | `FunctionDeclaration` | no | `html` |
| [evaluation:539530-539542](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539530-L539542) | `FunctionDeclaration` | no | `html` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732518-732530](../../../../../../../reference/runtime/host-main.cjs#L732518-L732530) | 0 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:539530-539542](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539530-L539542) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:732518

Calls written directly in this body: `closeLink`, `decodeEntities`, `html.replace`, `parseTag`, `readTag`, `readText3`, `visible.matchAll`, `visible.slice`.

Assignment or increment targets: `cursor`.

SHA-256 of the source span: `fb59b8f1aef7f896bb86d2c20b2702e3b26ed26d186812c1e8a94bff07e909a6`.

### evaluation:539530

Calls written directly in this body: `closeLink`, `decodeEntities`, `html.replace`, `parseTag`, `readTag`, `readText`, `visible.matchAll`, `visible.slice`.

Assignment or increment targets: `cursor`.

SHA-256 of the source span: `474c683d2346aa9424b4d337ba7f20ef0492dd7a5062c01bf784acfa59b45ca1`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
