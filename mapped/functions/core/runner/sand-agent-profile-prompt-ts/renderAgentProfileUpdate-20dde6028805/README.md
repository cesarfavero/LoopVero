# `renderAgentProfileUpdate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/sand-agent-profile-prompt.ts` · [README do módulo](../../../../../modules/core/runner/sand-agent-profile-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:529791-529804](../../../../../../reference/runtime/sand-eval-runner.cjs#L529791-L529804) | `FunctionDeclaration` | não | `identity2, isRenamedSpelling` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529791-529804](../../../../../../reference/runtime/sand-eval-runner.cjs#L529791-L529804) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:529791

Chamadas escritas diretamente neste corpo: `.join`, `.toString`, `JSON.stringify`, `hiddenPromptMarker`, `import_node_buffer6.Buffer.from`.

SHA-256 do trecho: `2d547fa2d9ed830a8e784d7b71872e44aa7bdb3ab1b09b6147ec2b6db9eb3e21`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
