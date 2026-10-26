# `buildSandSubagentSteerReviewTarget`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/sand-subagent-auto-review.ts` · [README do módulo](../../../../../modules/core/runner/sand-subagent-auto-review-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:780775-780784](../../../../../../reference/runtime/host-main.cjs#L780775-L780784) | `FunctionDeclaration` | não | `args` |
| [evaluation:581123-581132](../../../../../../reference/runtime/sand-eval-runner.cjs#L581123-L581132) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780775-780784](../../../../../../reference/runtime/host-main.cjs#L780775-L780784) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:581123-581132](../../../../../../reference/runtime/sand-eval-runner.cjs#L581123-L581132) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:780775

Chamadas escritas diretamente neste corpo: `args.message.trim`.

SHA-256 do trecho: `4c85b5cd09b6216d143f5b5ff1e5a53984af650403a16a4acf6877bb7bf29618`.

### evaluation:581123

Chamadas escritas diretamente neste corpo: `args.message.trim`.

SHA-256 do trecho: `4c85b5cd09b6216d143f5b5ff1e5a53984af650403a16a4acf6877bb7bf29618`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
