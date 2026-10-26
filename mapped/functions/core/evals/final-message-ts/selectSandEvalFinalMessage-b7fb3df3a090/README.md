# `selectSandEvalFinalMessage`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/final-message.ts` · [README do módulo](../../../../../modules/core/evals/final-message-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:628346-628348](../../../../../../reference/runtime/sand-eval-runner.cjs#L628346-L628348) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628346-628348](../../../../../../reference/runtime/sand-eval-runner.cjs#L628346-L628348) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:628346

Chamadas escritas diretamente neste corpo: `args.deliveredMessages.join`.

SHA-256 do trecho: `38c932b0a3e53227c04ebfc269d6ee042c58020257615d810a97e0d82d5c8916`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
