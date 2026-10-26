# `extractCompactionKeywords`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/compaction-segments.js` · [README do módulo](../../../../modules/agent-summarization/compaction-segments-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:617174-617195](../../../../../reference/runtime/host-main.cjs#L617174-L617195) | `FunctionDeclaration` | não | `summary` |
| [evaluation:285714-285735](../../../../../reference/runtime/sand-eval-runner.cjs#L285714-L285735) | `FunctionDeclaration` | não | `summary` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:617174-617195](../../../../../reference/runtime/host-main.cjs#L617174-L617195) | 4 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:285714-285735](../../../../../reference/runtime/sand-eval-runner.cjs#L285714-L285735) | 4 | 1 | 0 | 1 | 0 | 0 |

### host:617174

Chamadas escritas diretamente neste corpo: `/^#{0,6}\s*8\.\s+Current Work/m.exec`, `KEYWORD_STOPWORDS.has`, `keyword.toLowerCase`, `nextHeader.exec`, `seen.includes`, `seen.push`, `summary.slice`, `text3.matchAll`.

Alvos de atribuição ou incremento: `nextHeader.lastIndex`, `text3`.

SHA-256 do trecho: `587e14601fb1e60995e39ec48826838f22a050b05acd52973ead09a0b3955d4c`.

### evaluation:285714

Chamadas escritas diretamente neste corpo: `/^#{0,6}\s*8\.\s+Current Work/m.exec`, `KEYWORD_STOPWORDS.has`, `keyword.toLowerCase`, `nextHeader.exec`, `seen.includes`, `seen.push`, `summary.slice`, `text3.matchAll`.

Alvos de atribuição ou incremento: `nextHeader.lastIndex`, `text3`.

SHA-256 do trecho: `587e14601fb1e60995e39ec48826838f22a050b05acd52973ead09a0b3955d4c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
