# `transcriptExcerpt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/virtual-mounts/transcripts.ts` · [README do módulo](../../../../../modules/core/virtual-mounts/transcripts-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:766112-766123](../../../../../../reference/runtime/host-main.cjs#L766112-L766123) | `FunctionDeclaration` | não | `text3, query2` |
| [evaluation:559476-559487](../../../../../../reference/runtime/sand-eval-runner.cjs#L559476-L559487) | `FunctionDeclaration` | não | `text3, query2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:766112-766123](../../../../../../reference/runtime/host-main.cjs#L766112-L766123) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:559476-559487](../../../../../../reference/runtime/sand-eval-runner.cjs#L559476-L559487) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:766112

Chamadas escritas diretamente neste corpo: `.filter`, `.find`, `.toLowerCase`, `.trim`, `Math.floor`, `Math.max`, `Math.min`, `flat.slice`, `flat.toLowerCase`, `needles.map`, `query2.trim`, `relevanceTokens`, `text3.replace`.

SHA-256 do trecho: `ea543238c6510233cc931f4b5d3b909813b59bfac46bbb971471ad5d9d6b802e`.

### evaluation:559476

Chamadas escritas diretamente neste corpo: `.filter`, `.find`, `.toLowerCase`, `.trim`, `Math.floor`, `Math.max`, `Math.min`, `flat.slice`, `flat.toLowerCase`, `needles.map`, `query2.trim`, `relevanceTokens`, `text3.replace`.

SHA-256 do trecho: `ea543238c6510233cc931f4b5d3b909813b59bfac46bbb971471ad5d9d6b802e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
