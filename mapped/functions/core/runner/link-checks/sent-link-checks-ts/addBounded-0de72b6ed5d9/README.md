# `addBounded`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/link-checks/sent-link-checks.ts` · [README do módulo](../../../../../../modules/core/runner/link-checks/sent-link-checks-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:583462-583469](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583462-L583469) | `FunctionDeclaration` | não | `set3, value, max` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583462-583469](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583462-L583469) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583462

Chamadas escritas diretamente neste corpo: `.next`, `set3.add`, `set3.delete`, `set3.has`, `set3.values`.

SHA-256 do trecho: `d52bfd13f4e2f21fcd740810b9eb5699f7a9160c9e827c727a20ea9278d648ac`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
