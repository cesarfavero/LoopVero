# `readSandTranscriptWindow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/runner/transcript-trace.ts` · [README do módulo](../../../../../modules/core/runner/transcript-trace-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765773-765812](../../../../../../reference/runtime/host-main.cjs#L765773-L765812) | `FunctionDeclaration` | sim | `args` |
| [evaluation:559138-559177](../../../../../../reference/runtime/sand-eval-runner.cjs#L559138-L559177) | `FunctionDeclaration` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765773-765812](../../../../../../reference/runtime/host-main.cjs#L765773-L765812) | 4 | 2 | 2 | 2 | 0 | 0 |
| [evaluation:559138-559177](../../../../../../reference/runtime/sand-eval-runner.cjs#L559138-L559177) | 4 | 2 | 2 | 2 | 0 | 0 |

### host:765773

Chamadas escritas diretamente neste corpo: `Math.max`, `Math.min`, `asyncMapValues`, `clampSandTranscriptMessageLimit`, `ids.slice`, `lines2.unshift`, `listMessageBlobIds`.

Alvos de atribuição ou incremento: `bytes`, `firstIndex`, `index`, `reachedByteCap`.

SHA-256 do trecho: `7d5b5b0af1dc6f62ff2d88403e1e62efb9886c4b9358ca3b434d294d4fe4e041`.

### evaluation:559138

Chamadas escritas diretamente neste corpo: `Math.max`, `Math.min`, `asyncMapValues`, `clampSandTranscriptMessageLimit`, `ids.slice`, `lines2.unshift`, `listMessageBlobIds`.

Alvos de atribuição ou incremento: `bytes`, `firstIndex`, `index`, `reachedByteCap`.

SHA-256 do trecho: `7d5b5b0af1dc6f62ff2d88403e1e62efb9886c4b9358ca3b434d294d4fe4e041`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
