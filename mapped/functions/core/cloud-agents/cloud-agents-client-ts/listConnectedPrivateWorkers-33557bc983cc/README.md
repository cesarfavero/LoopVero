# `listConnectedPrivateWorkers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agents-client.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:512770-512789](../../../../../../reference/runtime/host-main.cjs#L512770-L512789) | `FunctionDeclaration` | sim | `client` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:512770-512789](../../../../../../reference/runtime/host-main.cjs#L512770-L512789) | 1 | 1 | 1 | 1 | 0 | 0 |

### host:512770

Chamadas escritas diretamente neste corpo: `client.listPrivateWorkers`, `new ListPrivateWorkersRequest`, `workers.map`, `workers.push`.

Alvos de atribuição ou incremento: `page`, `pageToken`.

SHA-256 do trecho: `0cab7d9c8fe0771e52e1da7c7b1d945b96ce471691dac03457dc7d32b6072e64`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
