# `handleLocalExecRequests`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/gateway-server.ts` · [README do módulo](../../../../modules/host/gateway-server-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:493754-493765](../../../../../reference/runtime/host-main.cjs#L493754-L493765) | `FunctionDeclaration` | não | `deps, req, res` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:493754-493765](../../../../../reference/runtime/host-main.cjs#L493754-L493765) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:493754

Chamadas escritas diretamente neste corpo: `openSseStream`, `respondError`.

SHA-256 do trecho: `939452aae5cc99605e09672deec006be4f97a1877ae6a3b5a2fe90181cbe7526`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
