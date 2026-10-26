# `draftSendRouteCandidates`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-tool-registration.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:756027-756062](../../../../../../../reference/runtime/host-main.cjs#L756027-L756062) | `FunctionDeclaration` | sim | `ctx, mcp, mcpConfigJson, route` |
| [evaluation:541915-541950](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541915-L541950) | `FunctionDeclaration` | sim | `ctx, mcp, mcpConfigJson, route` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756027-756062](../../../../../../../reference/runtime/host-main.cjs#L756027-L756062) | 6 | 0 | 1 | 7 | 0 | 0 |
| [evaluation:541915-541950](../../../../../../../reference/runtime/sand-eval-runner.cjs#L541915-L541950) | 6 | 0 | 1 | 7 | 0 | 0 |

### host:756027

Chamadas escritas diretamente neste corpo: `.map`, `emailConnectorOf`, `hostOf2`, `isGrokGmailRoute`, `mcp.getTools`, `new Set`, `tools.filter`, `tools.some`.

SHA-256 do trecho: `e9b87ad67b37ec2775e5ad3c34aab7625969d55c92e70b73e967f8182bdf4ebc`.

### evaluation:541915

Chamadas escritas diretamente neste corpo: `.map`, `emailConnectorOf`, `hostOf2`, `isGrokGmailRoute`, `mcp.getTools`, `new Set`, `tools.filter`, `tools.some`.

SHA-256 do trecho: `e9b87ad67b37ec2775e5ad3c34aab7625969d55c92e70b73e967f8182bdf4ebc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
