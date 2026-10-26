# `assistantTurn`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/compaction-segments.js` · [README do módulo](../../../../modules/agent-summarization/compaction-segments-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:616844-616858](../../../../../reference/runtime/host-main.cjs#L616844-L616858) | `FunctionDeclaration` | não | `content` |
| [evaluation:285384-285398](../../../../../reference/runtime/sand-eval-runner.cjs#L285384-L285398) | `FunctionDeclaration` | não | `content` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616844-616858](../../../../../reference/runtime/host-main.cjs#L616844-L616858) | 3 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:285384-285398](../../../../../reference/runtime/sand-eval-runner.cjs#L285384-L285398) | 3 | 1 | 0 | 2 | 0 | 0 |

### host:616844

Chamadas escritas diretamente neste corpo: `toolArgs`, `toolCalls2.push`.

Alvos de atribuição ou incremento: `text3`.

SHA-256 do trecho: `93b88e468fb78236d5b29f51655902fc2d0ef15f867de3072eb5f9cc99251c30`.

### evaluation:285384

Chamadas escritas diretamente neste corpo: `toolArgs`, `toolCalls3.push`.

Alvos de atribuição ou incremento: `text3`.

SHA-256 do trecho: `064dca20c57848a313899791b86e11af18e69ded3ff18dd4e658ea506af4431c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
