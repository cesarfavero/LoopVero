# `_MeetingChannel.startedText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/meetings/meeting-channel.ts` · [README do módulo](../../../../../modules/shared/meetings/meeting-channel-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:772494-772502](../../../../../../reference/runtime/host-main.cjs#L772494-L772502) | `method` | não | `meeting` |
| [evaluation:571720-571728](../../../../../../reference/runtime/sand-eval-runner.cjs#L571720-L571728) | `method` | não | `meeting` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772494-772502](../../../../../../reference/runtime/host-main.cjs#L772494-L772502) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:571720-571728](../../../../../../reference/runtime/sand-eval-runner.cjs#L571720-L571728) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:772494

Chamadas escritas diretamente neste corpo: `.join`, `MeetingChannelAddress.of`.

SHA-256 do trecho: `d6b3141a5493c76523715f63abfb8ddfa83dd6a5265ff48429533b266df5008f`.

### evaluation:571720

Chamadas escritas diretamente neste corpo: `.join`, `MeetingChannelAddress.of`.

SHA-256 do trecho: `d6b3141a5493c76523715f63abfb8ddfa83dd6a5265ff48429533b266df5008f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
