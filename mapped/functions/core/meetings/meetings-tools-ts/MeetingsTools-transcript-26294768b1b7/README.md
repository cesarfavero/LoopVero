# `_MeetingsTools.transcript`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/meetings/meetings-tools.ts` · [README do módulo](../../../../../modules/core/meetings/meetings-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773464-773474](../../../../../../reference/runtime/host-main.cjs#L773464-L773474) | `method` | sim | `deps, args` |
| [evaluation:572690-572700](../../../../../../reference/runtime/sand-eval-runner.cjs#L572690-L572700) | `method` | sim | `deps, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773464-773474](../../../../../../reference/runtime/host-main.cjs#L773464-L773474) | 3 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:572690-572700](../../../../../../reference/runtime/sand-eval-runner.cjs#L572690-L572700) | 3 | 0 | 1 | 2 | 0 | 0 |

### host:773464

Chamadas escritas diretamente neste corpo: `_MeetingsTools.renderTranscript`, `_MeetingsTools.unknownMeeting`, `deps.meetings.readTranscript`.

SHA-256 do trecho: `7ec1eda70501c7686e90f5ae947b201a6881dec554cc21f935ba8de2a4f24676`.

### evaluation:572690

Chamadas escritas diretamente neste corpo: `_MeetingsTools.renderTranscript`, `_MeetingsTools.unknownMeeting`, `deps.meetings.readTranscript`.

SHA-256 do trecho: `7ec1eda70501c7686e90f5ae947b201a6881dec554cc21f935ba8de2a4f24676`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
