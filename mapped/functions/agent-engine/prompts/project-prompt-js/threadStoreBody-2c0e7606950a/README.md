# `threadStoreBody`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/project-prompt.js` · [README do módulo](../../../../../modules/agent-engine/prompts/project-prompt-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:641260-641277](../../../../../../reference/runtime/host-main.cjs#L641260-L641277) | `FunctionDeclaration` | não | `{ workerFileLinksEnabled, trackedTasks }` |
| [evaluation:431873-431890](../../../../../../reference/runtime/sand-eval-runner.cjs#L431873-L431890) | `FunctionDeclaration` | não | `{ workerFileLinksEnabled, trackedTasks }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641260-641277](../../../../../../reference/runtime/host-main.cjs#L641260-L641277) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:431873-431890](../../../../../../reference/runtime/sand-eval-runner.cjs#L431873-L431890) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:641260

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `edc407a9c8608a19bf8ed63d6a6bf299337b0b805b9c1739274ad9a149766d63`.

### evaluation:431873

Chamadas escritas diretamente neste corpo: nenhuma chamada identificável por nome.

SHA-256 do trecho: `edc407a9c8608a19bf8ed63d6a6bf299337b0b805b9c1739274ad9a149766d63`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
