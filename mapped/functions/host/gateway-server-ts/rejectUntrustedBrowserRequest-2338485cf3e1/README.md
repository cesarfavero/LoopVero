# `rejectUntrustedBrowserRequest`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/gateway-server.ts` · [README do módulo](../../../../modules/host/gateway-server-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:493504-493517](../../../../../reference/runtime/host-main.cjs#L493504-L493517) | `FunctionDeclaration` | não | `deps, req, res` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493504-493517](../../../../../reference/runtime/host-main.cjs#L493504-L493517) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:493504

Chamadas escritas diretamente neste corpo: `hostHeaderHostname`, `isLoopbackHostname`, `respondError`.

SHA-256 do trecho: `c0cfb3c1ef11473bb683cdcb1501129d2e6a22c3d4290d12ab3b0ada5c33f35f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
