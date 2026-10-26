# `isTolerantComputerAction`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/loop-detection-policy.ts` · [README do módulo](../../../../../modules/core/runner/loop-detection-policy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:483268-483277](../../../../../../reference/runtime/sand-eval-runner.cjs#L483268-L483277) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483268-483277](../../../../../../reference/runtime/sand-eval-runner.cjs#L483268-L483277) | 5 | 0 | 0 | 4 | 0 | 0 |

### evaluation:483268

Chamadas escritas diretamente neste corpo: `Array.isArray`, `TOLERANT_COMPUTER_ACTIONS.has`, `then.every`.

SHA-256 do trecho: `2d51a54d70dcafc66b54bc5c4596d019da58076bd4a118b9258a2149eca8d995`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
