# `createCloudAgentsClient/getInfo`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/cloud-agents/cloud-agents-client.ts` · [README do módulo](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:513293-513295](../../../../../../reference/runtime/host-main.cjs#L513293-L513295) | `FunctionDeclaration` | sim | `bcId, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513293-513295](../../../../../../reference/runtime/host-main.cjs#L513293-L513295) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:513293

Chamadas escritas diretamente neste corpo: `client`, `readCloudAgentInfo`.

SHA-256 do trecho: `d931fc0698e16c459d1764d1580ce188832337d0bc6b6a7ee8f789e7a3af44a1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
