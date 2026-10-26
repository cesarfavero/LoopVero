# `userText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/compaction-segments.js` · [README do módulo](../../../../modules/agent-summarization/compaction-segments-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:616829-616843](../../../../../reference/runtime/host-main.cjs#L616829-L616843) | `FunctionDeclaration` | não | `content` |
| [evaluation:285369-285383](../../../../../reference/runtime/sand-eval-runner.cjs#L285369-L285383) | `FunctionDeclaration` | não | `content` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:616829-616843](../../../../../reference/runtime/host-main.cjs#L616829-L616843) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:285369-285383](../../../../../reference/runtime/sand-eval-runner.cjs#L285369-L285383) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:616829

Chamadas escritas diretamente neste corpo: `.join`, `content.map`.

SHA-256 do trecho: `1650d7dfa46bf8010654c894a067a2a40f71fa554af26968ae26ff44ce5d3881`.

### evaluation:285369

Chamadas escritas diretamente neste corpo: `.join`, `content.map`.

SHA-256 do trecho: `1650d7dfa46bf8010654c894a067a2a40f71fa554af26968ae26ff44ce5d3881`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
