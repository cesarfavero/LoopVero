# `createFetchConnectedActivityTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-connected-activity-tool.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-connected-activity-tool-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:763739-763754](../../../../../../../reference/runtime/host-main.cjs#L763739-L763754) | `FunctionDeclaration` | não | `port` |
| [evaluation:556787-556802](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556787-L556802) | `FunctionDeclaration` | não | `port` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763739-763754](../../../../../../../reference/runtime/host-main.cjs#L763739-L763754) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556787-556802](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556787-L556802) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:763739

Chamadas escritas diretamente neste corpo: `.describe`, `defineCommunicateTool`, `describeSources`, `external_exports2.object`, `sourceSchema`, `sources.some`.

SHA-256 do trecho: `839b114cc2bc3fac332f8cfe9de8da23dde9c53f707aa004e7fd4ae06478b399`.

### evaluation:556787

Chamadas escritas diretamente neste corpo: `.describe`, `defineCommunicateTool`, `describeSources`, `external_exports3.object`, `sourceSchema`, `sources.some`.

SHA-256 do trecho: `f534cc764c3cfb5e15946b19ba59d2995cdb122776c27257b32b186600344773`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
