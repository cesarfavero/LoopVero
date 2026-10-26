# `goalElapsedMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/goal-continuation.js` · [README do módulo](../../../../modules/agent-core/goal-continuation-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475457-475460](../../../../../reference/runtime/host-main.cjs#L475457-L475460) | `FunctionDeclaration` | não | `goalState, nowMs2` |
| [evaluation:254677-254680](../../../../../reference/runtime/sand-eval-runner.cjs#L254677-L254680) | `FunctionDeclaration` | não | `goalState, nowMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475457-475460](../../../../../reference/runtime/host-main.cjs#L475457-L475460) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254677-254680](../../../../../reference/runtime/sand-eval-runner.cjs#L254677-L254680) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:475457

Chamadas escritas diretamente neste corpo: `Number`, `goalElapsedMsFrom`, `goalWorkedMs`.

SHA-256 do trecho: `3d4d37fb4a96f0db1fb676f17bac5587773b5cc29a00f9bdbceb4e65a86a4cc3`.

### evaluation:254677

Chamadas escritas diretamente neste corpo: `Number`, `goalElapsedMsFrom`, `goalWorkedMs`.

SHA-256 do trecho: `07fe2074b119aac34d3e4452f485d56b6bba07e6005715ab6453011d5bfe0bfc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
