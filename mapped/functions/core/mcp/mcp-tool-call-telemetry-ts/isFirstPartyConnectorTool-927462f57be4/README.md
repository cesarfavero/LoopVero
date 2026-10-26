# `isFirstPartyConnectorTool`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/mcp-tool-call-telemetry.ts` · [README do módulo](../../../../../modules/core/mcp/mcp-tool-call-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:479236-479239](../../../../../../reference/runtime/sand-eval-runner.cjs#L479236-L479239) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:479236-479239](../../../../../../reference/runtime/sand-eval-runner.cjs#L479236-L479239) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:479236

Chamadas escritas diretamente neste corpo: `FIRST_PARTY_GMAIL_MCP_TOOLS.has`, `FIRST_PARTY_GOOGLE_DRIVE_MCP_TOOLS.has`.

SHA-256 do trecho: `72605336a44ffe9ac7dcf2d60ce080eb1c4f1a3708f3fb291addf489356e6620`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
