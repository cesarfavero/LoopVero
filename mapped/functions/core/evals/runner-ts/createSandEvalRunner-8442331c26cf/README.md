# `createSandEvalRunner`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/evals/runner.ts` · [README do módulo](../../../../../modules/core/evals/runner-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:596865-596867](../../../../../../reference/runtime/sand-eval-runner.cjs#L596865-L596867) | `FunctionDeclaration` | não | `options2, applyProfile = (composed) => composed` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596865-596867](../../../../../../reference/runtime/sand-eval-runner.cjs#L596865-L596867) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:596865

Chamadas escritas diretamente neste corpo: `applyProfile`, `buildSandEvalRunnerOptions`, `new SandAgentRunner`.

SHA-256 do trecho: `1ff79ca45771d98a69cd2f2ad431fcd8b262f1e84dfc2e2628871b82a3775310`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
