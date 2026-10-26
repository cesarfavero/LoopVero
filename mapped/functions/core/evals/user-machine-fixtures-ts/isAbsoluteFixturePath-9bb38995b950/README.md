# `isAbsoluteFixturePath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/user-machine-fixtures.ts` · [README do módulo](../../../../../modules/core/evals/user-machine-fixtures-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:596255-596257](../../../../../../reference/runtime/sand-eval-runner.cjs#L596255-L596257) | `FunctionDeclaration` | não | `path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596255-596257](../../../../../../reference/runtime/sand-eval-runner.cjs#L596255-L596257) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:596255

Chamadas escritas diretamente neste corpo: `WINDOWS_DRIVE_ROOT.test`, `import_node_path43.posix.isAbsolute`.

SHA-256 do trecho: `6240a50c0a809a0b0a3116999f07d820402efaa55265fe1c3ffe2e9efd2230c2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
