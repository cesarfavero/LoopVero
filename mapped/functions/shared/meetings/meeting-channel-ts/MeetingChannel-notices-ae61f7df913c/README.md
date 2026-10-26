# `_MeetingChannel.notices`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/meetings/meeting-channel.ts` · [README do módulo](../../../../../modules/shared/meetings/meeting-channel-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:772541-772556](../../../../../../reference/runtime/host-main.cjs#L772541-L772556) | `method` | não | `meeting, phase, nowMs2, instruction = null` |
| [evaluation:571767-571782](../../../../../../reference/runtime/sand-eval-runner.cjs#L571767-L571782) | `method` | não | `meeting, phase, nowMs, instruction = null` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772541-772556](../../../../../../reference/runtime/host-main.cjs#L772541-L772556) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:571767-571782](../../../../../../reference/runtime/sand-eval-runner.cjs#L571767-L571782) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:772541

Chamadas escritas diretamente neste corpo: `_MeetingChannel.endedText`, `_MeetingChannel.startedText`.

SHA-256 do trecho: `7c7b3afca014d07608cb74bd260a44d0ab3d21d5a59ae95f016f8f39a1e272d1`.

### evaluation:571767

Chamadas escritas diretamente neste corpo: `_MeetingChannel.endedText`, `_MeetingChannel.startedText`.

SHA-256 do trecho: `3590eff31a6858de9aa234750ca09283e8df73639ce3577201006aa6b502346b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
