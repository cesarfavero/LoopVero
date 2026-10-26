# `downloadFile`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/user-machine-fixtures.ts` · [README do módulo](../../../../../modules/core/evals/user-machine-fixtures-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:596442-596452](../../../../../../reference/runtime/sand-eval-runner.cjs#L596442-L596452) | `ArrowFunctionExpression` | sim | `_ctx, _agentId, path33, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596442-596452](../../../../../../reference/runtime/sand-eval-runner.cjs#L596442-L596452) | 2 | 0 | 0 | 1 | 2 | 0 |

### evaluation:596442

Chamadas escritas diretamente neste corpo: `missingFileMessage`, `new BoxFileTooLargeError`, `new Error`, `this.assertReachable`, `this.files.get`, `this.normalizePath`.

Alvos de lançamento explícito: `BoxFileTooLargeError`, `Error`.

SHA-256 do trecho: `208a4a709db11475865e43fe220a7be5c0ef1c80d7415f1f197a5e8b5cb52704`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
