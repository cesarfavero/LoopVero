# `MountedAgentStoresSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:639879-639913](../../../../../../reference/runtime/host-main.cjs#L639879-L639913) | `FunctionDeclaration` | não | `{ stores, dynamicMountEnabled }` |
| [evaluation:430493-430527](../../../../../../reference/runtime/sand-eval-runner.cjs#L430493-L430527) | `FunctionDeclaration` | não | `{ stores, dynamicMountEnabled }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639879-639913](../../../../../../reference/runtime/host-main.cjs#L639879-L639913) | 3 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430493-430527](../../../../../../reference/runtime/sand-eval-runner.cjs#L430493-L430527) | 3 | 0 | 0 | 1 | 0 | 0 |

### host:639879

Chamadas escritas diretamente neste corpo: `.join`, `jsx`, `jsxs`, `stores.find`, `stores.map`, `stores.some`.

SHA-256 do trecho: `c16e7b82ad279e046181c1963d8d60c4233503ab8e11dbb07e8d7df442f30a4e`.

### evaluation:430493

Chamadas escritas diretamente neste corpo: `.join`, `jsx`, `jsxs`, `stores.find`, `stores.map`, `stores.some`.

SHA-256 do trecho: `c16e7b82ad279e046181c1963d8d60c4233503ab8e11dbb07e8d7df442f30a4e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
