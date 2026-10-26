# `SharedDesktopSandBox.keepFailedSeat`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shared-desktop-sand-box.ts` · [README do módulo](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:554786-554790](../../../../../../reference/runtime/host-main.cjs#L554786-L554790) | `method` | não | `agentId, windowIndex, newSeat` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554786-554790](../../../../../../reference/runtime/host-main.cjs#L554786-L554790) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:554786

Chamadas escritas diretamente neste corpo: `this.agentWindows.get`, `this.downForks.add`, `this.establishedForks.has`, `this.unstartedSeats.add`.

SHA-256 do trecho: `aec4126231460171a6f3459b06852a993713deb9f5040da900b7b99c7d14fc79`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
