# `renderSandRlParityTemplate`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/rl-parity-template.ts` · [README do módulo](../../../../../modules/core/evals/rl-parity-template-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:596123-596160](../../../../../../reference/runtime/sand-eval-runner.cjs#L596123-L596160) | `FunctionDeclaration` | não | `template, values` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596123-596160](../../../../../../reference/runtime/sand-eval-runner.cjs#L596123-L596160) | 8 | 1 | 0 | 1 | 2 | 0 |

### evaluation:596123

Chamadas escritas diretamente neste corpo: `.replace`, `BLOCK_TAG.exec`, `LONE_VARIABLE.exec`, `line.replace`, `line.trim`, `new Error`, `open4.includes`, `open4.pop`, `open4.push`, `out.join`, `out.push`, `present`.

Alvos de atribuição ou incremento: `lastWasBlank`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `6f590b964763b275bbdf4e7a1e0be8959a0fa6bddaa5d0fef5331829ad6345f7`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
