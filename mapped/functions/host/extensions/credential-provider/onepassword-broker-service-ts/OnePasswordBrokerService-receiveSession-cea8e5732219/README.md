# `OnePasswordBrokerService.receiveSession`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:550685-550690](../../../../../../../reference/runtime/host-main.cjs#L550685-L550690) | `method` | não | `material` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550685-550690](../../../../../../../reference/runtime/host-main.cjs#L550685-L550690) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:550685

Chamadas escritas diretamente neste corpo: `this.deliveryArrived`, `this.grants.replace`, `this.grants.retainFor`.

Alvos de atribuição ou incremento: `this.delivered`.

SHA-256 do trecho: `d8292869e45ef34f88c845744d8e50bfc2004cee717f818580dbc5614b368232`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
