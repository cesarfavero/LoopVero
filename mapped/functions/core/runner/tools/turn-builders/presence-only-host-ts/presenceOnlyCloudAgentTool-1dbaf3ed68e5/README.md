# `presenceOnlyCloudAgentTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/turn-builders/presence-only-host.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/turn-builders/presence-only-host-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:568922-568962](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L568922-L568962) | `FunctionDeclaration` | não | `{   reviewAction: reviewAction2,   fallbackLineage,   describeScmConnect,   scmConnectCard,   isCanvasesEnabled,   artifactsEnabled,   durableWatchEnabled,   replyModesEnabled,   publishRepositoryEnabled,   appsPublishEnabled,   publishAppEnabled,   originBuiltinEnabled,   exchangeEnabled,   botStoreMounted }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:568922-568962](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L568922-L568962) | 9 | 0 | 0 | 1 | 0 | 0 |

### evaluation:568922

Chamadas escritas diretamente neste corpo: `createCloudAgentTool`, `new Set`, `presenceOnlyPort`, `unwired`.

SHA-256 do trecho: `3dea4e97a3819d4fed005c790be3b6a6559350289a6417cac1754da9feb6d636`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
