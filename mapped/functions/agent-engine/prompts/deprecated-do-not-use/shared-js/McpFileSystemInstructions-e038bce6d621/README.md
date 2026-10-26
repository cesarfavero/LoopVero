# `McpFileSystemInstructions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/deprecated-do-not-use/shared.js` · [README do módulo](../../../../../../modules/agent-engine/prompts/deprecated-do-not-use/shared-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:636261-636305](../../../../../../../reference/runtime/host-main.cjs#L636261-L636305) | `FunctionDeclaration` | não | `{ workspaceProjectDir, mcpDescriptors }, toolNames = {}` |
| [evaluation:424317-424361](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424317-L424361) | `FunctionDeclaration` | não | `{ workspaceProjectDir, mcpDescriptors }, toolNames = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636261-636305](../../../../../../../reference/runtime/host-main.cjs#L636261-L636305) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:424317-424361](../../../../../../../reference/runtime/sand-eval-runner.cjs#L424317-L424361) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:636261

Chamadas escritas diretamente neste corpo: `.join`, `.trim`, `mcpDescriptors.map`.

SHA-256 do trecho: `7b519278c33e4997614e561f5c34955f30eb94e2a2ca46d332307a3bca699450`.

### evaluation:424317

Chamadas escritas diretamente neste corpo: `.join`, `.trim`, `mcpDescriptors.map`.

SHA-256 do trecho: `7b519278c33e4997614e561f5c34955f30eb94e2a2ca46d332307a3bca699450`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
