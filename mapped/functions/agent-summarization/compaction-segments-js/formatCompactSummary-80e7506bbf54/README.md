# `formatCompactSummary`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/compaction-segments.js` · [README do módulo](../../../../modules/agent-summarization/compaction-segments-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:617196-617227](../../../../../reference/runtime/host-main.cjs#L617196-L617227) | `FunctionDeclaration` | não | `summary` |
| [evaluation:285736-285767](../../../../../reference/runtime/sand-eval-runner.cjs#L285736-L285767) | `FunctionDeclaration` | não | `summary` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617196-617227](../../../../../reference/runtime/host-main.cjs#L617196-L617227) | 5 | 2 | 0 | 1 | 0 | 0 |
| [evaluation:285736-285767](../../../../../reference/runtime/sand-eval-runner.cjs#L285736-L285767) | 5 | 2 | 0 | 1 | 0 | 0 |

### host:617196

Chamadas escritas diretamente neste corpo: `.trim`, `neutralizeCompactionControlTokens`, `result.includes`, `result.indexOf`, `result.lastIndexOf`, `result.replaceAll`, `result.slice`, `result.trim`, `stripLeadingScratchpad`.

Alvos de atribuição ou incremento: `result`, `start`.

SHA-256 do trecho: `bce3a1709900fdb0ba82b77006e7ae97795c9bcd2a036e01aec63386b19e7840`.

### evaluation:285736

Chamadas escritas diretamente neste corpo: `.trim`, `neutralizeCompactionControlTokens`, `result.includes`, `result.indexOf`, `result.lastIndexOf`, `result.replaceAll`, `result.slice`, `result.trim`, `stripLeadingScratchpad`.

Alvos de atribuição ou incremento: `result`, `start`.

SHA-256 do trecho: `bce3a1709900fdb0ba82b77006e7ae97795c9bcd2a036e01aec63386b19e7840`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
