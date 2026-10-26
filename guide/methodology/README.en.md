# Evidence method

[English](README.en.md) · [Português (Brasil)](README.md)

## Source of truth

The versioned references are the primary source. The source commit is `655acca99bff0d17466547611108f94ed6a8a5e7`; the files were reorganized under `reference/` while preserving their bytes and Git modes. The [manifest](../../mapped/inventory/original-files.json) allows each blob to be compared with the reference. We do not use the earlier application implementation as evidence about the harness.

Folder names belong to this organization of the material. Internal class names, function names, logical paths in compiler comments, and contracts remain in the evidence. They have not been removed or changed to support a different narrative.

## How a conclusion was reached

1. Locate the module and the actual body in the bundle.
2. Identify inputs, conditions, dependencies, effects, and results.
3. Trace the caller when it exists in the same collection.
4. Compare the host and runner without filling gaps in one with assumptions from the other.
5. Record a missing remote implementation, configuration, or path as a gap.
6. Cite paths and LF-based line ranges from the reorganized original file.

This procedure describes analysis of the files already present, without instructions for obtaining them or reproducing an extraction.

## Automatic catalog

The Acorn 8.18.0 parser analyzes the ASTs of three bundles: the host, evaluation runner, and state worker. The script does not import or execute the analyzed code. Compiler source comments delimit modules; repeated sources remain separate sections.

The selected scope covers modules from the harness core, host, shared types and services, evaluation, and dependencies directly related to inference, context, transcripts, execution memory, and summarization. General vendored libraries and all generated protocols are not presented as functions belonging to the harness itself. Their files remain in the original collection.

Each named function, method, or closure records parameters, async/generator flags, its range, source-span hash, calls written in the body, assignment targets, and syntactic counts. Nested functions are visited separately. Anonymous callbacks remain in the source code but receive neither an invented name nor their own README.

Pages are grouped by module and qualified name. If two occurrences share that name, both are listed. Numeric suffixes created by the bundler are preserved. This grouping does not amount to reconstructing the semantic identity of every original TypeScript function.

## What the AST does not prove

- A call to `obj.method()` does not prove which implementation the object contains at runtime.
- The presence of a symbol does not prove it is reachable from the active entry point.
- A prompt string describes an instruction; its existence does not prove that a caller applies it.
- A configuration property does not prove its value in production.
- A function name does not replace reading its body.
- Branch counts do not measure cognitive complexity or cover every short-circuit logical expression.
- Assignments do not capture every effect of called methods, native mutations, or remote effects.
- The pages do not infer missing types or invent return formats.

## Checks

The verifier checks the size and Git blob SHA-1 of available originals, the SHA-256 of the three analyzed bundles, relative README links, line ranges in available sources, the presence of reference pages, and the absence of the former application surfaces in the prepared result. Publication should also compare the complete manifest with the remote tree to verify all 1,070 files without executing any of them.

For numbering, the scripts count only LF (`\n`). Unicode separators inside strings must not shift GitHub anchors; this is why we do not use `str.splitlines()` to calculate source lines.

## Operational limit

No original execution against the backend, model, remote machine, connected account, or real authentication was performed. The study validates content, structure, and the consistency of static connections. A behavioral test would require a dedicated environment and contracts that are not fully available. The guide does not claim functional parity or a completed reimplementation.
