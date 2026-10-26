# `specialMention`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/channels/slack-markup.ts` · [README do módulo](../../../../../modules/shared/channels/slack-markup-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:721603-721611](../../../../../../reference/runtime/host-main.cjs#L721603-L721611) | `FunctionDeclaration` | não | `id, label` |
| [evaluation:539855-539863](../../../../../../reference/runtime/sand-eval-runner.cjs#L539855-L539863) | `FunctionDeclaration` | não | `id, label` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:721603-721611](../../../../../../reference/runtime/host-main.cjs#L721603-L721611) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:539855-539863](../../../../../../reference/runtime/sand-eval-runner.cjs#L539855-L539863) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:721603

Chamadas escritas diretamente neste corpo: `.replace`, `BROADCASTS.has`, `id.startsWith`, `label.trim`, `nonEmpty`, `slackName`.

SHA-256 do trecho: `51902536589096b71c7e5ca16709e5c97cf1e2066bb0f08703b6905d393f5cae`.

### evaluation:539855

Chamadas escritas diretamente neste corpo: `.replace`, `BROADCASTS.has`, `id.startsWith`, `label.trim`, `nonEmpty`, `slackName`.

SHA-256 do trecho: `51902536589096b71c7e5ca16709e5c97cf1e2066bb0f08703b6905d393f5cae`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
