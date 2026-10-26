# `recordMissingSubagentStateBlob`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/subagents/README.md).

**Módulo:** `agent-kv/subagent-states.js` · [README do módulo](../../../../modules/agent-kv/subagent-states-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:615965-615971](../../../../../reference/runtime/host-main.cjs#L615965-L615971) | `FunctionDeclaration` | não | `ctx, miss` |
| [evaluation:284778-284784](../../../../../reference/runtime/sand-eval-runner.cjs#L284778-L284784) | `FunctionDeclaration` | não | `ctx, miss` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:615965-615971](../../../../../reference/runtime/host-main.cjs#L615965-L615971) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:284778-284784](../../../../../reference/runtime/sand-eval-runner.cjs#L284778-L284784) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:615965

Chamadas escritas diretamente neste corpo: `logger27.warn`, `subagentStateRefMissingBlob.increment`.

SHA-256 do trecho: `133151f2d33f604f3c83f0f0c6aabbe3589ca6eb5bd52c3d379b170dbd855372`.

### evaluation:284778

Chamadas escritas diretamente neste corpo: `logger2.warn`, `subagentStateRefMissingBlob.increment`.

SHA-256 do trecho: `39c0ee9339d9a77fcdc9f0cd8fca89a60b6ca3bc1e2e6657129b846335e49aa6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
