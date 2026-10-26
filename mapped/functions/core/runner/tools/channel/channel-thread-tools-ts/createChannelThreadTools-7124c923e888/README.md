# `createChannelThreadTools`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/channel/channel-thread-tools.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/channel/channel-thread-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:768389-768411](../../../../../../../../reference/runtime/host-main.cjs#L768389-L768411) | `FunctionDeclaration` | não | `ports` |
| [evaluation:563905-563927](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563905-L563927) | `FunctionDeclaration` | não | `ports` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768389-768411](../../../../../../../../reference/runtime/host-main.cjs#L768389-L768411) | 6 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:563905-563927](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L563905-L563927) | 6 | 0 | 0 | 2 | 0 | 0 |

### host:768389

Chamadas escritas diretamente neste corpo: `createDeleteOwnMicrosoftTeamsMessageTool`, `createReactToMicrosoftTeamsMessageTool`, `createReactToSlackMessageTool`, `createSetMicrosoftTeamsStatusTool`, `createSlackThreadTools`, `tools.push`.

SHA-256 do trecho: `5a75339d07d675a1ce951baf639ddeb3486bdf9c9d25fc3e8018e847ab5e9edf`.

### evaluation:563905

Chamadas escritas diretamente neste corpo: `createDeleteOwnMicrosoftTeamsMessageTool`, `createReactToMicrosoftTeamsMessageTool`, `createReactToSlackMessageTool`, `createSetMicrosoftTeamsStatusTool`, `createSlackThreadTools`, `tools.push`.

SHA-256 do trecho: `5a75339d07d675a1ce951baf639ddeb3486bdf9c9d25fc3e8018e847ab5e9edf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
