# `messageText2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/transcripts/README.md).

**Módulo:** `core/evals/turn-transcript.ts` · [README do módulo](../../../../../modules/core/evals/turn-transcript-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:628560-628564](../../../../../../reference/runtime/sand-eval-runner.cjs#L628560-L628564) | `FunctionDeclaration` | não | `content` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628560-628564](../../../../../../reference/runtime/sand-eval-runner.cjs#L628560-L628564) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:628560

Chamadas escritas diretamente neste corpo: `.join`, `Array.isArray`, `content.flatMap`.

SHA-256 do trecho: `565316b80c14392d8ae922bed9337447ef636ad4598869e75056e08e63fae0ff`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
