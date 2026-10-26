# `startCredentialProvider/resolveBrowserCredentialTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/credential-provider/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/credential-provider/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:551756-551756](../../../../../../../reference/runtime/host-main.cjs#L551756-L551756) | `ArrowFunctionExpression` | sim | `{ agentId, item, siteHint }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:551756-551756](../../../../../../../reference/runtime/host-main.cjs#L551756-L551756) | 0 | 0 | 1 | 0 | 0 | 0 |

A ocorrência em host:551756 usa retorno implícito de arrow function.

### host:551756

Chamadas escritas diretamente neste corpo: `coordinator.resolveBrowserTarget`, `resolveAgentWindow`.

SHA-256 do trecho: `8c0361bd6452398720d3365b40de0050474b07b68905e4e993d37556b3d4ce43`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
