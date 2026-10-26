# `canonicalJson`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/connector-scope/connector-scope.ts` · [README do módulo](../../../../../../modules/core/runner/connector-scope/connector-scope-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:525815-525822](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525815-L525822) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525815-525822](../../../../../../../reference/runtime/sand-eval-runner.cjs#L525815-L525822) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:525815

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `.sort`, `Array.isArray`, `JSON.stringify`, `Object.keys`, `fields3.join`, `isUnknownRecord2`, `value.map`.

SHA-256 do trecho: `8b9786c27fc056f1cc3572cb4898c6438436f0146317ebde9a4be6e3e08712dc`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
