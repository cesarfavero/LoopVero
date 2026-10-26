# `clampSandTranscriptMessageLimit`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/runner/transcript-trace.ts` · [README do módulo](../../../../../modules/core/runner/transcript-trace-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:765769-765772](../../../../../../reference/runtime/host-main.cjs#L765769-L765772) | `FunctionDeclaration` | não | `limit3` |
| [evaluation:559134-559137](../../../../../../reference/runtime/sand-eval-runner.cjs#L559134-L559137) | `FunctionDeclaration` | não | `limit3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765769-765772](../../../../../../reference/runtime/host-main.cjs#L765769-L765772) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:559134-559137](../../../../../../reference/runtime/sand-eval-runner.cjs#L559134-L559137) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:765769

Chamadas escritas diretamente neste corpo: `Math.floor`, `Math.min`, `Number.isFinite`.

SHA-256 do trecho: `3c6c9bbeac356951decaefd793931e872d1de212acdf094e9a1b206087447f35`.

### evaluation:559134

Chamadas escritas diretamente neste corpo: `Math.floor`, `Math.min`, `Number.isFinite`.

SHA-256 do trecho: `3c6c9bbeac356951decaefd793931e872d1de212acdf094e9a1b206087447f35`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
