# `SummarizationHandler.getModelId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/summarization-handler.js` · [README do módulo](../../../../modules/agent-summarization/summarization-handler-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:621469-621471](../../../../../reference/runtime/host-main.cjs#L621469-L621471) | `method` | não | `(nenhum)` |
| [evaluation:305823-305825](../../../../../reference/runtime/sand-eval-runner.cjs#L305823-L305825) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:621469-621471](../../../../../reference/runtime/host-main.cjs#L621469-L621471) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:305823-305825](../../../../../reference/runtime/sand-eval-runner.cjs#L305823-L305825) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:621469

Chamadas escritas diretamente neste corpo: `this.promptSession.getModelId`.

SHA-256 do trecho: `b4d2bf2587f751c2763f5b0c7f19da154cb0cc286eb4d9dd5c82bd4959ad4ced`.

### evaluation:305823

Chamadas escritas diretamente neste corpo: `this.promptSession.getModelId`.

SHA-256 do trecho: `b4d2bf2587f751c2763f5b0c7f19da154cb0cc286eb4d9dd5c82bd4959ad4ced`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
