# `OnePasswordBrokerService.adoptAccessRequest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/onepassword-broker-service.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/onepassword-broker-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:550954-550968](../../../../../../../reference/runtime/host-main.cjs#L550954-L550968) | `method` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:550954-550968](../../../../../../../reference/runtime/host-main.cjs#L550954-L550968) | 5 | 0 | 3 | 5 | 0 | 0 |

### host:550954

Chamadas escritas diretamente neste corpo: `.requests.get`, `.requests.set`, `this.agent`, `this.pickCdpPort`, `this.sessionMaterial`, `this.windowFor`.

SHA-256 do trecho: `e0ea7fa4b3e6967d46df84c4e6f59ff0438fc95a644fe04c74585fe739f5f753`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
