# `Walker.helper`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/run-code-read-only.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/run-code-read-only-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750276-750291](../../../../../../../../reference/runtime/host-main.cjs#L750276-L750291) | `method` | no | `binding, args, scope` |
| [evaluation:523127-523142](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523127-L523142) | `method` | no | `binding, args, scope` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750276-750291](../../../../../../../../reference/runtime/host-main.cjs#L750276-L750291) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523127-523142](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L523127-L523142) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:750276

Calls written directly in this body: `args.map`, `fail2`, `fn.params.forEach`, `new Scope3`, `this.functionBody`.

Assignment or increment targets: `this.helperDepth`.

SHA-256 of the source span: `fb461a9fe1fdc4b9b67140f4ef3aea2c100cca500be80d9982e924e2105b79f7`.

### evaluation:523127

Calls written directly in this body: `args.map`, `fail`, `fn.params.forEach`, `new Scope3`, `this.functionBody`.

Assignment or increment targets: `this.helperDepth`.

SHA-256 of the source span: `4812ec20b8f0eaec11b07abe160299014c52051d6379afdf27665dff35c12c40`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
