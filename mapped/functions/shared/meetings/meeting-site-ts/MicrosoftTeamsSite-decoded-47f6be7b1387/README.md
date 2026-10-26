# `_MicrosoftTeamsSite.decoded`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/meetings/meeting-site.ts` · [README do módulo](../../../../../modules/shared/meetings/meeting-site-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:772434-772441](../../../../../../reference/runtime/host-main.cjs#L772434-L772441) | `method` | não | `part` |
| [evaluation:571663-571670](../../../../../../reference/runtime/sand-eval-runner.cjs#L571663-L571670) | `method` | não | `part` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:772434-772441](../../../../../../reference/runtime/host-main.cjs#L772434-L772441) | 1 | 0 | 0 | 2 | 1 | 1 |
| [evaluation:571663-571670](../../../../../../reference/runtime/sand-eval-runner.cjs#L571663-L571670) | 1 | 0 | 0 | 2 | 1 | 1 |

### host:772434

Chamadas escritas diretamente neste corpo: `decodeURIComponent`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `f6abf4983925cd35f91d75918b57fd91384a99e0d86783edc1305b58003780e6`.

### evaluation:571663

Chamadas escritas diretamente neste corpo: `decodeURIComponent`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `06d192fae96e926dc8afdad25f4383c082a8e1ef0b4ea65ea80a649c532a2af0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
