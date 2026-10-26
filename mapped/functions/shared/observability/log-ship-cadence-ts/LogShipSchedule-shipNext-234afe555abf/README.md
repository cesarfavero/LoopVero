# `LogShipSchedule.shipNext`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/observability/log-ship-cadence.ts` · [README do módulo](../../../../../modules/shared/observability/log-ship-cadence-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:452675-452677](../../../../../../reference/runtime/host-main.cjs#L452675-L452677) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:452675-452677](../../../../../../reference/runtime/host-main.cjs#L452675-L452677) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:452675

Chamadas escritas diretamente neste corpo: `this.isBackingOff`.

Alvos de atribuição ou incremento: `this.nextShipAtMs`.

SHA-256 do trecho: `b6cd3ecfaec1dde27221439acf3eabef4dff63cee4671d0ff883fc903abf1522`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
