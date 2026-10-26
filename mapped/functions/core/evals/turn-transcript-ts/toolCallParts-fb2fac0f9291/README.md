# `toolCallParts`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/evals/turn-transcript.ts` · [README do módulo](../../../../../modules/core/evals/turn-transcript-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:628518-628535](../../../../../../reference/runtime/sand-eval-runner.cjs#L628518-L628535) | `FunctionDeclaration` | não | `messages` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628518-628535](../../../../../../reference/runtime/sand-eval-runner.cjs#L628518-L628535) | 3 | 2 | 0 | 1 | 0 | 0 |

### evaluation:628518

Chamadas escritas diretamente neste corpo: `Array.isArray`, `isUnknownRecord2`, `parts.push`.

SHA-256 do trecho: `7708ae4f5469a2e1d9eab453e90c60cb57d2d1a73f1cdf3f8248924d387524f7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
