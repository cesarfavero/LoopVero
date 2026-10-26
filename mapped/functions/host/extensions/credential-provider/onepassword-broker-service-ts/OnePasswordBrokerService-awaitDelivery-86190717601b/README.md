# `OnePasswordBrokerService.awaitDelivery`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:550745-550758](../../../../../../../reference/runtime/host-main.cjs#L550745-L550758) | `method` | sim | `read2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550745-550758](../../../../../../../reference/runtime/host-main.cjs#L550745-L550758) | 3 | 0 | 1 | 2 | 1 | 1 |

### host:550745

Chamadas escritas diretamente neste corpo: `Promise.withResolvers`, `matches`, `this.deliveryGrace.run`.

Alvos de atribuição ou incremento: `this.deliveryArrived`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `51baf695003cf2a6da56cc5b105d1f99ae28ac6a81803aa3adc2de69550dcfbe`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
