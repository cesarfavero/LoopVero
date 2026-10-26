# `FixtureUserMachine.replay`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/user-machine-fixtures.ts` · [README do módulo](../../../../../modules/core/evals/user-machine-fixtures-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:596362-596379](../../../../../../reference/runtime/sand-eval-runner.cjs#L596362-L596379) | `method` | sim | `outcome, workingDirectory` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596362-596379](../../../../../../reference/runtime/sand-eval-runner.cjs#L596362-L596379) | 2 | 0 | 0 | 0 | 0 | 0 |

### evaluation:596362

Chamadas escritas diretamente neste corpo: `new ShellStream`, `new ShellStreamExit`, `new ShellStreamStderr`, `new ShellStreamStdout`, `this.cwd`.

SHA-256 do trecho: `c71225aaf8286a00fd7116f15e15b1348626c88966523c9b26eb0bd326f278a1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
