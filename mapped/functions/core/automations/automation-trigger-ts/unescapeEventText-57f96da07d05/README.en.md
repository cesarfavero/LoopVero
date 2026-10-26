# `unescapeEventText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-trigger.ts` · [Module README](../../../../../modules/core/automations/automation-trigger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716449-716455](../../../../../../reference/runtime/host-main.cjs#L716449-L716455) | `FunctionDeclaration` | no | `value` |
| [evaluation:528222-528228](../../../../../../reference/runtime/sand-eval-runner.cjs#L528222-L528228) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716449-716455](../../../../../../reference/runtime/host-main.cjs#L716449-L716455) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:528222-528228](../../../../../../reference/runtime/sand-eval-runner.cjs#L528222-L528228) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:716449

Calls written directly in this body: `unescapeEventText`, `value.replace`.

SHA-256 of the source span: `7a9b4b2cd1e6f4f6a23e468cf27ecd2ea12faceff3a7977b94f1530b2acf1e0d`.

### evaluation:528222

Calls written directly in this body: `unescapeEventText`, `value.replace`.

SHA-256 of the source span: `7a9b4b2cd1e6f4f6a23e468cf27ecd2ea12faceff3a7977b94f1530b2acf1e0d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
