# `present`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/evals/rl-parity-template.ts` · [README do módulo](../../../../../modules/core/evals/rl-parity-template-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:596120-596122](../../../../../../reference/runtime/sand-eval-runner.cjs#L596120-L596122) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596120-596122](../../../../../../reference/runtime/sand-eval-runner.cjs#L596120-L596122) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:596120

Chamadas escritas diretamente neste corpo: `value.trim`.

SHA-256 do trecho: `5139f9bfa2ad4f5ea905e2555fa27dd7f709594f4cca325c5eb043c63b4e5d98`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
