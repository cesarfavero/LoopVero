# `createOrbitService/resetChromeDiscovery`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/orbit-service.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/orbit-service-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:706243-706247](../../../../../../../reference/runtime/host-main.cjs#L706243-L706247) | `ArrowFunctionExpression` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706243-706247](../../../../../../../reference/runtime/host-main.cjs#L706243-L706247) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:706243

Chamadas escritas diretamente neste corpo: `new AbortController`, `state.discoveryAbortController.abort`.

Alvos de atribuição ou incremento: `state.discoveryAbortController`, `state.inFlightChromeDiscovery`.

SHA-256 do trecho: `853bcc16d9ab7ea42003c97b0e79c9d34445641fea803f96a22abad09c2de6ea`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
