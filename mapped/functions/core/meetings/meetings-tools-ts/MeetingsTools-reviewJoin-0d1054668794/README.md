# `_MeetingsTools.reviewJoin`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/meetings/meetings-tools.ts` · [README do módulo](../../../../../modules/core/meetings/meetings-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773349-773370](../../../../../../reference/runtime/host-main.cjs#L773349-L773370) | `method` | sim | `deps, target` |
| [evaluation:572575-572596](../../../../../../reference/runtime/sand-eval-runner.cjs#L572575-L572596) | `method` | sim | `deps, target` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773349-773370](../../../../../../reference/runtime/host-main.cjs#L773349-L773370) | 2 | 0 | 1 | 2 | 1 | 0 |
| [evaluation:572575-572596](../../../../../../reference/runtime/sand-eval-runner.cjs#L572575-L572596) | 2 | 0 | 1 | 2 | 1 | 0 |

### host:773349

Chamadas escritas diretamente neste corpo: `deps.meetings.firstStartAtMs`, `deps.reviewJoin.review`, `new SandMeetingsError`, `refuse2`, `reviewCallId`.

Alvos de lançamento explícito: `SandMeetingsError`.

SHA-256 do trecho: `0c814f361d67eacd8e9d50f9767aa72146343c6675a8137691932566b02b216c`.

### evaluation:572575

Chamadas escritas diretamente neste corpo: `deps.meetings.firstStartAtMs`, `deps.reviewJoin.review`, `new SandMeetingsError`, `refuse3`, `reviewCallId`.

Alvos de lançamento explícito: `SandMeetingsError`.

SHA-256 do trecho: `0e39bd54b29d20e944d73f3590bd25492b1a89ce7d1b1e218df28a4a5a8faf83`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
