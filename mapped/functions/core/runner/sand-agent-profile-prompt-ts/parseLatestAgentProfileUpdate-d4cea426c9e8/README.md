# `parseLatestAgentProfileUpdate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `core/runner/sand-agent-profile-prompt.ts` · [README do módulo](../../../../../modules/core/runner/sand-agent-profile-prompt-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:529829-529856](../../../../../../reference/runtime/sand-eval-runner.cjs#L529829-L529856) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:529829-529856](../../../../../../reference/runtime/sand-eval-runner.cjs#L529829-L529856) | 3 | 1 | 0 | 2 | 0 | 1 |

### evaluation:529829

Chamadas escritas diretamente neste corpo: `.toString`, `JSON.parse`, `errorLogTag`, `import_node_buffer6.Buffer.from`, `nextAgentProfileUpdateMarker`, `normalizeAgentProfileIdentity`, `process.stderr.write`, `text3.indexOf`, `text3.slice`.

Alvos de atribuição ou incremento: `latest`, `searchFrom`.

SHA-256 do trecho: `d3c14760d1fa20645e0bd064630e343cee83c956225b2ae1222821766f6f4f34`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
