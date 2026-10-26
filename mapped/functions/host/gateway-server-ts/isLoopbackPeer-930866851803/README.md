# `isLoopbackPeer`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/gateway-server.ts` · [README do módulo](../../../../modules/host/gateway-server-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:493477-493481](../../../../../reference/runtime/host-main.cjs#L493477-L493481) | `FunctionDeclaration` | não | `address` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493477-493481](../../../../../reference/runtime/host-main.cjs#L493477-L493481) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:493477

Chamadas escritas diretamente neste corpo: `.startsWith`, `address.slice`, `address.toLowerCase`, `v4.startsWith`.

SHA-256 do trecho: `b06e31495dc5f77ad7a229497ef80083737fda0795b88b4c097da1c0dd69d7ee`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
