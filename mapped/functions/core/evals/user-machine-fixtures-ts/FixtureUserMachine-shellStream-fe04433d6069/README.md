# `FixtureUserMachine.shellStream`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/user-machine-fixtures.ts` · [README do módulo](../../../../../modules/core/evals/user-machine-fixtures-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:596356-596361](../../../../../../reference/runtime/sand-eval-runner.cjs#L596356-L596361) | `method` | não | `command, workingDirectory` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596356-596361](../../../../../../reference/runtime/sand-eval-runner.cjs#L596356-L596361) | 1 | 0 | 0 | 1 | 1 | 0 |

### evaluation:596356

Chamadas escritas diretamente neste corpo: `new Error`, `this.assertReachable`, `this.replay`, `this.shellOutcome`, `unresponsiveMessage`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `535a2d87e702de03c3a0e76d790dac2966d03b8d950b6d420cb38676b7e61228`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
