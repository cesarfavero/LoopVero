# `SandHostEventBus.emit`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `host/host-event-bus.ts` · [README do módulo](../../../../modules/host/host-event-bus-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786258-786270](../../../../../reference/runtime/host-main.cjs#L786258-L786270) | `method` | não | `...args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786258-786270](../../../../../reference/runtime/host-main.cjs#L786258-L786270) | 1 | 1 | 0 | 1 | 0 | 1 |

### host:786258

Chamadas escritas diretamente neste corpo: `errorLogTag`, `listener`, `this.capabilityEvents.emit`, `this.reportFailure`.

SHA-256 do trecho: `333a1b8409c5d27ccb3ec44ed6e5519e37779873d9f75f44fb39e903ca824f0f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
