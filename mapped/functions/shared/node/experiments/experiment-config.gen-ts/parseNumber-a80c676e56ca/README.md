# `parseNumber`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/experiments/experiment-config.gen.ts` · [README do módulo](../../../../../../modules/shared/node/experiments/experiment-config.gen-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:471059-471064](../../../../../../../reference/runtime/host-main.cjs#L471059-L471064) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:471059-471064](../../../../../../../reference/runtime/host-main.cjs#L471059-L471064) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:471059

Chamadas escritas diretamente neste corpo: `String`, `new Error`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `57d4472649a922324519adf21e07ca8a24ce7f0de915b04f61c5f03ab72fc165`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
