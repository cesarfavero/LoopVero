# `SharedDesktopSandBox.dropCachedSeat`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shared-desktop-sand-box.ts` · [README do módulo](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:554598-554604](../../../../../../reference/runtime/host-main.cjs#L554598-L554604) | `method` | não | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554598-554604](../../../../../../reference/runtime/host-main.cjs#L554598-L554604) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:554598

Chamadas escritas diretamente neste corpo: `this.agentWindowTokens.delete`, `this.agentWindows.delete`, `this.downForks.delete`, `this.establishedForks.delete`, `this.unstartedSeats.delete`.

SHA-256 do trecho: `0fb427079485def8f0ebcf2c070d7c4f04007ec4351ea824c21a924fb9a964f5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
