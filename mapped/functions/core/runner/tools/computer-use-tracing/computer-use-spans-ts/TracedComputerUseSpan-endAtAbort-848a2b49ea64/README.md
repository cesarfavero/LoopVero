# `TracedComputerUseSpan.endAtAbort`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/browser-computer/README.md).

**Módulo:** `core/runner/tools/computer-use-tracing/computer-use-spans.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/computer-use-tracing/computer-use-spans-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:742996-742998](../../../../../../../../reference/runtime/host-main.cjs#L742996-L742998) | `ArrowFunctionExpression` | não | `(nenhum)` |
| [evaluation:515847-515849](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515847-L515849) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742996-742998](../../../../../../../../reference/runtime/host-main.cjs#L742996-L742998) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:515847-515849](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L515847-L515849) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:742996

Chamadas escritas diretamente neste corpo: `computerUseSpanOutcomeOf`, `this.end`.

SHA-256 do trecho: `0f7c5699e8054ecc5f207f7f7479974e3f101b5d2aa464a917e52914a9fc2b08`.

### evaluation:515847

Chamadas escritas diretamente neste corpo: `computerUseSpanOutcomeOf`, `this.end`.

SHA-256 do trecho: `0f7c5699e8054ecc5f207f7f7479974e3f101b5d2aa464a917e52914a9fc2b08`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
