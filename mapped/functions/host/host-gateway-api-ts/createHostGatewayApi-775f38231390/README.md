# `createHostGatewayApi`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492329-493277](../../../../../reference/runtime/host-main.cjs#L492329-L493277) | `FunctionDeclaration` | não | `deps` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492329-493277](../../../../../reference/runtime/host-main.cjs#L492329-L493277) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:492329

Chamadas escritas diretamente neste corpo: `createTemplateImportGatewayMethod`, `deps.extensions.api`, `new Map`, `new Set`, `wrapGatewayApiWithServerAgentProxy`.

SHA-256 do trecho: `79bb0b44b341bcecd3774865c0a6866b06569747f1ba8d03a18d55990263c5f5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
