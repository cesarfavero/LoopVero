# `selectConnectedMcpCustomInstructions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/mcp-custom-instructions.ts` · [README do módulo](../../../../../modules/shared/mcp/mcp-custom-instructions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:529150-529159](../../../../../../reference/runtime/sand-eval-runner.cjs#L529150-L529159) | `FunctionDeclaration` | não | `connectedServerNames, instructionsByServer` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529150-529159](../../../../../../reference/runtime/sand-eval-runner.cjs#L529150-L529159) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:529150

Chamadas escritas diretamente neste corpo: `entries.push`, `entries.sort`, `instructionsByServer.get`, `new Set`, `resolveMcpCustomInstruction`.

SHA-256 do trecho: `9c78c3e580362085792fc382d3b198cf026b08d242e8bda379e19a256c69a637`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
