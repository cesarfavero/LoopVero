# `_MeetingsTools.list`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/meetings/meetings-tools.ts` · [README do módulo](../../../../../modules/core/meetings/meetings-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:773422-773427](../../../../../../reference/runtime/host-main.cjs#L773422-L773427) | `method` | sim | `deps, args` |
| [evaluation:572648-572653](../../../../../../reference/runtime/sand-eval-runner.cjs#L572648-L572653) | `method` | sim | `deps, args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773422-773427](../../../../../../reference/runtime/host-main.cjs#L773422-L773427) | 0 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:572648-572653](../../../../../../reference/runtime/sand-eval-runner.cjs#L572648-L572653) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:773422

Chamadas escritas diretamente neste corpo: `_MeetingsTools.pageQuery`, `_MeetingsTools.renderList`, `deps.meetings.listMeetings`.

SHA-256 do trecho: `4eee505d916923e65f4de448deceea5b2c0c719e2374410893bcc5576778903e`.

### evaluation:572648

Chamadas escritas diretamente neste corpo: `_MeetingsTools.pageQuery`, `_MeetingsTools.renderList`, `deps.meetings.listMeetings`.

SHA-256 do trecho: `4eee505d916923e65f4de448deceea5b2c0c719e2374410893bcc5576778903e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
