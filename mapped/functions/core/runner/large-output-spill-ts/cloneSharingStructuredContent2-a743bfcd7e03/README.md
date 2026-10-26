# `cloneSharingStructuredContent2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/large-output-spill.ts` · [README do módulo](../../../../../modules/core/runner/large-output-spill-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:515731-515747](../../../../../../reference/runtime/sand-eval-runner.cjs#L515731-L515747) | `FunctionDeclaration` | não | `result` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:515731-515747](../../../../../../reference/runtime/sand-eval-runner.cjs#L515731-L515747) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:515731

Chamadas escritas diretamente neste corpo: `result.clone`.

Alvos de atribuição ou incremento: `copy.result.value.structuredContent`, `success2.structuredContent`.

SHA-256 do trecho: `b7531d2c99eefc2a087d6de86f9408a6d17b12051b07ef52727b9c229ccb183f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
