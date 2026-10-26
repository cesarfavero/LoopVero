# `draftDestinations`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-tool-registration.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:756070-756078](../../../../../../../reference/runtime/host-main.cjs#L756070-L756078) | `FunctionDeclaration` | não | `{   message,   route,   verification }` |
| [evaluation:541991-541999](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541991-L541999) | `FunctionDeclaration` | não | `{   message,   route,   verification }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756070-756078](../../../../../../../reference/runtime/host-main.cjs#L756070-L756078) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:541991-541999](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541991-L541999) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:756070

Chamadas escritas diretamente neste corpo: `SLACK_CHANNEL_NOT_DM_ID.test`, `slackChannelLabel`, `verification.workspace.trim`.

SHA-256 do trecho: `2054f62e224ef394e178f8d33f3bc14c0fe3053c8b0b02b85268960b15038caa`.

### evaluation:541991

Chamadas escritas diretamente neste corpo: `SLACK_CHANNEL_NOT_DM_ID.test`, `slackChannelLabel`, `verification.workspace.trim`.

SHA-256 do trecho: `2054f62e224ef394e178f8d33f3bc14c0fe3053c8b0b02b85268960b15038caa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
