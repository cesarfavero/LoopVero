# `stopWindowCommand`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-windows.ts` · [README do módulo](../../../../../modules/core/box/box-windows-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:553940-553950](../../../../../../reference/runtime/host-main.cjs#L553940-L553950) | `FunctionDeclaration` | não | `windowIndex, ownerToken, opts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553940-553950](../../../../../../reference/runtime/host-main.cjs#L553940-L553950) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:553940

Chamadas escritas diretamente neste corpo: `boundUptimeFile`, `exitWhen`, `heldByAnotherSeat`, `readWindowToken`, `reboundWithinQuietPeriod`, `seatTableNames`, `stopWindowAndWaitForX`, `underWindowLock`.

SHA-256 do trecho: `167b2159bf9c2e6f441d0158351864f30d9b5f2500f8ade0092238d5462332e3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
