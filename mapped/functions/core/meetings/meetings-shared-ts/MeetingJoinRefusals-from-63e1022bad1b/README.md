# `_MeetingJoinRefusals.from`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/meetings/meetings-shared.ts` · [README do módulo](../../../../../modules/core/meetings/meetings-shared-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:772561-772568](../../../../../../reference/runtime/host-main.cjs#L772561-L772568) | `method` | não | `{ reason, url: url2, schedule }` |
| [evaluation:571787-571794](../../../../../../reference/runtime/sand-eval-runner.cjs#L571787-L571794) | `method` | não | `{ reason, url: url2, schedule }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772561-772568](../../../../../../reference/runtime/host-main.cjs#L772561-L772568) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:571787-571794](../../../../../../reference/runtime/sand-eval-runner.cjs#L571787-L571794) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:772561

Chamadas escritas diretamente neste corpo: `MeetingSites.parse`, `_MeetingJoinRefusals.timing`.

SHA-256 do trecho: `3f6c11f27a185c6a0b99c0d57813bd68455613f789afbd7f68a08524a1b44dbf`.

### evaluation:571787

Chamadas escritas diretamente neste corpo: `MeetingSites.parse`, `_MeetingJoinRefusals.timing`.

SHA-256 do trecho: `3f6c11f27a185c6a0b99c0d57813bd68455613f789afbd7f68a08524a1b44dbf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
