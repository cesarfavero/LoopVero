# `_MeetingsTools.summary`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/meetings/meetings-tools.ts` · [README do módulo](../../../../../modules/core/meetings/meetings-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773459-773463](../../../../../../reference/runtime/host-main.cjs#L773459-L773463) | `method` | sim | `deps, args` |
| [evaluation:572685-572689](../../../../../../reference/runtime/sand-eval-runner.cjs#L572685-L572689) | `method` | sim | `deps, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773459-773463](../../../../../../reference/runtime/host-main.cjs#L773459-L773463) | 1 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:572685-572689](../../../../../../reference/runtime/sand-eval-runner.cjs#L572685-L572689) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:773459

Chamadas escritas diretamente neste corpo: `_MeetingsTools.renderSummary`, `_MeetingsTools.unknownMeeting`, `deps.meetings.getMeeting`.

SHA-256 do trecho: `2f6295113c9fbee83cbbe4e39455e85a7e1dac8c720ea8946dc867673df97e62`.

### evaluation:572685

Chamadas escritas diretamente neste corpo: `_MeetingsTools.renderSummary`, `_MeetingsTools.unknownMeeting`, `deps.meetings.getMeeting`.

SHA-256 do trecho: `2f6295113c9fbee83cbbe4e39455e85a7e1dac8c720ea8946dc867673df97e62`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
