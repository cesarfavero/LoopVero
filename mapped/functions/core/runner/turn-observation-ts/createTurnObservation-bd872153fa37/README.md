# `createTurnObservation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/turn-observation.ts` · [README do módulo](../../../../../modules/core/runner/turn-observation-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:588575-588912](../../../../../../reference/runtime/sand-eval-runner.cjs#L588575-L588912) | `FunctionDeclaration` | não | `host, timing` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588575-588912](../../../../../../reference/runtime/sand-eval-runner.cjs#L588575-L588912) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:588575

Chamadas escritas diretamente neste corpo: `createExpiryPolicy`, `new Map`, `new Set`.

SHA-256 do trecho: `72c47a966cdba7337ae8331dfd89ba8f111386d7ccc22ce1a49d98433e435d6a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
