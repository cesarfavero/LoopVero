# `isGoalStateShapeValid`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/goal-continuation.js` · [README do módulo](../../../../modules/agent-core/goal-continuation-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475474-475476](../../../../../reference/runtime/host-main.cjs#L475474-L475476) | `FunctionDeclaration` | não | `goalState, identity` |
| [evaluation:254694-254696](../../../../../reference/runtime/sand-eval-runner.cjs#L254694-L254696) | `FunctionDeclaration` | não | `goalState, identity2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475474-475476](../../../../../reference/runtime/host-main.cjs#L475474-L475476) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254694-254696](../../../../../reference/runtime/sand-eval-runner.cjs#L254694-L254696) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:475474

Chamadas escritas diretamente neste corpo: `GOAL_ID_PATTERN.test`, `isGoalIdentityValid`.

SHA-256 do trecho: `b23633e3b18e580cfb23b3779f059a4a93ab3e0e09afe54e3fecf38d231ea489`.

### evaluation:254694

Chamadas escritas diretamente neste corpo: `GOAL_ID_PATTERN.test`, `isGoalIdentityValid`.

SHA-256 do trecho: `aae57a3d245940090d6d5141852e0d6227c4f4fd115195d0c84d879e9d6a46ce`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
