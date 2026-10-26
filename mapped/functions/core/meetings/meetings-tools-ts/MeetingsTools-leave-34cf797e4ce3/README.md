# `_MeetingsTools.leave`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/meetings/meetings-tools.ts` · [README do módulo](../../../../../modules/core/meetings/meetings-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773417-773421](../../../../../../reference/runtime/host-main.cjs#L773417-L773421) | `method` | sim | `deps, args` |
| [evaluation:572643-572647](../../../../../../reference/runtime/sand-eval-runner.cjs#L572643-L572647) | `method` | sim | `deps, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773417-773421](../../../../../../reference/runtime/host-main.cjs#L773417-L773421) | 1 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:572643-572647](../../../../../../reference/runtime/sand-eval-runner.cjs#L572643-L572647) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:773417

Chamadas escritas diretamente neste corpo: `_MeetingsTools.joiningNote`, `_MeetingsTools.renderRow`, `_MeetingsTools.unknownMeeting`, `deps.meetings.leaveMeeting`.

SHA-256 do trecho: `4e68774288cbeef1b391f8cd1f017da1d3667a90589b239c0aef362cf8f73955`.

### evaluation:572643

Chamadas escritas diretamente neste corpo: `_MeetingsTools.joiningNote`, `_MeetingsTools.renderRow`, `_MeetingsTools.unknownMeeting`, `deps.meetings.leaveMeeting`.

SHA-256 do trecho: `4e68774288cbeef1b391f8cd1f017da1d3667a90589b239c0aef362cf8f73955`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
