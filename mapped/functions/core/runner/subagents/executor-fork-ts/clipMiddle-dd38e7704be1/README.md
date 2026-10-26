# `clipMiddle`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/subagents/README.md).

**Módulo:** `core/runner/subagents/executor-fork.ts` · [README do módulo](../../../../../../modules/core/runner/subagents/executor-fork-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:587569-587577](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587569-L587577) | `FunctionDeclaration` | não | `text3, maxChars` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587569-587577](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587569-L587577) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:587569

Chamadas escritas diretamente neste corpo: `Math.ceil`, `text3.slice`.

SHA-256 do trecho: `3f05b5b1423808bc57ab04a9db7a4711ed3f2567dc249134e26efce34bc90010`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
