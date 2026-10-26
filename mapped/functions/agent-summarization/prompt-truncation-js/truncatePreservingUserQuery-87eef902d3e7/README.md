# `truncatePreservingUserQuery`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-summarization/prompt-truncation.js` · [README do módulo](../../../../modules/agent-summarization/prompt-truncation-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:617278-617296](../../../../../reference/runtime/host-main.cjs#L617278-L617296) | `FunctionDeclaration` | não | `entry, maxChars` |
| [evaluation:285818-285836](../../../../../reference/runtime/sand-eval-runner.cjs#L285818-L285836) | `FunctionDeclaration` | não | `entry, maxChars` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617278-617296](../../../../../reference/runtime/host-main.cjs#L617278-L617296) | 4 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:285818-285836](../../../../../reference/runtime/sand-eval-runner.cjs#L285818-L285836) | 4 | 0 | 0 | 5 | 0 | 0 |

### host:617278

Chamadas escritas diretamente neste corpo: `.join`, `.replace`, `.trim`, `entry.matchAll`, `entry.replace`, `entry.slice`, `matches.map`, `queryBlocks.slice`, `rest.slice`.

SHA-256 do trecho: `1e892db4758de506ef3c689e285e8de79c6263cf4ede1d25eff7ac2707cd2bd3`.

### evaluation:285818

Chamadas escritas diretamente neste corpo: `.join`, `.replace`, `.trim`, `entry.matchAll`, `entry.replace`, `entry.slice`, `matches.map`, `queryBlocks.slice`, `rest.slice`.

SHA-256 do trecho: `4d668a484ed22935eaf172b0f8a45a6d5a200ad124ec7750ebe3aca94b0c007a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
