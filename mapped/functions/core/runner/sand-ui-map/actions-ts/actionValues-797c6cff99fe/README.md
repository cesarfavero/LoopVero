# `actionValues`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-ui-map/actions.ts` · [README do módulo](../../../../../../modules/core/runner/sand-ui-map/actions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:557887-557893](../../../../../../../reference/runtime/host-main.cjs#L557887-L557893) | `FunctionDeclaration` | não | `action, facts` |
| [evaluation:550695-550701](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550695-L550701) | `FunctionDeclaration` | não | `action, facts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:557887-557893](../../../../../../../reference/runtime/host-main.cjs#L557887-L557893) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:550695-550701](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550695-L550701) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:557887

Chamadas escritas diretamente neste corpo: `action.values.filter`, `new Set`, `taughtOverviewTabIds2`.

SHA-256 do trecho: `0c0f6a632ff73b4d70f1267c7005f107d6745e3f98a2b15a217364d78c350790`.

### evaluation:550695

Chamadas escritas diretamente neste corpo: `action.values.filter`, `new Set`, `taughtOverviewTabIds2`.

SHA-256 do trecho: `0c0f6a632ff73b4d70f1267c7005f107d6745e3f98a2b15a217364d78c350790`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
