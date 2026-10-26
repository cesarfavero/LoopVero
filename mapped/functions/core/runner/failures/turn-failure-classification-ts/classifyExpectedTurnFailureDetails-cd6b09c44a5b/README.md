# `classifyExpectedTurnFailureDetails`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/failures/turn-failure-classification.ts` · [README do módulo](../../../../../../modules/core/runner/failures/turn-failure-classification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:736154-736156](../../../../../../../reference/runtime/host-main.cjs#L736154-L736156) | `FunctionDeclaration` | não | `error64` |
| [evaluation:589654-589656](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589654-L589656) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736154-736156](../../../../../../../reference/runtime/host-main.cjs#L736154-L736156) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:589654-589656](../../../../../../../reference/runtime/sand-eval-runner.cjs#L589654-L589656) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:736154

Chamadas escritas diretamente neste corpo: `classifyNode`, `new Set`.

SHA-256 do trecho: `4d1deb11be61a63e0ca6b88ac4d7748b3bf7552287e28dd73cedf1318dbcee6a`.

### evaluation:589654

Chamadas escritas diretamente neste corpo: `classifyNode`, `new Set`.

SHA-256 do trecho: `1fc1ff38e5081a178947114b8366b2c2ce24c20584c75c290da9a4f98c8b8f2e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
